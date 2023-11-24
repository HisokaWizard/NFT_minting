const { NFTStorage, File } = require('nft.storage');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const { NFT_STORAGE } = process.env;

async function storeAsset() {
  const client = new NFTStorage({ token: NFT_STORAGE });
  const metadata = await client.store({
    name: 'HisokaNFT',
    description: 'My HisokaNFT is an awesome artwork!',
    image: new File([await fs.promises.readFile('assets/hisoka.png')], 'hisoka.png', {
      type: 'image/png',
    }),
  });
  console.log('Metadata stored on Filecoin and IPFS with URL:', metadata.url);
}

storeAsset()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
