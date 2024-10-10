// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "../Token/MirageNFT.sol";

contract MirageStoryCreator is
    Initializable,
    AccessControlUpgradeable,
    UUPSUpgradeable
{
    address public PageCreator;

    mapping(uint256 => address) public storyIdToContract;
    address[] public deployedStories;

    uint256 private Counter;

    event StoryNFTDeployed(address storyNFTAddress, uint256 storyId);

    function Initialize(address _admin) external initializer{
        __AccessControl_init();
        _grantRole(DEFAULT_ADMIN_ROLE, _admin);
    }

    function changePageCreatorAddress(
        address _newPageCreator
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        PageCreator = _newPageCreator;
    }

    function deployStoryNFT() external returns (address StoryNFT) {
        Counter++;
        require(
            storyIdToContract[Counter] == address(0),
            "Story already deployed"
        );

        MirageNFT _address = new MirageNFT(Counter, PageCreator, address(this));

        storyIdToContract[Counter] = address(_address);
        deployedStories.push(address(_address));

        emit StoryNFTDeployed(address(_address), Counter);
        return address(_address);
    }

    function getDeployedStories() external view returns (address[] memory) {
        return deployedStories;
    }
    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}
}
