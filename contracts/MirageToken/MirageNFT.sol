// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "../Interfaces/MirageStructs.sol";

contract MirageNFT is
    Initializable,
    ERC721Upgradeable,
    AccessControlUpgradeable,
    UUPSUpgradeable
{
    bytes32 public constant UPGRADE_ROLE = keccak256("UPGRADE_ROLE");
    bytes32 public constant PAGE_CREATOR = keccak256("PAGE_CREATOR");
    bytes32 public constant STORY_CREATOR = keccak256("STORY_CREATOR");

    uint256 private StoryId;
    uint256 private PageId;

    //? ChildId => ParentId
    mapping(uint256 => uint256) private ParentPage;
    //? StoryId => StoryHash
    mapping(uint256 => bytes32) private StoryHash;
    //? PageId => PageDetails
    mapping(uint256 => PageStruct) private PageMap;

    event StoryCreated(string _StoryDetails, uint256 StoryId);
    event PageCreated(string PageId, address _Creator);

    function Initialize() external initializer {
        __ERC721_init("Mirage", "MIR");
        __AccessControl_init();
        __UUPSUpgradeable_init();
    }

    function getStoryHash(uint256 _StoryId) external view returns (bytes32) {
        return StoryHash[_StoryId];
    }

    function generateStoryHash(
        string memory _StoryDetails
    ) internal returns (bytes32) {
        bytes32 storyHx = keccak256(_StoryDetails);
        StoryId++;
        StoryHash[StoryId] = storyHx;
        emit StoryCreated(_StoryDetails, StoryId);
        return storyHx;
    }

    function AddNewStory(
        string memory _StoryDetails,
        address _Creator
    ) external onlyRole(STORY_CREATOR) {
        PageId++;
        generateStoryHash(_StoryDetails);
        ParentPage[PageId] = PageId;
        PageMap[PageId] = PageStruct(StoryId, _Creator, PageId, 0);
        _safeMint(_Creator, PageId);
        emit PageCreated(PageId, _Creator);
    }

    function AddNewPage(
        address _Creator,
        uint256 _ParentId,
        uint256 _StoryId
    ) external onlyRole(PAGE_CREATOR) {
        require(ParentPage[_ParentId] != 0, "Invalis Parent Id");
        PageId++;
        ParentPage[PageId] = _ParentId;
        PageMap[PageId] = PageStruct(_StoryId, _Creator, PageId, _ParentId);
        _safeMint(_Creator, PageId);
        emit PageCreated(PageId, _Creator);
    }
}
