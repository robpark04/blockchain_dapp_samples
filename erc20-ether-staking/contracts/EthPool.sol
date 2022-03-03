// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract EthPool is Ownable {
    using SafeMath for uint256;
    // using Address for address;

    struct UserInfo {
        uint256 amount; // How many LP tokens the user has provided.
        uint256 reward;
        bool isStaked;
    }

    address[] public userAddrs;
    mapping(address => UserInfo) public userInfo;

    /** @dev track total staked amount */
    uint public totalStaked;

    /** @dev track total reward amount */
    uint public totalReward;


    event NotifyDeposit(address sender, uint amount, uint totalAmount);
    event NotifyWithdraw(address sender, uint amount, uint reward);

    /** deposit funds to the contract */
    function deposit() public payable {
        UserInfo storage user = userInfo[msg.sender];
        uint256 amount = msg.value;
        if (!user.isStaked) {
            user.isStaked = true;
            userAddrs.push(msg.sender);
        }
        user.amount = user.amount.add(amount);
        totalStaked += amount;

        emit NotifyDeposit(msg.sender, amount, user.amount);
    }
    function withdraw(uint256 withdrawAmount) public {
        updatePool();

        address payable recipient = payable(msg.sender);
        UserInfo storage user = userInfo[msg.sender];

        require(withdrawAmount <= user.amount, "Withdraw amount should be less than user amount");
        uint256 amount = withdrawAmount + user.reward;
        recipient.transfer(amount);
        totalStaked = totalStaked - withdrawAmount;
        emit NotifyWithdraw(msg.sender, withdrawAmount, user.reward);
        user.amount = user.amount - withdrawAmount;
        user.reward = 0;
    }

    function updatePool() internal {
        if (totalReward > 0) {
            for (uint i=0; i<userAddrs.length; i++) {
                UserInfo storage user = userInfo[userAddrs[i]];
                user.reward = user.reward + totalReward * user.amount / totalStaked;
            }
            totalReward = 0;
        }
    }

    function depositReward() public onlyOwner payable {
        uint256 amount = msg.value;
        totalReward = totalReward + amount;
    }        
}
