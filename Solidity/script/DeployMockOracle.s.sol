//SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {Script} from "forge-std/Script.sol";
import {MockBlocksenseOracle} from "src/MockBlocksenseOracle.sol";
import {FillOrcale} from "script/Interactions.s.sol";

contract DeployMockOracle is Script {
    function run() public returns (MockBlocksenseOracle) {
        vm.startBroadcast();
        MockBlocksenseOracle oracle = runWithoutBroadcast();
        vm.stopBroadcast();
        return oracle;
    }

    function runWithoutBroadcast() public returns (MockBlocksenseOracle) {
        FillOrcale fillOrcale = new FillOrcale();
        MockBlocksenseOracle oracle = new MockBlocksenseOracle();

        (
            string[] memory _auditors,
            string[] memory _auditTypes,
            uint256[] memory _values
        ) = fillOrcale.getMockData();
        fillOrcale.fillOracleDataWithoutBroadcast(
            address(oracle),
            _auditors,
            _auditTypes,
            _values
        );

        return oracle;
    }
}
