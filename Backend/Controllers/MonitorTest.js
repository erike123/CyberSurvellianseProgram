// monitorUniswap.js
require('dotenv').config();
const { ethers } = require('ethers');

// Свързване към Ethereum mainnet чрез Infura
const provider = new ethers.providers.WebSocketProvider("wss://mainnet.infura.io/ws/v3/5dc5ad57b5ae447793b907963eed959b")
// Адрес на Uniswap V2 Router (mainnet)

const WATCHLIST = [
    "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", // Uniswap V2 Router
    "0x1111111254EEB25477B68fb85Ed929f73A960582", // 1inch Router
    "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"  // Uniswap Factory
].map(addr => addr.toLowerCase());


const wallet = new ethers.Wallet("c4a91c37e42cb322a0296f6fea48d56ae0216d20ea9b8c17f8d3fdff1db12dc6",provider);

provider.on("pending", async (txHash) => {
    try {
        const tx = await provider.getTransaction(txHash);
        if (!tx || !tx.to) return;

        // Проверка дали транзакцията е към наблюдаван контракт
        if (WATCHLIST.includes(tx.to.toLowerCase())) {
            console.log(`⚠️ Засечена транзакция към наблюдаван контракт: ${tx.hash}`);

            // Декодиране на входните данни
            const riskScore = analyzeTransaction(tx);
            if (riskScore > 70) {
                console.log(`🚨 Високорискова транзакция засечена! Hash: ${tx.hash}`);
            }
        }
    } catch (error) {
        console.error("❌ Грешка при обработка на транзакция:", error);
    }
});

// Функция за анализ на риска в транзакцията
function analyzeTransaction(tx) {
    let risk = 0;

    // 1️⃣ Проверка за Flash Loan (ниска gas price + заем)
    if (tx.gasPrice && parseInt(tx.gasPrice) < ethers.utils.parseUnits("10", "gwei")) {
        console.log("⚠️ Нисък Gas Price - възможен Flash Loan.");
        risk += 30;
    }

    // 2️⃣ Засичане на Reentrancy (многократни извиквания)
    if (tx.data && tx.data.length > 500) { // Дълги входни данни = сложни транзакции
        console.log("⚠️ Многократни извиквания - възможен Reentrancy.");
        risk += 40;
    }

    // 3️⃣ Манипулация на цени (неочаквано висока стойност)
    if (tx.value.gt(ethers.utils.parseEther("100"))) {
        console.log("⚠️ Висока стойност - възможна манипулация.");
        risk += 50;
    }

    return risk;
}