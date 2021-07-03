<p align="center"><a href="https://blockchain-dapp-sample.netlify.app/" target="_blank"><h1>Blockchain Dapp Samples</h1></a></p>

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
### CI/CD

* CircleCI
* Netlify

### ToDo

<p>Install the MetaMask chrome extension</p>

