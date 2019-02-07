var Web3 = require('web3')
var web3 = new Web3('http://127.0.0.1:7545')
web3.eth
  .getBalance('0x844e959B0e5d84f284c2ec2528F016455f0af424', (err, wei) => {
    balance = web3.utils.fromWei(wei, 'ether')
  })
  .then(() => console.log(balance))
