// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol"; // Updated import location for Clones
import "../Token/MirageNFT.sol";

contract StoryDeployer is
    Initializable,
    AccessControlUpgradeable,
    UUPSUpgradeable
{
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    address public storyNFTImplementation;

    mapping(uint256 => address) public storyIdToContract;
    address[] public deployedStories;

    event StoryNFTDeployed(address storyNFTAddress, uint256 storyId);
    event StoryNFTUpgraded(uint256 storyId, address newImplementation);

    function initialize(
        address admin,
        address _storyNFTImplementation
    ) external initializer {
        __AccessControl_init();
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        _grantRole(ADMIN_ROLE, admin);

        storyNFTImplementation = _storyNFTImplementation;
    }

    function deployStoryNFT(
        uint256 storyId
    ) external onlyRole(ADMIN_ROLE) returns (address) {
        require(
            storyIdToContract[storyId] == address(0),
            "Story already deployed"
        );

        // Clone the StoryNFT and initialize it
        address clone = Clones.clone(storyNFTImplementation); // Use the updated import here
        MirageNFT(clone).Initialize(storyId, msg.sender);

        // Save the clone address to the storyId mapping and add to deployed stories
        storyIdToContract[storyId] = clone;
        deployedStories.push(clone);

        emit StoryNFTDeployed(clone, storyId);
        return clone;
    }

    function upgradeStoryNFT(
        uint256 storyId,
        address newImplementation
    ) external onlyRole(ADMIN_ROLE) {
        address storyContract = storyIdToContract[storyId];
        require(storyContract != address(0), "Story does not exist");

        // Call upgradeTo on the UUPS upgradeable proxy
        UUPSUpgradeable(storyContract)._authorizeUpgrade(newImplementation);

        emit StoryNFTUpgraded(storyId, newImplementation);
    }

    function getDeployedStories() external view returns (address[] memory) {
        return deployedStories;
    }
    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyRole(ADMIN_ROLE) {}
}
