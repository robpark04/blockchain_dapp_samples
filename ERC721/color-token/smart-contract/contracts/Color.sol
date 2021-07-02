// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Color is ERC721Enumerable {
    // using Counters for Counters.Counter;
    // Counters.Counter private _tokenIds;
    string[] public colors;
    mapping(string => bool) _colorExists;

    constructor() ERC721("ColorToken", "CLRT") {}

    //e.g. color = "#ffffff"
    function mint(string  memory _color) public {
      //Require unique color
      require(!_colorExists[_color], "Token with this color is already defined");
      //Color - add it
      colors.push(_color); //push returns the length of the new array
      uint _id = colors.length;
      //Call the mint function
      _mint(msg.sender, _id);
      //Color - track it
      _colorExists[_color] = true;
    }

    // function awardItem(address player, string memory tokenURI)
    //     public
    //     returns (uint256)
    // {
    //     _tokenIds.increment();

    //     uint256 newItemId = _tokenIds.current();
    //     _mint(player, newItemId);
    //     _setTokenURI(newItemId, tokenURI);

    //     return newItemId;
    // }
}