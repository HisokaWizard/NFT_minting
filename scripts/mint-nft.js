const CONTRACT_ADDRESS = '0xe13b858061de167F4B2221800131558Edf767eB7';
const META_DATA_URL =
  'ipfs://bafyreia4qt3hzfd5k3jcw63sdeojnhxbhgkflxwk6uqjmpaia7u72tfi6q/metadata.json';

async function mintNFT(contractAddress, metaDataURL) {
  const HisokaNFT = await ethers.getContractFactory('HisokaNFT');
  const [owner] = await ethers.getSigners();
  await HisokaNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
  console.log('NFT minted to: ', owner.address);
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
