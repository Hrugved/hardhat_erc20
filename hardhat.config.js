require("dotenv").config()

require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")

const RPC_URL_RINKEBY = process.env.RPC_URL_RINKEBY || ""
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL || ""

module.exports = {
  solidity: {
    compilers: [{ version: "0.8.7" }, { version: "0.4.19" }, {version: '0.6.12'}],
  },
  namedAccounts: { deployer: { default: 0 }, player: { default: 1 } },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmations: 1,
      forking: {
        url: MAINNET_RPC_URL
      }
    },
    localhost: {
      chainId: 31337,
    },
    rinkeby: {
      chainId: 4,
      blockConfirmations: 6,
      url: RPC_URL_RINKEBY,
      accounts: [PRIVATE_KEY],
    },
  },
  gasReporter: {
    enabled: false,
    noColors: true,
    outputFile: "gas-report.txt",
    currency: "USD",
    token: "MATIC",
  },
  mocha: {
    timeout: 300000,
  },
}
