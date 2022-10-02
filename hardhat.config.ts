import "@typechain/hardhat";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";
// import "hardhat-gas-reporter";
import "dotenv/config";
// import "solidity-coverage";
import "hardhat-deploy";
import { HardhatUserConfig } from "hardhat/config";

// ================
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      allowUnlimitedContractSize: true,
    },
    localhost: {
      chainId: 31337,
      allowUnlimitedContractSize: true,
    },
    //   goerli: {
    //     url: GOERLI_RPC_URL,
    //     accounts: [PRIVATE_KEY],
    //     chainId: 5,
    //   },
  },
  solidity: {
    version: "0.8.9",
    //   settings: {
    //     optimizer: {
    //       enabled: true,
    //       runs: 200,
    //     },
  },
  // etherscan: {
  //   apiKey: ETHERSCAN_API_KEY,
  // },
  // gasReporter: {
  //   enabled: true,
  //   currency: "USD",
  //   outputFile: "gas-report.txt",
  //   noColors: true,
  //   // coinmarketcap: COINMARKETCAP_API_KEY,
  // },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
  },
  // mocha: {
  //   timeout: 200000, // 200 seconds max for running tests
  // },
};

export default config;
