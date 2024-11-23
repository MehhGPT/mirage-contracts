import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-deploy";
import 'hardhat-docgen';
import type { HardhatUserConfig } from "hardhat/config";
import { vars } from "hardhat/config";
import type { NetworkUserConfig } from "hardhat/types";

// Run 'npx hardhat vars setup' to see the list of variables that need to be set
import "./tasks/accounts";
import './tasks/deploy/Mirage-DeployStoryCreator';
import './tasks/upgrade/Mirage-UpgradeStoryCreator';
import './tasks/deploy/Mirage-deployPageCreator';

const mnemonic: string = vars.get("MNEMONIC");
const infuraApiKey: string = vars.get("INFURA_API_KEY");

const chainIds = {
    bsc: 56,
    bscTestnet: 97,
    hardhat: 31337,
    polygon: 137,
    polygonAmoy: 80002,
};

function getChainConfig(chain: keyof typeof chainIds): NetworkUserConfig {
    let jsonRpcUrl: string;
    switch (chain) {
        case "bscTestnet":
            jsonRpcUrl = "wss://bsc-testnet-rpc.publicnode.com";
            break;
        case "bsc":
            jsonRpcUrl = "https://bsc-dataseed1.binance.org";
            break;
        case "polygon":
            jsonRpcUrl = "https://polygon-rpc.com";
            break;
        case "polygonAmoy":
            jsonRpcUrl = "https://polygon-amoy-bor-rpc.publicnode.com";
            break;
        default:
            jsonRpcUrl = "https://" + chain + ".infura.io/v3/" + infuraApiKey;
    }
    return {
        accounts: {
            count: 10,
            mnemonic,
            path: "m/44'/60'/0'/0",
        },
        gasPrice: 50000000000,
        chainId: chainIds[chain],
        url: jsonRpcUrl,
    };
}

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    namedAccounts: {
        deployer: 0,
    },
    etherscan: {
        apiKey: {
            polygon: vars.get("POLYGONSCAN_API_KEY"),
            polygonAmoy: vars.get("POLYGONSCAN_API_KEY"),
        },
        customChains: [
            {
                network: "polygonAmoy",
                chainId: 80002,
                urls: {
                    apiURL: "https://api-amoy.polygonscan.com/api",
                    browserURL: "https://amoy.polygonscan.com/",
                },
            },
        ],
    },
    gasReporter: {
        currency: "USD",
        enabled: process.env.REPORT_GAS ? true : false,
        excludeContracts: [],
        src: "./contracts",
    },
    networks: {
        hardhat: {},
        bsc: getChainConfig("bsc"),
        bscTestnet: getChainConfig("bscTestnet"),
        polygon: getChainConfig("polygon"),
        polygonAmoy: getChainConfig("polygonAmoy"),
    },
    paths: {
        artifacts: "./artifacts",
        cache: "./cache",
        sources: "./contracts",
        tests: "./test",
    },
    solidity: {
        version: "0.8.27",
        settings: {
            metadata: {
                // Not including the metadata hash
                // https://github.com/paulrberg/hardhat-template/issues/31
                bytecodeHash: "none",
            },
            // Disable the optimizer when debugging
            // https://hardhat.org/hardhat-network/#solidity-optimizer-support
            optimizer: {
                enabled: true,
                runs: 800,
            },
        },
    },
    typechain: {
        outDir: "types",
        target: "ethers-v6",
    },
    docgen: {
        path: './docs',
        clear: true,
        runOnCompile: true,
    },
};

export default config;