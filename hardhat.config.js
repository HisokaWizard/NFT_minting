/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers');
require('dotenv').config();
const { MY_SECRET } = process.env;
module.exports = {
  defaultNetwork: 'PolygonMumbai',
  networks: {
    hardhat: {},
    PolygonMumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [MY_SECRET],
    },
  },
  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
