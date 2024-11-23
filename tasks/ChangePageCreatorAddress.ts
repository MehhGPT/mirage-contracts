import { task } from "hardhat/config";
import { MiragePageCreator, MirageStoryCreator } from "./contractName";

task("CHANGE_PAGE_CREATOR_ADDRESS", "change Address of PageCreator in StoryCreator contract", async (_taskArgs, hre) => {

    console.log("--------------- Initial Setup Started ---------------");


    let contractName = MirageStoryCreator;
    const fs = require('fs');
    let deployedContracts = require("../deployment/deployed_contracts.json");
    const network = await hre.getChainId();
    
    if (!deployedContracts.hasOwnProperty(network)) {
        deployedContracts[network] = {}
    }
    
	const PageCreatorAddress = deployedContracts[network][MiragePageCreator];
    let contractAddress = deployedContracts[network][contractName];
	console.log("Story Creator:", contractAddress);
	console.log("Page Creator:", PageCreatorAddress);


    console.log("--------------- Initial Setup Ended ---------------");

    console.log("--------------- Contract Deployment Started ---------------");

    const C1 = await hre.ethers.getContractFactory(contractName);
    const C1Proxy = await C1.attach(contractAddress);

    await C1Proxy.changePageCreatorAddress(PageCreatorAddress);

    
    console.log("--------------- Contract Deployment Ended ---------------");
    console.log("--------------- Deployment Storage Started ---------------");
    
    // deployedContracts[network][contractName] = C1i.target;
    console.log(`${MirageStoryCreator} added to ${contractName}: ${PageCreatorAddress} `, );

    // fs.writeFileSync("./deployment/deployed_contracts.json", JSON.stringify(deployedContracts));

    console.log("--------------- Deployment Storage Ended ---------------");

})