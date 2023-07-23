

const hre = require("hardhat");

async function main() {
// contract address is from the aave site "
//  const flashLoan = await FlashLoan.deploy(
 //   "<pool provider>"
//  )
 const deployedContract = await hre.ethers.deployContract("FlashLoan",["0x0496275d34753A48320CA58103d5220d394FF77F"]);
 await deployedContract.waitForDeployment();
 console.log("SimpleStorage Contract Address:", await deployedContract.getAddress())
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

