import { expect } from "chai";
import hre from "hardhat";

describe("Mirage", function () {
	beforeEach(async function () {
		this.hre = hre;
		this.account = await this.hre.ethers.getSigners();

		this.MirageStoryCreator = await this.hre.ethers.getContractFactory("MirageStoryCreator");
		this.MirageStoryCreatorProxy = await this.MirageStoryCreator.deploy(this.account[0].address);

		this.MiragePageCreator = await this.hre.ethers.getContractFactory("MiragePageCreator");
		this.MiragePageCreatorProxy = await this.MiragePageCreator.deploy();

		await this.MirageStoryCreatorProxy.changePageCreatorAddress(this.MiragePageCreatorProxy.target);

	});
	it("should Create A Story", async function () {

		const data = await this.MirageStoryCreatorProxy.connect(this.account[1]).deployStoryNFT()
		console.log(data);
		await this.MirageStoryCreatorProxy.connect(this.account[2]).deployStoryNFT();
		await this.MirageStoryCreatorProxy.connect(this.account[1]).deployStoryNFT();

		console.log(await this.MirageStoryCreatorProxy.getDeployedStories());
	});
});