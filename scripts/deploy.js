

const hre = require("hardhat");

async function main() {
  console.log("deploying...");
//1  const FlashLoan = await hre.ethers.getContractFactory("FlashLoan");

//0x0496275d34753A48320CA58103d5220d394FF77F
// contract address is from the aave site "
//  const flashLoan = await FlashLoan.deploy(
 //   "<pool provider>"
//  );
//1  const flashLoan = await FlashLoan.deploy("0x0496275d34753A48320CA58103d5220d394FF77F");
//1  await flashLoan.deployed();

 const deployedContract = await hre.ethers.deployContract("FlashLoan",["0x0496275d34753A48320CA58103d5220d394FF77F"]);

 await deployedContract.waitForDeployment();

 console.log("SimpleStorage Contract Address:", await deployedContract.getAddress())




//  console.log("Flash loan contract deployed: ", deployedContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

