require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remain upgrade grace cash flush sense'; 
let testAccounts = [
"0x24cb429037a67bec17230fd8e35791d3b21a91f34f85eecea6d6572e3f3b8571",
"0xd1dc97162cab92d1e4150a8c78b4f3a4b55391e8cedc74244db930c3bb67d7e4",
"0xc59655064cbe3464261de47e253995d500d98c7be075e0ed341e0554272811e4",
"0x0cfcadd39eedf271aebfed4c1d243ee74cb9fc56d5ce6b74f6e3bdf975d95a70",
"0x9fde2515552b2266d679561146399f3eca37be90a57590e959954265d534517f",
"0x9b1e55247a0166104dcb03a2f467a82ea7dd8cb5cd962e1a19b0afdf585288a2",
"0x79cc2b806dbe2f3c06487b119cef8e3c47911c7265f27091c3e7fcd4facca5f3",
"0xc2c8f5f6786ae2eb0679fdee9cae28d06347d9174858005e59a88389f3a83dea",
"0xd9f488753c4613d847a130979e93530719c9dee168cd41a1884bdd1d1cff1756",
"0x9d95105f369de1737eecad871d49a1a211946d3258acc01552ba0d9960097847"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

