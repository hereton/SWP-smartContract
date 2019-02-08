const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/8a59102938374242b05695ed42d6e5d1')
const Tx = require('ethereumjs-tx')

const acc1 = '0x5758F3fBC1C33a6776d316412A8A88c6eBE54197'
const acc2 = '0x1e85a674c599587FEf4718209bae57a4a489880e'
let privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')
let privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex')
// console.log(privateKey1)
const contractAddress = '0xcDb8AEFD4B2114421dcffAA14aAf2038CF43A2Db'
const contractABI = [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: '_spender', type: 'address' }, { name: '_value', type: 'uint256' }],
    name: 'approve',
    outputs: [{ name: 'success', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: '_from', type: 'address' }, { name: '_to', type: 'address' }, { name: '_value', type: 'uint256' }],
    name: 'transferFrom',
    outputs: [{ name: 'success', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'standard',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: '_to', type: 'address' }, { name: '_value', type: 'uint256' }],
    name: 'transfer',
    outputs: [{ name: 'success', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }, { name: '', type: 'address' }],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ name: '_initialSupply', type: 'uint256' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: '_from', type: 'address' },
      { indexed: true, name: '_to', type: 'address' },
      { indexed: false, name: '_value', type: 'uint256' }
    ],
    name: 'Transfer',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: '_owner', type: 'address' },
      { indexed: true, name: '_spender', type: 'address' },
      { indexed: false, name: '_value', type: 'uint256' }
    ],
    name: 'Approval',
    type: 'event'
  }
]

const contract = new web3.eth.Contract(contractABI, contractAddress)
const data = contract.methods.transfer(acc2, 1).encodeABI()
web3.eth.getTransactionCount(acc1, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(80000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    data: data,
    to: contractAddress
  }

  // Sign the transaction
  const tx = new Tx(txObject)
  tx.sign(privateKey1)

  const serializedTransaction = tx.serialize()
  const raw = '0x' + serializedTransaction.toString('hex')

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('err', err)
    console.log('txHash: ', txHash)
  })
})

// web3.eth.getBalance(acc1, (err, bal) => {
//   console.log('account 1 balance: ', web3.utils.fromWei(bal, 'ether'))
// })
// web3.eth.getBalance(acc2, (err, bal) => {
//   console.log('account 2 balance: ', web3.utils.fromWei(bal, 'ether'))
// })
