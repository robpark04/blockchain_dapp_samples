var DappToken = artifacts.require("./DappToken.sol");
var DappTokenSale = artifacts.require("./DappTokenSale.sol");

async function deployContracts(deployer) {
  const dappToken = await deployer.deploy(DappToken, 1000000);
  console.log(`DappToken Contract deployed at address ${DappToken.address}`);

  // Token price is 0.001 Ether
  var tokenPrice = 1000000000000000;
  const dappTokenSale = await deployer.deploy(DappTokenSale, DappToken.address, tokenPrice);
  console.log(`DappTokenSale Contract deployed at address ${DappTokenSale.address}`)
}

module.exports = function (deployer) {
  deployer.then(async () => {
    console.log(deployer.network);
    switch (deployer.network) {
      case 'local':
      case 'development':
      case 'rinkeby':
      case 'ropsten':
        case 'kovan':
        await deployContracts(deployer);
        break;
      case 'mainnet':
      case 'mainnet-fork':
        await deployContracts(deployer);
        break;
      default:
        throw ("Unsupported network");
    }
  }) 
};