//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {Test} from "forge-std/Test.sol";
import {DynamicNft, Ownable} from "src/DynamicNft.sol";
import {AuditorsManager} from "src/AuditorsManager.sol";
import {DeployAuditorsManager} from "script/DeployAuditorsManager.s.sol";

contract DynamicNftTest is Test {
    address public USER = makeAddr("User");
    DynamicNft public dynamicNft;
    AuditorsManager public auditorManager;

    function setUp() external {
        DeployAuditorsManager deployAuditorManager = new DeployAuditorsManager();
        auditorManager = deployAuditorManager.run();

        dynamicNft = auditorManager.getManagedNft();
    }

    function testMint(string memory uri) external {
        vm.prank(address(auditorManager));
        dynamicNft.mintNft(uri, USER);

        assertEq(dynamicNft.balanceOf(USER), 1);
        assertEq(dynamicNft.tokenURI(0), uri);
        assertEq(dynamicNft.getCounter(), 1);
    }

    function testUpdateUri(string memory uri) external {
        vm.startPrank(address(auditorManager));
        dynamicNft.mintNft("", USER);
        dynamicNft.updateUri(0, uri);
        vm.stopPrank();

        assertEq(dynamicNft.balanceOf(USER), 1);
        assertEq(dynamicNft.tokenURI(0), uri);
        assertEq(dynamicNft.getCounter(), 1);
    }
}
