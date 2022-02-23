import { expect } from 'chai'
import { ethers } from 'hardhat'
import '@nomiclabs/hardhat-ethers'

import { EthPool__factory, EthPool } from '../build/types'

const { getContractFactory, getSigners } = ethers

describe('EthPool', () => {
  let ethPool: EthPool

  beforeEach(async () => {
    // 1
    const signers = await getSigners()

    // 2
    const ethPoolFactory = (await getContractFactory('EthPool', signers[0])) as EthPool__factory
    ethPool = await ethPoolFactory.deploy()
    await ethPool.deployed()
  })

  // 3 (deposit)
  describe('deposit', async () => {
    it('should deposit', async () => {
      const [userA, userB] = await ethers.getSigners()
      const makeADeposit = await ethPool.connect(userA).deposit({ from: userA.address, value: 20 })
      await makeADeposit.wait()

      const makeBDeposit = await ethPool.connect(userB).deposit({ from: userB.address, value: 30 })
      await makeBDeposit.wait()

      const makeTDepositReward = await ethPool.connect(userA).depositReward({ from: userA.address, value: 100 })
      await makeTDepositReward.wait()

      const userAInfo = await ethPool.userInfo(userA.address)
      const userBInfo = await ethPool.userInfo(userB.address)
      expect(userAInfo.amount).to.eq(20)
      expect(userAInfo.reward).to.eq(40)
      expect(userBInfo.amount).to.eq(30)
      expect(userBInfo.reward).to.eq(60)
    })
  })
})
