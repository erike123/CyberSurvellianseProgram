//SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

contract MockBlocksenseOracle {
    mapping(string => mapping(string => uint256)) public stats;

    function updateStats(
        string memory auditor,
        string memory auditType,
        uint256 value
    ) public {
        stats[auditor][auditType] = value;
    }

    function getLatestStats(
        string memory auditorName,
        string memory auditType
    ) public view returns (uint256) {
        return stats[auditorName][auditType];
    }
}
