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
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    uint256 public storyId;
    uint256[] private defaultVals;
    mapping(uint256 => PageStruct) public pageMetadata;
    mapping(uint256 => uint256[]) public childPages;

    function Initialize(
        uint256 _storyId,
        address _pageCreatorContract,
        address _storyMakerContract
    ) external initializer {
        __ERC721_init("Mirage", "MIR");
        __AccessControl_init();
        __UUPSUpgradeable_init();

        storyId = _storyId;
        _grantRole(DEFAULT_ADMIN_ROLE, _storyMakerContract);
        _grantRole(MINTER_ROLE, _pageCreatorContract);
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}

    function mintPage(
        address to,
        uint256 pageId,
        uint256 parentPageId
    ) external onlyRole(MINTER_ROLE) {
        _safeMint(to, pageId);

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

    function getPageMetadata(
        uint256 pageId
    ) external view returns (PageStruct memory) {
        return pageMetadata[pageId];
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        virtual
        override(ERC721Upgradeable, AccessControlUpgradeable)
        returns (bool)
    {}
}
