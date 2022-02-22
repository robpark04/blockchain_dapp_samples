const {BN} = require('@openzeppelin/test-helpers');

const TokenVesting = artifacts.require("TokenVesting");

async function deployContracts(deployer) {
  const beneficiary = '0xAf12cc77428b61E6c3941d2Ce1BAc90AeBb26b51';
  const initialRelease = 0;
  const tokenVesting = await deployer.deploy(TokenVesting, beneficiary, initialRelease);
}

async function deployMainnetContracts(deployer) {
  const beneficiary = '0x51abb49aADA27102A78ed9C4AdFBcD28C5df9728';
  const initialRelease = 0;
  const tokenVesting = await deployer.deploy(TokenVesting, beneficiary, initialRelease);
}

module.exports = function (deployer) {
  deployer.then(async () => {
    console.log('network=', deployer.network);
    console.log('address=', deployer.provider.addresses);

    switch (deployer.network) {
      case 'development':
      case 'rinkeby':
      case 'ropsten':
      case 'bsctestnet':
        await deployContracts(deployer);
        break;
      case 'kovan':
        await deployContracts(deployer);
        break;
      case 'mainnet':
      case 'bscmainnet':
      // case 'mainnet-fork':
        await deployMainnetContracts(deployer);
        break;
      default:
        throw ("Unsupported network");
    }
  }) 
};