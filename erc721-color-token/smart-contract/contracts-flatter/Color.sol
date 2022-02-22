// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Metadata.sol";

contract Color is ERC721, ERC721Enumerable, ERC721Metadata {
  string[] public colors;
  mapping(string => bool) _colorExists;

  constructor() ERC721Metadata("ERC721 color token", "ECT"){
  }

  //e.g. color = "#ffffff"
  function mint(string  memory _color) public {
    //Require unique color
    require(!_colorExists[_color], "Token with this color is already defined");
    //Color - add it
    colors.push(_color);
    uint _id = colors.length;
    //Call the mint function
    _mint(msg.sender, _id);
    //Color - track it
    _colorExists[_color] = true;
  }
}