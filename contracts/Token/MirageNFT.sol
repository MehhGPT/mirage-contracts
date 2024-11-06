// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "../Interfaces/MirageStructs.sol";

contract MirageNFT is AccessControl, ERC721 {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    uint256 public storyId;
    uint256 private PageId;
    uint256[] private defaultVals;
    mapping(uint256 => PageStruct) public pageMetadata;
    mapping(uint256 => uint256[]) public childPages;

    constructor(
        uint256 _storyId,
        address _pageCreatorContract,
        address _storyMakerContract
    ) ERC721("Mirage", "MIR") {
        storyId = _storyId;
        _grantRole(DEFAULT_ADMIN_ROLE, _storyMakerContract);
        _grantRole(MINTER_ROLE, _pageCreatorContract);
    }

    function updatePageData(
        address to,
        uint256 pageId,
        uint256 parentPageId
    ) internal {
        pageMetadata[pageId] = PageStruct(
            storyId,
            to,
            pageId,
            parentPageId,
            defaultVals
        );

        if (parentPageId > 0) {
            childPages[parentPageId].push(pageId);
            pageMetadata[pageId].SiblingPages = childPages[parentPageId];
        }
    }

    function mintPage(
        address to,
        uint256 parentPageId
    ) external onlyRole(MINTER_ROLE) {
        PageId++;
        _safeMint(to, PageId);
        updatePageData(to, PageId, parentPageId);
    }

    function getPageMetadata(
        uint256 pageId
    ) external view returns (PageStruct memory) {
        return pageMetadata[pageId];
    }

    function getChildPages(uint256 pageId) external view returns(uint256[] memory){
        return childPages[pageId];
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override(ERC721, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
