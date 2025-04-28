import { useState } from "react";
import useForm from "../../hooks/useForm";
import ConsoleInput from "../../components/shared/ConsoleInput/ConsoleInput";
import Header from "../../components/shared/Header/Header";
import AnalysisComponent from "./AnalysisComponent";
import userData from "../../types/UserData";


export default function AuditComponent() {
    
    return(
        <div className="max-container padding flex items-center flex-col gap-5">
            <Header 
<<<<<<< HEAD
                title={"CyberSurvelliance"} 
                coloredText="Program"
=======
                title={"SolidGuard "} 
                coloredText="QuickScan"
>>>>>>> 40c7dfb047049537d13840c31c1d7f071d587d5c
                coloredClass="secondary-header-color"
                size={"text-xl"}
                infoText="Paste your smart contract code in the field below to perform a quick scan for potential vulnerabilities and bugs. This scan checks for common security issues, such as reentrancy attacks, overflow/underflow vulnerabilities, and more. Ensure your contract is secure before deploying it on the blockchain."
                
            />
            {/* <h1 className="text-white-clr">audit page</h1>
            <form onSubmit={onSubmit}>
                <input type="text" id="smartContractCode" name="smartContractCode" value={values.smartContractCode} onChange={onChange} />
                <button className="text-white-clr">Submit</button>
            </form> */}
            <div className="w-[70%]">

                <ConsoleInput />
            </div>
            {/* <AnalysisComponent /> */}

        </div>

    );
}