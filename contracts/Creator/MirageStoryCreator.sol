// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "../Token/MirageNFT.sol";

contract MirageStoryCreator is AccessControl {
    address public PageCreator;

    mapping(uint256 => address) public storyIdToContract;
    address[] public deployedStories;

    uint256 private Counter;

    event StoryNFTDeployed(address storyNFTAddress, uint256 storyId);

    constructor(address admin) {
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
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
        Counter++;

        emit StoryNFTDeployed(address(_address), Counter);
        return address(_address);
    }

    function getDeployedStories() external view returns (address[] memory) {
        return deployedStories;
    }
}
