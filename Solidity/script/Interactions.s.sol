//SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {Script} from "forge-std/Script.sol";
import {MockBlocksenseOracle} from "src/MockBlocksenseOracle.sol";

contract FillOrcale is Script {
    address public constant TESTNET_ADDRESS =
        address(0x0000000000000000000000000000001000000000);

    function run() public returns (MockBlocksenseOracle) {
        fillOracleData(
            TESTNET_ADDRESS,
            new string[](0),
            new string[](0),
            new uint256[](0)
        );
        return MockBlocksenseOracle(TESTNET_ADDRESS);
    }

    function fillOracleData(
        address _oracle,
        string[] memory _auditors,
        string[] memory _auditTypes,
        uint256[] memory _values
    ) public {
        vm.startBroadcast();
        fillOracleDataWithoutBroadcast(
            _oracle,
            _auditors,
            _auditTypes,
            _values
        );
        vm.stopBroadcast();
    }

    function fillOracleDataWithoutBroadcast(
        address _oracle,
        string[] memory _auditors,
        string[] memory _auditTypes,
        uint256[] memory _values
    ) public {
        MockBlocksenseOracle oracle = MockBlocksenseOracle(_oracle);
        for (uint256 i; i < _auditors.length; i++) {
            oracle.updateStats(_auditors[i], _auditTypes[i], _values[i]);
        }
    }

    function getMockData()
        public
        returns (string[] memory, string[] memory, uint256[] memory)
    {
        string[] memory auditors = new string[](3);
        string[] memory auditTypes = new string[](3);
        uint256[] memory values = new uint256[](3);
        auditors[0] = ("Pashov");
        auditors[1] = ("Trust");
        auditors[2] = ("Paladin");
        auditTypes[0] = ("reentrancy");
        auditTypes[1] = ("access control");
        auditTypes[2] = ("reentrancy");
        values[0] = (1);
        values[1] = (5);
        values[2] = (9);

        return (auditors, auditTypes, values);
    }
}
