require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift rice stereo minor give glove equal gas'; 
let testAccounts = [
"0xcd0aca8839789eb381c85b7844a7efe344b35ae54d539155f6f2ae6ee6272c00",
"0x3c096c5ef5eba7a54a85463efe9eb4e9bcf4388f1c7aecbecb1746e950a05669",
"0x23f835abb69a662b5ad4050a30d6a80c371bd1cf37bca1b63c463d76d5354a6d",
"0x41a757aadaa4f03c59191d17a8abbc3980c528f6ea42afdef68d349fd2872c03",
"0x0a068c46c19055e85b36c123f93145443e30c603edf4ea0eef20c5741471ed0b",
"0x4c1a4cc1aa0f43c785cde184d32133d7488a1776dda902e0a616bc024c7ac60f",
"0x9f9d13c5c0c00002857ee278fc13eb6c238d4d66902ead8274beae2664421979",
"0xb1005a1351154fc0693ebe78cfe4fc5055bce8c3039a79d586a3d7f9f059200d",
"0xdecec6797c7c6816e8048372ba7ccfc7e7756134cf79b92cca6f248015e23275",
"0x24db44701456bb5800c906024ed5d56b3cb6f09a3371de7f1b79881989dd80c1"
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
            version: '^0.5.11'
        }
    }
};
