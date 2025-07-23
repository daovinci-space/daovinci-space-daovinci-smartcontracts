// hardhat.config.js - Estrutura inicial dos smart contracts DAO VINCI
]require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},

    base_goerli: {
      url: "https://goerli.base.org", // RPC da BASE testnet
      accounts: [process.env.PRIVATE_KEY], // chave privada via variável de ambiente
    },
  },
};
