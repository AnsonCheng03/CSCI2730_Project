module.exports = {
  contracts_build_directory: "./src/contracts",
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
  },
  compilers: {
    solc: {
      version: "0.8.21",
    },
  },
};
