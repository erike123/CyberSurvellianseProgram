const express = require("express");
const app = express();
app.use(express.json());

const riskEngine = require("./riskEngine");
const blockedAddresses = new Set(); // Черен списък с блокирани адреси

// Приема транзакции и решава дали да ги блокира
app.post("/validateTransaction", (req, res) => {
    const { from, to, data, value } = req.body.transaction;

    // Проверка дали адресът вече е блокиран
    if (blockedAddresses.has(from)) {
        return res.json({ allowed: false, reason: "Адресът е в блоклист" });
    }

    // Изчисляване на риск фактора
    const riskScore = riskEngine.calculateRisk(from, to, data, value);
    if (riskScore > 80) {
        blockedAddresses.add(from); // Блокиране на адреса
        return res.json({ allowed: false, reason: "Транзакцията има висок риск!" });
    }

    res.json({ allowed: true });
});

app.listen(3000, () => console.log("Middleware работи на порт 3000"));