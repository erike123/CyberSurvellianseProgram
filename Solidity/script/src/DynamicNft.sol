//SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract DynamicNft is ERC721, Ownable {
    uint256 private s_tokenCounter;
    mapping(uint256 => string) private s_tokenIdToUri;

    constructor() ERC721("Auditors", "AUD") Ownable(msg.sender) {
        s_tokenCounter = 0;
    }

    function mintNft(string memory uri, address to) external onlyOwner {
        s_tokenIdToUri[s_tokenCounter] = uri;
        _safeMint(to, s_tokenCounter);
        s_tokenCounter++;
    }

    function updateUri(uint256 _tokenId, string memory uri) external onlyOwner {
        s_tokenIdToUri[_tokenId] = uri;
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        return s_tokenIdToUri[tokenId];
    }

    function getCounter() public view returns (uint256) {
        return s_tokenCounter;
    }
}
