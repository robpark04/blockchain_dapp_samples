// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import "./DexToken.sol";

contract DexPool {
    
    event Bought(uint256 amount);
    event Sold(uint256 amount);

    DexToken public token;

    constructor() public {
        token = new DexToken();
    }
    
    function buy() payable public {
        uint256 amountTobuy = msg.value;
        uint256 dexBalance = token.balanceOf(address(this));
        require(amountTobuy > 0, "You need to send some Ether");
        require(amountTobuy <= dexBalance, "Not enough tokens in the reserve");
        token.transfer(msg.sender, amountTobuy);
        emit Bought(amountTobuy);
    }
    
    function sell(uint256 amount) public {
        require(amount > 0, "You need to sell at least some tokens");
        // uint256 allowance = token.allowance(msg.sender, address(this));
        // require(allowance >= amount, "Check the token allowance");
        token.transferFrom(msg.sender, address(this), amount);
        msg.sender.transfer(amount);
        emit Sold(amount);
    }

}