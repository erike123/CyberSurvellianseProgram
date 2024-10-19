//SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {AuditorsManager} from "src/AuditorsManager.sol";
import {Script} from "forge-std/Script.sol";
import {DynamicNft} from "src/DynamicNft.sol";
import {MockBlocksenseOracle} from "src/MockBlocksenseOracle.sol";
import {DeployMockOracle} from "script/DeployMockOracle.s.sol";

contract DeployAuditorsManager is Script {
    function run() public returns (AuditorsManager) {
        vm.startBroadcast();
        DeployMockOracle deployMockOracle = new DeployMockOracle();
        MockBlocksenseOracle oracle = deployMockOracle.runWithoutBroadcast();
        AuditorsManager auditorsManager = new AuditorsManager(
            new address[](0),
            new string[](0),
            msg.sender,
            address(oracle)
        );
        vm.stopBroadcast();
        return auditorsManager;
    }
}
