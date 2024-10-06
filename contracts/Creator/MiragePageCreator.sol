// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "../Interfaces/iMirageNFT.sol";

contract PageCreator is Initializable, AccessControlUpgradeable {
    event PageCreated(
        address indexed storyAddress,
        uint256 pageId,
        uint256 parentPageId
    );

    function initialize(address admin) external initializer {
        __AccessControl_init();
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
    }

    function createPage(
        address storyAddress,
        address to,
        uint256 pageId,
        uint256 parentPageId
    ) external {
        IMirageNFT(storyAddress).mintPage(to, pageId, parentPageId);
        emit PageCreated(storyAddress, pageId, parentPageId);
    }

    function getPageData(
        address storyAddress,
        uint256 pageId
    ) external view returns (IMirageNFT.PageStruct memory) {
        return IMirageNFT(storyAddress).getPageMetadata(pageId);
    }
}
