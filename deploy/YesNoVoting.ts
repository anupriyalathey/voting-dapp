import { HardhatRuntimeEnvironment, Network } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy, execute } = deployments;

  const { deployer } = await getNamedAccounts();

  const nft = await deploy("YesNoVoting", {
    args: [],
    from: deployer,
    log: true,
  });
};
export default func;
func.tags = ["YesNoVoting"];
func.dependencies = [];