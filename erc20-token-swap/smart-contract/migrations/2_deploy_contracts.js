var DexToken = artifacts.require("./DexToken.sol");
var DexPool = artifacts.require("./DexPool.sol");

async function deployContracts(deployer) {
  // const dexToken = await deployer.deploy(DexToken);
  // console.log(`DexToken Contract deployed at address ${DexToken.address}`);

  const dexPool = await deployer.deploy(DexPool);
  console.log(`DexPool Contract deployed at address ${DexPool.address}`)
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