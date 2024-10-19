//SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {DynamicNft} from "src/DynamicNft.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {console2} from "forge-std/Script.sol";
import {MockBlocksenseOracle} from "src/MockBlocksenseOracle.sol";

contract AuditorsManager is Ownable {
    error AuditorsManager__InvalidConstructorArgumentsLength();
    error AuditorsManager__NotAuditorManagerOrOwner();
    error AuditorsManager__NotAuditorManager();
    error AuditorsManager__ZeroAddress();

    DynamicNft private managedNft;
    MockBlocksenseOracle private oracle;
    mapping(address auditor => uint256 tokenId) public auditorsToNfts;
    address[] public auditors;
    mapping(address => string) private auditorsNames;

    constructor(
        address[] memory _auditors,
        string[] memory uris,
        address _owner,
        address _oracle
    ) Ownable(_owner) {
        if (_auditors.length != uris.length) {
            revert AuditorsManager__InvalidConstructorArgumentsLength();
        }

        managedNft = new DynamicNft();
        oracle = MockBlocksenseOracle(_oracle);

        for (uint i = 0; i < _auditors.length; i++) {
            mintNftForAuditor(_auditors[i], uris[i]);
        }
    }

    event NftUpdated(uint256 indexed tokenId, string uri);

    modifier onlyOwnerOrContract() {
        if (msg.sender == address(0)) {
            revert AuditorsManager__ZeroAddress();
        }
        if (msg.sender != address(this) && msg.sender != owner()) {
            revert AuditorsManager__NotAuditorManagerOrOwner();
        }
        _;
    }
    modifier onlyContract() {
        if (msg.sender == address(0)) {
            revert AuditorsManager__ZeroAddress();
        }
        if (msg.sender != address(this)) {
            revert AuditorsManager__NotAuditorManager();
        }
        _;
    }

    function mintNftForAuditor(
        address _auditor,
        string memory _uri
    ) public onlyOwnerOrContract {
        auditorsToNfts[_auditor] = DynamicNft(managedNft).getCounter();
        auditors.push(_auditor);

        managedNft.mintNft(_uri, _auditor); // mints NFT for auditor
    }

    function updateUri(uint256 _tokenId, string memory _uri) public onlyOwner {
        emit NftUpdated(_tokenId, _uri);

        managedNft.updateUri(_tokenId, _uri);
    }

    function getManagedNft() public view returns (DynamicNft) {
        return (managedNft);
    }

    function getAudtiorStats(
        string memory auditorName,
        string memory auditType
    ) public view returns (uint256) {
        return oracle.getLatestStats(auditorName, auditType);
    }

    function getOracle() public view returns (address) {
        return address(oracle);
    }

    function addAuditorName(
        address auditorAddress,
        string memory _auditorName
    ) public onlyOwner {
        auditorsNames[auditorAddress] = _auditorName;
    }

    function getAuditorName(
        address _auditor
    ) public view returns (string memory) {
        return auditorsNames[_auditor];
    }
}
