const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/8a59102938374242b05695ed42d6e5d1')
let Tx = require('ethereumjs-tx')

const acc1 = '0x5758F3fBC1C33a6776d316412A8A88c6eBE54197'
const acc2 = '0x1e85a674c599587FEf4718209bae57a4a489880e'
let privateKey1 = Buffer.from('your private key', 'hex')
const privateKey2 = Buffer.from('your private key', 'hex')
console.log(privateKey1)
console.log(privateKey2)

// web3.eth.getTransactionCount(acc1, (err, txCount) => {
//   // Build the transaction
//   const txObject = {
//     nonce: web3.utils.toHex(txCount),
//     to: acc2,
//     value: web3.utils.toHex(web3.utils.toHex('0.1', 'ether')),
//     gasLimit: web3.utils.toHex(21000),
//     gasPrice: web3.utils.toHex(web3.utils.toWei('1', 'gwei'))
//   }

//   console.log(txObject)

//   // Sign the transaction
//   const tx = new Tx(txObject)
//   tx.sign(privateKey1)

//   const serializedTransaction = tx.serialize()
//   const raw = '0x' + serializedTransaction.toString('hex')

//   // Broadcast the transaction
//   web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//     console.log('err', err)
//     console.log('txHash: ', txHash)
//   })
// })

web3.eth.getBalance(acc1, (err, bal) => {
  console.log('account 1 balance: ', web3.utils.fromWei(bal, 'ether'))
})
web3.eth.getBalance(acc2, (err, bal) => {
  console.log('account 2 balance: ', web3.utils.fromWei(bal, 'ether'))
})
