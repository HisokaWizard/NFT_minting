const CONTRACT_ADDRESS = '0x026d0658a649a05da7774B55995f52C738aD4232';
const META_DATA_URL =
  'ipfs://bafyreia4qt3hzfd5k3jcw63sdeojnhxbhgkflxwk6uqjmpaia7u72tfi6q/metadata.json';

async function mintNFT(contractAddress, metaDataURL) {
  const HisokaWizardNFT = await ethers.getContractFactory('HisokaWizard');
  const [owner] = await ethers.getSigners();
  await HisokaWizardNFT.attach(contractAddress).safeMint(owner.address, metaDataURL);
  console.log('NFT minted to: ', owner.address);
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
