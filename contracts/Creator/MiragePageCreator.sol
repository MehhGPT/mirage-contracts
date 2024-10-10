// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "../Interfaces/iMirageNFT.sol";

contract MiragePageCreator is
    Initializable,
    AccessControlUpgradeable,
    UUPSUpgradeable
{
    event PageCreated(address indexed storyAddress, uint256 parentPageId);

    function Initialize() external initializer {
        __AccessControl_init();
    }

    function createPage(
        address storyAddress,
        address to,
        uint256 parentPageId
    ) external {
        IMirageNFT(storyAddress).mintPage(to, parentPageId);
        emit PageCreated(storyAddress, parentPageId);
    }

    function getPageData(
        address storyAddress,
        uint256 pageId
    ) external view returns (IMirageNFT.PageStruct memory) {
        return IMirageNFT(storyAddress).getPageMetadata(pageId);
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}
}
