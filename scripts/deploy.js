// deploy.js - Estrutura inicial dos smart contracts DAO VINCI
const hre = require("hardhat");

async function main() {
  // Deploy VinciToken
  const VinciToken = await hre.ethers.getContractFactory("VinciToken");
  const vinciToken = await VinciToken.deploy();
  await vinciToken.deployed();
  console.log("VinciToken deployed to:", vinciToken.address);

  // Deploy DeliveryValidator
  const DeliveryValidator = await hre.ethers.getContractFactory("DeliveryValidator");
  const deliveryValidator = await DeliveryValidator.deploy();
  await deliveryValidator.deployed();
  console.log("DeliveryValidator deployed to:", deliveryValidator.address);

  // Deploy SoulboundSupporter
  const SoulboundSupporter = await hre.ethers.getContractFactory("SoulboundSupporter");
  const soulbound = await SoulboundSupporter.deploy();
  await soulbound.deployed();
  console.log("SoulboundSupporter deployed to:", soulbound.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
