const dotenv = require('dotenv');
dotenv.config();
const { MY_ADDRESS } = process.env;

async function deployContract() {
  const HisokaWizardNFT = await ethers.getContractFactory('HisokaWizard');
  const hisokaWizardNFT = await HisokaWizardNFT.deploy(MY_ADDRESS);
  await hisokaWizardNFT.deployed();
  // This solves the bug in Mumbai network where the contract address is not the real one
  const txHash = hisokaWizardNFT.deployTransaction.hash;
  const txReceipt = await ethers.provider.waitForTransaction(txHash);
  const contractAddress = txReceipt.contractAddress;
  console.log('Contract deployed to address:', contractAddress);
}

deployContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
