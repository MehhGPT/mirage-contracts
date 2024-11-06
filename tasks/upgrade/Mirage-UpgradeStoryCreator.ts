import { task } from "hardhat/config";
import { MirageStoryCreator } from "../contractName";


task("UPGRADE_MIR_STORY_CREATOR", "upgrades Mirage Page Creator contract", async (_taskArgs, hre) => {

    console.log("--------------- Initial Setup Started ---------------");


    let contractName = MirageStoryCreator;
    const fs = require('fs');
    let deployedContracts = require("../../deployment/deployed_contracts.json");
    const network = await hre.getChainId();

    if (!deployedContracts.hasOwnProperty(network)) {
        deployedContracts[network] = {}
    }

    console.log("--------------- Initial Setup Ended ---------------");

    console.log("--------------- Contract Deployment Started ---------------");

    const C1 = await hre.ethers.getContractFactory(contractName);
    const C1i = await hre.upgrades.upgradeProxy(deployedContracts[network][contractName], C1);

    console.log(`${contractName} deployed to: `, C1i.target);

    console.log("--------------- Contract Deployment Ended ---------------");
    console.log("--------------- Deployment Storage Started ---------------");

    deployedContracts[network][contractName] = C1i.target;

    fs.writeFileSync("./deployment/deployed_contracts.json", JSON.stringify(deployedContracts));

    console.log("--------------- Deployment Storage Ended ---------------");

})