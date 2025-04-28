import React, { useEffect, useState } from 'react';

import abi from './abi';
import abiCode from './abi';
import { ethers } from 'ethers';

export default function MyContractComponent() {
    // IMPORTS AND SETUP

    const ABI = abiCode;

    const POOL_ADDRESS = '0xD828108995472B3B0162634333707b52b906B824'
    const SEPOLIA_RPC_URL = 'https://eth-sepolia.g.alchemy.com/v2/gkzuWe8pvZ1cJODcOtXSsoTBt0S7sv1feth-sepolia.g.alchemy.com'
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const poolContract = new ethers.Contract(
        POOL_ADDRESS,
        ABI,
        provider
    )
    
    async function main(pool, seconds) {
        const secondsAgo = [seconds, 0]

        const observeData = await pool.getAudtiorStats("Pashov", "reentrancy")

        console.log(observeData)
        return observeData
    }
    main(poolContract, 1000)

    const [result, setResult] = useState();

    return(
        <div>
            <h1>Works</h1>
        </div>
    );
}
