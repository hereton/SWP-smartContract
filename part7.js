const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/8a59102938374242b05695ed42d6e5d1')

web3.eth.getBlockNumber().then(console.log)

// web3.eth
//   .getBlock("latest")
//   .then(block =>
//     console.log({ blockHash: block.hash, blockNumber: block.number })
//   );

// web3.eth.getBlockNumber().then(latest => {
//   for (let i = 0; i < 10; i++) {
//     web3.eth.getBlock(latest - i).then(block => console.log(block.hash));
//   }
// });

// web3.eth.getBlock("latest").then(console.log);

// web3.eth.getBlockTransactionCount("latest").then(console.log);

// web3.eth.getBlock('latest').then(b => console.log(b.hash))

const hash = '0xe957af3fa50c36952e71b7adbf06a0258eb1277b93b7e07b5e9a3001e8246f75'
web3.eth.getTransactionFromBlock(hash, 2).then(console.log)
