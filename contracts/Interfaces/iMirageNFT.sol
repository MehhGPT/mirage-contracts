// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IMirageNFT {
    struct PageStruct {
        uint256 StoryId;
        address CreatorAddress;
        uint256 PageId;
        uint256 ParentPageId;
        uint256[] SiblingPages;
    }
	
    function mintPage(
        address to,
        uint256 pageId,
        uint256 parentPageId
    ) external;

    function getPageMetadata(
        uint256 pageId
    ) external view returns (PageStruct memory);
}
