/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MirageNFT,
  MirageNFTInterface,
} from "../../../contracts/Token/MirageNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_storyId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_pageCreatorContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_storyMakerContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "childPages",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pageId",
        type: "uint256",
      },
    ],
    name: "getPageMetadata",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "StoryId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "CreatorAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "PageId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ParentPageId",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "SiblingPages",
            type: "uint256[]",
          },
        ],
        internalType: "struct PageStruct",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "parentPageId",
        type: "uint256",
      },
    ],
    name: "mintPage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pageMetadata",
    outputs: [
      {
        internalType: "uint256",
        name: "StoryId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "CreatorAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "PageId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ParentPageId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "storyId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051611bbe380380611bbe83398101604081905261002f91610195565b604051806040016040528060068152602001654d697261676560d01b8152506040518060400160405280600381526020016226a4a960e91b81525081600190816100799190610270565b5060026100868282610270565b50505060078390556100996000826100cd565b506100c47f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6836100cd565b5050505061032e565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1661016f576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556101273390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610173565b5060005b92915050565b80516001600160a01b038116811461019057600080fd5b919050565b6000806000606084860312156101aa57600080fd5b835192506101ba60208501610179565b91506101c860408501610179565b90509250925092565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806101fb57607f821691505b60208210810361021b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561026b57806000526020600020601f840160051c810160208510156102485750805b601f840160051c820191505b818110156102685760008155600101610254565b50505b505050565b81516001600160401b03811115610289576102896101d1565b61029d8161029784546101e7565b84610221565b6020601f8211600181146102d157600083156102b95750848201515b600019600385901b1c1916600184901b178455610268565b600084815260208120601f198516915b8281101561030157878501518255602094850194600190920191016102e1565b508482101561031f5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b6118818061033d6000396000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c8063649f10c4116100ee578063a22cb46511610097578063d539139311610071578063d5391393146103f5578063d547741f1461041c578063e985e9c51461042f578063e9c7ccdc1461046b57600080fd5b8063a22cb465146103bc578063b88d4fde146103cf578063c87b56dd146103e257600080fd5b806391d14854116100c857806391d148541461037557806395d89b41146103ac578063a217fddf146103b457600080fd5b8063649f10c41461032f57806370a082311461034f57806383de58c61461036257600080fd5b8063248a9ca311610150578063387159ce1161012a578063387159ce146102f657806342842e0e146103095780636352211e1461031c57600080fd5b8063248a9ca31461029f5780632f2ff15d146102d057806336568abe146102e357600080fd5b8063095ea7b311610181578063095ea7b3146102105780631e01f7cb1461022557806323b872dd1461028c57600080fd5b806301ffc9a7146101a857806306fdde03146101d0578063081812fc146101e5575b600080fd5b6101bb6101b636600461141a565b610474565b60405190151581526020015b60405180910390f35b6101d8610485565b6040516101c79190611487565b6101f86101f336600461149a565b610517565b6040516001600160a01b0390911681526020016101c7565b61022361021e3660046114cf565b610540565b005b61026461023336600461149a565b600a60205260009081526040902080546001820154600283015460039093015491926001600160a01b039091169184565b604080519485526001600160a01b0390931660208501529183015260608201526080016101c7565b61022361029a3660046114f9565b61054f565b6102c26102ad36600461149a565b60009081526020819052604090206001015490565b6040519081526020016101c7565b6102236102de366004611536565b6105df565b6102236102f1366004611536565b610604565b6102c2610304366004611562565b61063c565b6102236103173660046114f9565b61066d565b6101f861032a36600461149a565b610688565b61034261033d36600461149a565b610693565b6040516101c79190611584565b6102c261035d36600461160b565b610770565b6102236103703660046114cf565b6107b8565b6101bb610383366004611536565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6101d8610810565b6102c2600081565b6102236103ca366004611626565b61081f565b6102236103dd366004611678565b61082a565b6101d86103f036600461149a565b610841565b6102c27f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61022361042a366004611536565b6108b6565b6101bb61043d36600461175c565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6102c260075481565b600061047f826108db565b92915050565b60606001805461049490611786565b80601f01602080910402602001604051908101604052809291908181526020018280546104c090611786565b801561050d5780601f106104e25761010080835404028352916020019161050d565b820191906000526020600020905b8154815290600101906020018083116104f057829003601f168201915b5050505050905090565b60006105228261091b565b506000828152600560205260409020546001600160a01b031661047f565b61054b828233610954565b5050565b6001600160a01b03821661057e57604051633250574960e11b8152600060048201526024015b60405180910390fd5b600061058b838333610961565b9050836001600160a01b0316816001600160a01b0316146105d9576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610575565b50505050565b6000828152602081905260409020600101546105fa81610a67565b6105d98383610a74565b6001600160a01b038116331461062d5760405163334bd91960e11b815260040160405180910390fd5b6106378282610b1e565b505050565b600b602052816000526040600020818154811061065857600080fd5b90600052602060002001600091509150505481565b6106378383836040518060200160405280600081525061082a565b600061047f8261091b565b6106ce6040518060a001604052806000815260200160006001600160a01b031681526020016000815260200160008152602001606081525090565b6000828152600a6020908152604091829020825160a0810184528154815260018201546001600160a01b03168184015260028201548185015260038201546060820152600482018054855181860281018601909652808652919492936080860193929083018282801561076057602002820191906000526020600020905b81548152602001906001019080831161074c575b5050505050815250509050919050565b60006001600160a01b03821661079c576040516322718ad960e21b815260006004820152602401610575565b506001600160a01b031660009081526004602052604090205490565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66107e281610a67565b600880549060006107f2836117c0565b919050555061080383600854610ba1565b6106378360085484610bbb565b60606002805461049490611786565b61054b338383610cfa565b61083584848461054f565b6105d984848484610d99565b606061084c8261091b565b50600061086460408051602081019091526000815290565b9050600081511161088457604051806020016040528060008152506108af565b8061088e84610ec2565b60405160200161089f9291906117e7565b6040516020818303038152906040525b9392505050565b6000828152602081905260409020600101546108d181610a67565b6105d98383610b1e565b60006001600160e01b031982166380ac58cd60e01b148061090c57506001600160e01b03198216635b5e139f60e01b145b8061047f575061047f82610f62565b6000818152600360205260408120546001600160a01b03168061047f57604051637e27328960e01b815260048101849052602401610575565b6106378383836001610f97565b6000828152600360205260408120546001600160a01b039081169083161561098e5761098e8184866110c9565b6001600160a01b038116156109cc576109ab600085600080610f97565b6001600160a01b038116600090815260046020526040902080546000190190555b6001600160a01b038516156109fb576001600160a01b0385166000908152600460205260409020805460010190555b600084815260036020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b610a71813361112d565b50565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16610b16576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055610ace3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161047f565b50600061047f565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1615610b16576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161047f565b61054b828260405180602001604052806000815250611180565b6040518060a001604052806007548152602001846001600160a01b031681526020018381526020018281526020016009805480602002602001604051908101604052809291908181526020018280548015610c3557602002820191906000526020600020905b815481526020019060010190808311610c21575b5050509190925250506000838152600a6020908152604091829020835181558382015160018201805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b039092169190911790559183015160028301556060830151600383015560808301518051610cb09260048501920190611364565b505081159050610637576000818152600b60209081526040808320805460018101825581855283852001869055858452600a90925290912081546105d992600490920191906113af565b6001600160a01b038216610d2c57604051630b61174360e31b81526001600160a01b0383166004820152602401610575565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b156105d957604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610ddb903390889087908790600401611816565b6020604051808303816000875af1925050508015610e16575060408051601f3d908101601f19168201909252610e1391810190611857565b60015b610e7f573d808015610e44576040519150601f19603f3d011682016040523d82523d6000602084013e610e49565b606091505b508051600003610e7757604051633250574960e11b81526001600160a01b0385166004820152602401610575565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b14610ebb57604051633250574960e11b81526001600160a01b0385166004820152602401610575565b5050505050565b60606000610ecf83611197565b600101905060008167ffffffffffffffff811115610eef57610eef611662565b6040519080825280601f01601f191660200182016040528015610f19576020820181803683370190505b5090508181016020015b600019017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8504945084610f2357509392505050565b60006001600160e01b03198216637965db0b60e01b148061047f57506301ffc9a760e01b6001600160e01b031983161461047f565b8080610fab57506001600160a01b03821615155b1561108c576000610fbb8461091b565b90506001600160a01b03831615801590610fe75750826001600160a01b0316816001600160a01b031614155b801561101957506001600160a01b0380821660009081526006602090815260408083209387168352929052205460ff16155b156110425760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610575565b811561108a5783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50506000908152600560205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6110d4838383611279565b610637576001600160a01b03831661110257604051637e27328960e01b815260048101829052602401610575565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610575565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661054b5760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610575565b61118a83836112ff565b6106376000848484610d99565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106111e0577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef8100000000831061120c576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061122a57662386f26fc10000830492506010015b6305f5e1008310611242576305f5e100830492506008015b612710831061125657612710830492506004015b60648310611268576064830492506002015b600a831061047f5760010192915050565b60006001600160a01b038316158015906112f75750826001600160a01b0316846001600160a01b031614806112d357506001600160a01b0380851660009081526006602090815260408083209387168352929052205460ff165b806112f757506000828152600560205260409020546001600160a01b038481169116145b949350505050565b6001600160a01b03821661132957604051633250574960e11b815260006004820152602401610575565b600061133783836000610961565b90506001600160a01b03811615610637576040516339e3563760e11b815260006004820152602401610575565b82805482825590600052602060002090810192821561139f579160200282015b8281111561139f578251825591602001919060010190611384565b506113ab9291506113ef565b5090565b82805482825590600052602060002090810192821561139f5760005260206000209182015b8281111561139f5782548255916001019190600101906113d4565b5b808211156113ab57600081556001016113f0565b6001600160e01b031981168114610a7157600080fd5b60006020828403121561142c57600080fd5b81356108af81611404565b60005b8381101561145257818101518382015260200161143a565b50506000910152565b60008151808452611473816020860160208601611437565b601f01601f19169290920160200192915050565b6020815260006108af602083018461145b565b6000602082840312156114ac57600080fd5b5035919050565b80356001600160a01b03811681146114ca57600080fd5b919050565b600080604083850312156114e257600080fd5b6114eb836114b3565b946020939093013593505050565b60008060006060848603121561150e57600080fd5b611517846114b3565b9250611525602085016114b3565b929592945050506040919091013590565b6000806040838503121561154957600080fd5b82359150611559602084016114b3565b90509250929050565b6000806040838503121561157557600080fd5b50508035926020909101359150565b60208152600060c08201835160208401526001600160a01b0360208501511660408401526040840151606084015260608401516080840152608084015160a08085015281815180845260e086019150602083019350600092505b8083101561160157835182526020820191506020840193506001830192506115de565b5095945050505050565b60006020828403121561161d57600080fd5b6108af826114b3565b6000806040838503121561163957600080fd5b611642836114b3565b91506020830135801515811461165757600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561168e57600080fd5b611697856114b3565b93506116a5602086016114b3565b925060408501359150606085013567ffffffffffffffff8111156116c857600080fd5b8501601f810187136116d957600080fd5b803567ffffffffffffffff8111156116f3576116f3611662565b604051601f8201601f19908116603f0116810167ffffffffffffffff8111828210171561172257611722611662565b60405281815282820160200189101561173a57600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b6000806040838503121561176f57600080fd5b611778836114b3565b9150611559602084016114b3565b600181811c9082168061179a57607f821691505b6020821081036117ba57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600182016117e057634e487b7160e01b600052601160045260246000fd5b5060010190565b600083516117f9818460208801611437565b83519083019061180d818360208801611437565b01949350505050565b6001600160a01b03851681526001600160a01b038416602082015282604082015260806060820152600061184d608083018461145b565b9695505050505050565b60006020828403121561186957600080fd5b81516108af8161140456fea164736f6c634300081b000a";

type MirageNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MirageNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MirageNFT__factory extends ContractFactory {
  constructor(...args: MirageNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _storyId: BigNumberish,
    _pageCreatorContract: AddressLike,
    _storyMakerContract: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _storyId,
      _pageCreatorContract,
      _storyMakerContract,
      overrides || {}
    );
  }
  override deploy(
    _storyId: BigNumberish,
    _pageCreatorContract: AddressLike,
    _storyMakerContract: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _storyId,
      _pageCreatorContract,
      _storyMakerContract,
      overrides || {}
    ) as Promise<
      MirageNFT & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MirageNFT__factory {
    return super.connect(runner) as MirageNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MirageNFTInterface {
    return new Interface(_abi) as MirageNFTInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MirageNFT {
    return new Contract(address, _abi, runner) as unknown as MirageNFT;
  }
}
