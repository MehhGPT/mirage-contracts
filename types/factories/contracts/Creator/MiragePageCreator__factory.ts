/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MiragePageCreator,
  MiragePageCreatorInterface,
} from "../../../contracts/Creator/MiragePageCreator";

const _abi = [
  {
    inputs: [],
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "storyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "parentPageId",
        type: "uint256",
      },
    ],
    name: "PageCreated",
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
    inputs: [
      {
        internalType: "address",
        name: "storyAddress",
        type: "address",
      },
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
    name: "createPage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "storyAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "pageId",
        type: "uint256",
      },
    ],
    name: "getPageData",
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
        internalType: "struct IMirageNFT.PageStruct",
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
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b5061086e8061001f6000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c806391d1485411610076578063a217fddf1161005b578063a217fddf14610180578063bb83f24f14610188578063d547741f1461019b57600080fd5b806391d1485414610129578063977d05501461016057600080fd5b806301ffc9a7146100a8578063248a9ca3146100d05780632f2ff15d1461010157806336568abe14610116575b600080fd5b6100bb6100b636600461055b565b6101ae565b60405190151581526020015b60405180910390f35b6100f36100de366004610585565b60009081526020819052604090206001015490565b6040519081526020016100c7565b61011461010f3660046105b3565b6101e5565b005b6101146101243660046105b3565b610210565b6100bb6101373660046105b3565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b61017361016e3660046105e3565b610248565b6040516100c7919061060f565b6100f3600081565b610114610196366004610696565b6102f7565b6101146101a93660046105b3565b6103a1565b60006001600160e01b03198216637965db0b60e01b14806101df57506301ffc9a760e01b6001600160e01b03198316145b92915050565b600082815260208190526040902060010154610200816103c6565b61020a83836103d3565b50505050565b6001600160a01b03811633146102395760405163334bd91960e11b815260040160405180910390fd5b610243828261047d565b505050565b6102836040518060a001604052806000815260200160006001600160a01b031681526020016000815260200160008152602001606081525090565b604051631927c43160e21b8152600481018390526001600160a01b0384169063649f10c490602401600060405180830381865afa1580156102c8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102f09190810190610747565b9392505050565b6040516341ef2c6360e11b81526001600160a01b038381166004830152602482018390528416906383de58c690604401600060405180830381600087803b15801561034157600080fd5b505af1158015610355573d6000803e3d6000fd5b50505050826001600160a01b03167f5189decaa6f2a0299cf3a527e6e6ca1750a9a8404eab579561e5c5bb0644d83f8260405161039491815260200190565b60405180910390a2505050565b6000828152602081905260409020600101546103bc816103c6565b61020a838361047d565b6103d08133610500565b50565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16610475576000838152602081815260408083206001600160a01b03861684529091529020805460ff1916600117905561042d3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016101df565b5060006101df565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1615610475576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016101df565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166105575760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440160405180910390fd5b5050565b60006020828403121561056d57600080fd5b81356001600160e01b0319811681146102f057600080fd5b60006020828403121561059757600080fd5b5035919050565b6001600160a01b03811681146103d057600080fd5b600080604083850312156105c657600080fd5b8235915060208301356105d88161059e565b809150509250929050565b600080604083850312156105f657600080fd5b82356106018161059e565b946020939093013593505050565b60208152600060c08201835160208401526001600160a01b0360208501511660408401526040840151606084015260608401516080840152608084015160a08085015281815180845260e086019150602083019350600092505b8083101561068c5783518252602082019150602084019350600183019250610669565b5095945050505050565b6000806000606084860312156106ab57600080fd5b83356106b68161059e565b925060208401356106c68161059e565b929592945050506040919091013590565b634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715610710576107106106d7565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561073f5761073f6106d7565b604052919050565b60006020828403121561075957600080fd5b815167ffffffffffffffff81111561077057600080fd5b820160a0818503121561078257600080fd5b61078a6106ed565b81518152602082015161079c8161059e565b60208201526040828101519082015260608083015190820152608082015167ffffffffffffffff8111156107cf57600080fd5b80830192505084601f8301126107e457600080fd5b815167ffffffffffffffff8111156107fe576107fe6106d7565b8060051b61080e60208201610716565b9182526020818501810192908101908884111561082a57600080fd5b6020860195505b8386101561085057855180835260209687019690935090910190610831565b60808501525091969550505050505056fea164736f6c634300081b000a";

type MiragePageCreatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MiragePageCreatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MiragePageCreator__factory extends ContractFactory {
  constructor(...args: MiragePageCreatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MiragePageCreator & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MiragePageCreator__factory {
    return super.connect(runner) as MiragePageCreator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MiragePageCreatorInterface {
    return new Interface(_abi) as MiragePageCreatorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MiragePageCreator {
    return new Contract(address, _abi, runner) as unknown as MiragePageCreator;
  }
}
