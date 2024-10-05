import {buildModule} from "@nomicfoundation/hardhat-ignition/modules";

const MirageNFTModule = buildModule("MirageNFTModule", (m) => {
    const Contract = m.contract("MiragrNFT", []);



    return {Contract};
})