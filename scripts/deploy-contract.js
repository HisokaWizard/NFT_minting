async function deployContract() {
  const HisokaNFT = await ethers.getContractFactory('HisokaNFT');
  const hisokaNFT = await HisokaNFT.deploy();
  await hisokaNFT.deployed();
  // This solves the bug in Mumbai network where the contract address is not the real one
  const txHash = hisokaNFT.deployTransaction.hash;
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
