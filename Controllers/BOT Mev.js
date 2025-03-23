const express = require("express");
const app = express();
app.use(express.json());

app.post("/validate-tx", async (req, res) => {
    const tx = req.body;

    // Проверка за OpenSea contract address (примерен адрес)
    const BLOCKED_CONTRACTS = ["0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b"];

    if (BLOCKED_CONTRACTS.includes(tx.to)) {
        return res.status(403).json({ message: "🚫 OpenSea transaction blocked!" });
    }

    res.status(200).json({ message: "✅ Transaction allowed." });
});

app.listen(3000, () => console.log("Middleware running on port 3000"));
