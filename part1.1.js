const Web3 = require('web3')
const url = 'https://mainnet.infura.io/v3/8a59102938374242b05695ed42d6e5d1'

const web3 = new Web3(url)
const address = '0xab7c74abC0C4d48d1bdad5DCB26153FC8780f83E'
let bl = ''

web3.eth.getBalance(address, (err, bal) => {
  bl = bal
  console.log(bl)
  console.log(web3.utils.fromWei(bl, 'ether'))
  console.log(web3.utils.fromWei(bl, 'gwei'))
})

let acc = web3.eth.accounts.create()
console.log(acc)
