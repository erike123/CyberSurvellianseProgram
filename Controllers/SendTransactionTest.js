require('dotenv').config();
const { ethers } = require('ethers');

// Свържете се към същия Infura node, който използвате за наблюдение
const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/5dc5ad57b5ae447793b907963eed959b");
const wallet = new ethers.Wallet("c4a91c37e42cb322a0296f6fea48d56ae0216d20ea9b8c17f8d3fdff1db12dc6", provider);

// Използвайте адреса на Uniswap V2 Router (или адреса на друг целеви dApp)
const UNISWAP_ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

async function sendTestTransaction() {
    try {
        const tx = await wallet.sendTransaction({
            to: UNISWAP_ROUTER_ADDRESS,
            value: ethers.utils.parseEther("0.001"), // малка стойност за тест
            gasLimit: 21000, // минимален gasLimit за прост трансфер
        });
        console.log(`Тестовата транзакция е изпратена: ${tx.hash}`);
    } catch (error) {
        console.error("Грешка при изпращането на тестова транзакция:", error);
    }
}

sendTestTransaction();
