<p align="center"><a href="https://blockchain-dapp-sample.netlify.app/" target="_blank"><h1>ERC721 color token</h1></a></p>

smart contract address on etherscan
https://ropsten.etherscan.io/address/0x61f38672da349044601497b6903b722f03f07bb3


deployed dapp url
https://blockchain-dapp-sample.netlify.app
# ERC721 Color Token

### Frameworks

* "solidity": "^0.8.0
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

