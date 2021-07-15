// contracts/Token.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
  address tokenHolder;
  uint256 public tokenPrice;
  uint256 public tokensSold;

  event BuyEvent(address _buyer, uint256 _amount);
  event SellEvent(address _buyer, uint256 _amount);

  constructor() ERC20("MyToken", "MTK") {
    tokensSold = 0;
    tokenPrice = 100;
    _mint(address, 1000000 * 10 ** decimals());
    tokenHolder = msg.sender;
  }
  function buyTokens() public payable {
    uint256 numberOfTokens = msg.value * tokenPrice;
    require(balanceOf(tokenHolder) >= numberOfTokens);
    require(transferFrom(tokenHolder, msg.sender, numberOfTokens));

    tokensSold += numberOfTokens;
    emit BuyEvent(msg.sender, numberOfTokens);
  }

}
