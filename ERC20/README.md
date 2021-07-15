<p align="center"><a href="https://blockchain-dapp-sample.netlify.app/" target="_blank"><h1>ERC20 token swapping</h1></a></p>

smart contract address on etherscan
Pool Address: https://rinkeby.etherscan.io/address/0xEF2a14E0c2DB2bd9bd7192910fF40f2c85e50BE2
Token Address: https://rinkeby.etherscan.io/address/0x0974bEe5F58816deA4ee87Bf488FFA4892674DFF

deployed dapp url
https://blockchain-dapp-sample.netlify.app
# ERC20 Token Swap

### Frameworks

* "solidity": "^0.6.0
* "react": "^17.0.2"

## Description

Mint own color tokens and explore the entire color tokens based on ERC721

### Smart contract compile, build and test

1. npx truffle compile
2. npx truffle-flattener ./contracts/Color.sol > ./contracts-flatter/FlatColorToken.sol
3. npx truffle migrate --network ropsten
4. npx truffle console --network development
5. npx truffle test
### Dapp CI/CD

* CircleCI
* Netlify

### ToDo

<p>Install the MetaMask chrome extension</p>

