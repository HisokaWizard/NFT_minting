/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers');
require('dotenv').config();
const { MY_SECRET } = process.env;
module.exports = {
  defaultNetwork: 'Polygon',
  networks: {
    hardhat: {},
    Polygon: {
      url: 'https://polygon-mainnet.infura.io',
      accounts: [MY_SECRET],
    },
  },
  solidity: {
    version: '0.8.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
