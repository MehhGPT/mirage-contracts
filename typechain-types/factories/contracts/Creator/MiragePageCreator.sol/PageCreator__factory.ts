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
import type { NonPayableOverrides } from "../../../../common";
import type {
  PageCreator,
  PageCreatorInterface,
} from "../../../../contracts/Creator/MiragePageCreator.sol/PageCreator";

const _abi = [
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
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
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
        name: "pageId",
        type: "uint256",
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
        name: "pageId",
        type: "uint256",
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
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "initialize",
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
  "0x6080604052348015600f57600080fd5b506113108061001f6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806391d148541161006657806391d1485414610157578063977d055014610187578063a217fddf146101b7578063c4d66de8146101d5578063d547741f146101f15761009e565b806301ffc9a7146100a3578063248a9ca3146100d35780632f2ff15d1461010357806336568abe1461011f57806387367d251461013b575b600080fd5b6100bd60048036038101906100b89190610b29565b61020d565b6040516100ca9190610b71565b60405180910390f35b6100ed60048036038101906100e89190610bc2565b610287565b6040516100fa9190610bfe565b60405180910390f35b61011d60048036038101906101189190610c77565b6102b5565b005b61013960048036038101906101349190610c77565b6102d7565b005b61015560048036038101906101509190610ced565b610352565b005b610171600480360381019061016c9190610c77565b610417565b60405161017e9190610b71565b60405180910390f35b6101a1600480360381019061019c9190610d54565b610490565b6040516101ae9190610ed7565b60405180910390f35b6101bf61051f565b6040516101cc9190610bfe565b60405180910390f35b6101ef60048036038101906101ea9190610ef9565b610526565b005b61020b60048036038101906102069190610c77565b6106c2565b005b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610280575061027f826106e4565b5b9050919050565b60008061029261074e565b905080600001600084815260200190815260200160002060010154915050919050565b6102be82610287565b6102c781610776565b6102d1838361078a565b50505050565b6102df61088b565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610343576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61034d8282610893565b505050565b8373ffffffffffffffffffffffffffffffffffffffff1663642e22758484846040518463ffffffff1660e01b815260040161038f93929190610f44565b600060405180830381600087803b1580156103a957600080fd5b505af11580156103bd573d6000803e3d6000fd5b505050508373ffffffffffffffffffffffffffffffffffffffff167f6c4c4cc9d17042aaf1461e8b64c000814f8fdffdc369858e3fcd8ab790f1e90b8383604051610409929190610f7b565b60405180910390a250505050565b60008061042261074e565b905080600001600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b610498610a78565b8273ffffffffffffffffffffffffffffffffffffffff1663649f10c4836040518263ffffffff1660e01b81526004016104d19190610fa4565b600060405180830381865afa1580156104ee573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061051791906111f4565b905092915050565b6000801b81565b6000610530610995565b905060008160000160089054906101000a900460ff1615905060008260000160009054906101000a900467ffffffffffffffff1690506000808267ffffffffffffffff1614801561057e5750825b9050600060018367ffffffffffffffff161480156105b3575060003073ffffffffffffffffffffffffffffffffffffffff163b145b9050811580156105c1575080155b156105f8576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018560000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555083156106485760018560000160086101000a81548160ff0219169083151502179055505b6106506109bd565b61065d6000801b8761078a565b5083156106ba5760008560000160086101000a81548160ff0219169083151502179055507fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d260016040516106b19190611296565b60405180910390a15b505050505050565b6106cb82610287565b6106d481610776565b6106de8383610893565b50505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60007f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800905090565b6107878161078261088b565b6109c7565b50565b60008061079561074e565b90506107a18484610417565b61087f57600181600001600086815260200190815260200160002060000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061081b61088b565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001915050610885565b60009150505b92915050565b600033905090565b60008061089e61074e565b90506108aa8484610417565b1561098957600081600001600086815260200190815260200160002060000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061092561088b565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a4600191505061098f565b60009150505b92915050565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b6109c5610a18565b565b6109d18282610417565b610a145780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401610a0b9291906112b1565b60405180910390fd5b5050565b610a20610a58565b610a56576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6000610a62610995565b60000160089054906101000a900460ff16905090565b6040518060a0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001606081525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b610b0681610ad1565b8114610b1157600080fd5b50565b600081359050610b2381610afd565b92915050565b600060208284031215610b3f57610b3e610ac7565b5b6000610b4d84828501610b14565b91505092915050565b60008115159050919050565b610b6b81610b56565b82525050565b6000602082019050610b866000830184610b62565b92915050565b6000819050919050565b610b9f81610b8c565b8114610baa57600080fd5b50565b600081359050610bbc81610b96565b92915050565b600060208284031215610bd857610bd7610ac7565b5b6000610be684828501610bad565b91505092915050565b610bf881610b8c565b82525050565b6000602082019050610c136000830184610bef565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c4482610c19565b9050919050565b610c5481610c39565b8114610c5f57600080fd5b50565b600081359050610c7181610c4b565b92915050565b60008060408385031215610c8e57610c8d610ac7565b5b6000610c9c85828601610bad565b9250506020610cad85828601610c62565b9150509250929050565b6000819050919050565b610cca81610cb7565b8114610cd557600080fd5b50565b600081359050610ce781610cc1565b92915050565b60008060008060808587031215610d0757610d06610ac7565b5b6000610d1587828801610c62565b9450506020610d2687828801610c62565b9350506040610d3787828801610cd8565b9250506060610d4887828801610cd8565b91505092959194509250565b60008060408385031215610d6b57610d6a610ac7565b5b6000610d7985828601610c62565b9250506020610d8a85828601610cd8565b9150509250929050565b610d9d81610cb7565b82525050565b610dac81610c39565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610dea8383610d94565b60208301905092915050565b6000602082019050919050565b6000610e0e82610db2565b610e188185610dbd565b9350610e2383610dce565b8060005b83811015610e54578151610e3b8882610dde565b9750610e4683610df6565b925050600181019050610e27565b5085935050505092915050565b600060a083016000830151610e796000860182610d94565b506020830151610e8c6020860182610da3565b506040830151610e9f6040860182610d94565b506060830151610eb26060860182610d94565b5060808301518482036080860152610eca8282610e03565b9150508091505092915050565b60006020820190508181036000830152610ef18184610e61565b905092915050565b600060208284031215610f0f57610f0e610ac7565b5b6000610f1d84828501610c62565b91505092915050565b610f2f81610c39565b82525050565b610f3e81610cb7565b82525050565b6000606082019050610f596000830186610f26565b610f666020830185610f35565b610f736040830184610f35565b949350505050565b6000604082019050610f906000830185610f35565b610f9d6020830184610f35565b9392505050565b6000602082019050610fb96000830184610f35565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61100d82610fc4565b810181811067ffffffffffffffff8211171561102c5761102b610fd5565b5b80604052505050565b600061103f610abd565b905061104b8282611004565b919050565b600080fd5b60008151905061106481610cc1565b92915050565b60008151905061107981610c4b565b92915050565b600080fd5b600067ffffffffffffffff82111561109f5761109e610fd5565b5b602082029050602081019050919050565b600080fd5b60006110c86110c384611084565b611035565b905080838252602082019050602084028301858111156110eb576110ea6110b0565b5b835b8181101561111457806111008882611055565b8452602084019350506020810190506110ed565b5050509392505050565b600082601f8301126111335761113261107f565b5b81516111438482602086016110b5565b91505092915050565b600060a0828403121561116257611161610fbf565b5b61116c60a0611035565b9050600061117c84828501611055565b60008301525060206111908482850161106a565b60208301525060406111a484828501611055565b60408301525060606111b884828501611055565b606083015250608082015167ffffffffffffffff8111156111dc576111db611050565b5b6111e88482850161111e565b60808301525092915050565b60006020828403121561120a57611209610ac7565b5b600082015167ffffffffffffffff81111561122857611227610acc565b5b6112348482850161114c565b91505092915050565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000819050919050565b600061128061127b6112768461123d565b61125b565b611247565b9050919050565b61129081611265565b82525050565b60006020820190506112ab6000830184611287565b92915050565b60006040820190506112c66000830185610f26565b6112d36020830184610bef565b939250505056fea2646970667358221220b0eef05d4e2377bbcb051c05c6b18bbf08028f123c4461d213d97ffd3efcfb5664736f6c634300081b0033";

type PageCreatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PageCreatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PageCreator__factory extends ContractFactory {
  constructor(...args: PageCreatorConstructorParams) {
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
      PageCreator & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PageCreator__factory {
    return super.connect(runner) as PageCreator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PageCreatorInterface {
    return new Interface(_abi) as PageCreatorInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): PageCreator {
    return new Contract(address, _abi, runner) as unknown as PageCreator;
  }
}