/* eslint-disable import/no-extraneous-dependencies */
const HDWalletProvider = require("@truffle/hdwallet-provider");

const fs = require("fs");

const mnemonic = fs.readFileSync(".secret").toString().trim();
const PROJECT_ID = fs.readFileSync(".secret.infura").toString().trim();
module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545,
      network_id: "*", // Any network (default: none)
    },
    production: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `wss://mainnet.infura.io/ws/v3/${PROJECT_ID}`
        ),
      network_id: 1, // mainnet's id
      gas: 8000000,
      gasPrice: 200000000000, // 200 gwei (in wei)
      websockets: true, // (default: false)
      confirmations: 2, // (default: 0)
      timeoutBlocks: 50,
    },
    goerli: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `wss://goerli.infura.io/ws/v3/${PROJECT_ID}`
        ),
      websockets: true, // (default: false)
      confirmations: 1, // (default: 0)
      network_id: 5, // goerli's id
      networkCheckTimeout: 1000000000,
      gas: 8000000,
      gasPrice: 50000000000, // 50 gwei (in wei)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `wss://ropsten.infura.io/ws/v3/${PROJECT_ID}`
        ),
      websockets: true, // (default: false)
      confirmations: 2, // (default: 0)
      network_id: 3, // ropsten's id
      networkCheckTimeout: 1000000000,
      gas: "3000000",
      gasPrice: "200000000000", // 200 gwei (in wei)
      timeoutBlocks: 50,
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `wss://rinkeby.infura.io/ws/v3/${PROJECT_ID}`
        ),
      websockets: true, // (default: false)
      confirmations: 2, // (default: 0)
      network_id: 4, // ropsten's id
      networkCheckTimeout: 1000000000,
      // gas: "3000000",
      // gasPrice: "200000000000", // 200 gwei (in wei)
      timeoutBlocks: 200,
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },    
    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websockets: true        // Enable EventEmitter interface for web3 (default: false)
    // },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    // ropsten: {
    // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
    // network_id: 3,       // Ropsten's id
    // gas: 5500000,        // Ropsten has a lower block limit than mainnet
    // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },

    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },
  plugins: ["solidity-coverage"],
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.0", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
        },
        //  evmVersion: "byzantium"
      },
    },
  },
};
