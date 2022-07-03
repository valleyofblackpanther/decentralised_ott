// https://eth-goerli.g.alchemy.com/v2/PSn2c8A3J7WA67wy9wAsnBPn713hujsr

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks : {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/PSn2c8A3J7WA67wy9wAsnBPn713hujsr',
      accounts: ['a35b71fbf1e364f4923c20272e30824f9a071e78d988f3eaf70f60fc847fb33f']
    }
  }
} 