//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {Test} from "forge-std/Test.sol";
import {console2} from "forge-std/Script.sol";
import {DynamicNft, Ownable} from "src/DynamicNft.sol";
import {AuditorsManager} from "src/AuditorsManager.sol";
import {DeployAuditorsManager} from "script/DeployAuditorsManager.s.sol";
import {MockBlocksenseOracle} from "src/MockBlocksenseOracle.sol";

contract DynamicNftTest is Test {
    address public USER = makeAddr("User");
    DynamicNft public dynamicNft;
    AuditorsManager public auditorManager;
    MockBlocksenseOracle public oracle;

    function setUp() external {
        DeployAuditorsManager deployAuditorManager = new DeployAuditorsManager();
        auditorManager = deployAuditorManager.run();
        dynamicNft = auditorManager.getManagedNft();
        oracle = MockBlocksenseOracle(auditorManager.getOracle());
    }

    function testMint(string memory uri) public {
        vm.prank(auditorManager.owner());
        auditorManager.mintNftForAuditor(USER, uri);

        assertEq(dynamicNft.balanceOf(USER), 1);
        assertEq(dynamicNft.tokenURI(0), uri);
        assertEq(dynamicNft.getCounter(), 1);
    }

    function testMintRevertsOnUnauthorized(string memory uri) external {
        vm.expectRevert(
            AuditorsManager.AuditorsManager__NotAuditorManagerOrOwner.selector
        );
        vm.prank(USER);
        auditorManager.mintNftForAuditor(USER, uri);
    }

    function testUpdateUriAsOwner(string memory uri) external {
        testMint(uri);
        auditorManager.updateUri(0, uri);

        assertEq(dynamicNft.balanceOf(USER), 1);
        assertEq(dynamicNft.tokenURI(0), uri);
        assertEq(dynamicNft.getCounter(), 1);
    }

    function testUpdateUriAsContract(string memory uri) external {
        testMint(uri);
        vm.prank(auditorManager.owner());
        auditorManager.updateUri(0, uri);

        assertEq(dynamicNft.balanceOf(USER), 1);
        assertEq(dynamicNft.tokenURI(0), uri);
        assertEq(dynamicNft.getCounter(), 1);
    }

    function testGetLatestStats(
        string memory auditor,
        string memory auditType,
        uint256 value
    ) public {
        oracle.updateStats(auditor, auditType, value);

        assertEq(oracle.getLatestStats(auditor, auditType), value);
    }
}
