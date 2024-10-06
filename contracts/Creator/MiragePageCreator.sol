// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "../Interfaces/iMirageNFT.sol";

contract MiragePageCreator is AccessControl {
    event PageCreated(
        address indexed storyAddress,
        uint256 parentPageId
    );

	constructor() {}

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
}
