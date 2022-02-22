import React, { Component } from "react";
import Web3 from "web3";
import { default as BN } from "bn.js";
import ConnectWalletButton from "../components/ConnectWalletButton";
import DexPool from '../abis/DexPool.json'
import DexToken from '../abis/DexToken.json'
import { getNet } from "../stores/netReducer";
import { connect } from "react-redux";

class Dex extends Component  {
    
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      console.log("You have a modern web3 browser!");
      await window.ethereum.enable()
    }
    else if (window.web3) {
      console.log("You have an older web3 browser!");
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  loadBlockchainData = async () => {
    const web3 = window.web3
    //Load accounts
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId()
    const dexPoolData = DexPool.networks[networkId]
    if (dexPoolData) {
      const poolAbi = DexPool.abi
      const poolAddress = dexPoolData.address
      this.setState({ poolAddress });
      console.log('---poolAddress:', poolAddress)
      const poolContract = new web3.eth.Contract(poolAbi, poolAddress)
      this.setState({ poolContract })

      const tokenAddress = await poolContract.methods.token().call()
      this.setState({ tokenAddress });
      console.log('---tokenAddress:', tokenAddress)
      const tokenAbi = DexToken.abi
      const tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress)
      this.setState({ tokenContract })

      const tokenDecimals = await tokenContract.methods.decimals().call()
      this.setState({ tokenDecimals })

      await this.loadTokenData();
    } else {
      window.alert("Smart contract not deployed to detected network.");
    }
  }

  loadTokenData = async () => {
    if (!this.state.tokenContract) {
      return;
    }

    const web3 = window.web3
    const result = await web3.eth.getBalance(this.state.account);
    const etherAmount = web3.utils.fromWei(result, "ether");
    this.setState({ etherAmount });

    const tokenTotalSupplyValue = await this.state.tokenContract.methods.totalSupply().call()
    const tokenTotalSupply = this.parseBNumber(tokenTotalSupplyValue, this.state.tokenDecimals)
    this.setState({ tokenTotalSupply })

    const tokenAmountValue = await this.state.tokenContract.methods.balanceOf(this.state.account).call()
    const tokenAmount = this.parseBNumber(tokenAmountValue, this.state.tokenDecimals)
    this.setState({ tokenAmount })
  }

  makeBNumber = (amount, decimal) => {
    let decimalb = 10 ** decimal;
    const decimals = new BN(decimalb.toString());
    const bn = new BN(new BN(amount).mul(decimals));
    return bn;
  }
  parseBNumber = (amount, decimal) => {
    let decimalb = 10 ** decimal;
    const value = amount / decimalb;
    return value;
  }


  constructor(props) {
    super(props)
    this.state = {
      account: null,
      poolAddress: '',
      tokenAddress: '',

      poolContract: null,
      tokenContract: null,
      
      tokenDecimals: 0,
      tokenTotalSupply: 0,
      etherAmount: 0,
      tokenAmount: 0,
      amountToExchange: 0,

      spinnerModal: 0,
      completeModal: 0,
      scanUrl: ''
    }
  }

  buyToken = () => {
    const value = this.state.amountToExchange * 10 ** this.state.tokenDecimals;
    this.state.poolContract.methods.buy().send({from: this.state.account, value })
    .once("receipt", (receipt) => {
      this.loadTokenData();
    })
  }
  sellToken = () => {
    const value = this.state.amountToExchange * 10 ** this.state.tokenDecimals;
    const bnValue = Web3.utils.toBN(String(value));
    this.state.poolContract.methods.sell(bnValue).send({from: this.state.account })
    .once("receipt", (receipt) => {
      this.loadTokenData();
    })

  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      amountToExchange: e.target.value
    })
  }
  
  render() {
    return (
        <>
            {this.state.account ? (
                <div className="container-fluid">
                    <div className="row">
                        <main role="main" className="col-lg-12 d-flex">
                        <div className="content mr-auto ml-auto">
                        
                          <h6>Pool Address<a className="pl-2" target="_blank" href={`https://rinkeby.etherscan.io/address/${this.state.poolAddress}`}>{this.state.poolAddress}</a></h6>
                          <h6>Token Address<a className="pl-2" target="_blank" href={`https://rinkeby.etherscan.io/address/${this.state.tokenAddress}`}>{this.state.tokenAddress}</a></h6>
                          <hr />

                          <h4>Total supply: {this.state.tokenTotalSupply}</h4>
                          <hr />
                          <h4>Token amount: {this.state.tokenAmount}</h4>
                          <hr />
                          <h4>Ether amount: {this.state.etherAmount}</h4>
                          <hr />
                          <div className="pt-4">
                          <h4 className="pt-4">Token amount to buy or sell</h4>
                          </div>
                          <div>
                            <input
                                type="text"
                                className="form-control mb-1"
                                onChange = {(e) => this.handleChange(e)}
                            />
                            <div className="d-flex pt-4">
                              <input
                                  type="submit"
                                  className="mr-1 w100 btn btn-primary"
                                  value="Buy"
                                  onClick={() => this.buyToken()}
                              />
                              <input
                                  type="submit"
                                  className="ml-1 w100 btn btn-primary"
                                  value="Sell"
                                  onClick={() => this.sellToken()}
                              />
                            </div>
                          </div>
                        </div>
                        </main>
                    </div>
                    <div className="row text-center">
                    </div>
                </div>
            ) : (
                <ConnectWalletButton />
            )}
        </>
    );
    }
};

const mapStateToProps = state => ({
    net: getNet(state)
})
export default connect(mapStateToProps)(Dex);
