// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Color is ERC721 {
  string[] public colors;
  mapping(string => bool) _colorExists;

  constructor() ERC721("Color", "COLOR") public{
  }

  //e.g. color = "#ffffff"
  function mint(string  memory _color) public {
    //Require unique color
    require(!_colorExists[_color], "Token with this color is already defined");
    //Color - add it
    uint _id = colors.push(_color); //push returns the length of the new array
    //Call the mint function
    _mint(msg.sender, _id);
    //Color - track it
    _colorExists[_color] = true;
  }
}