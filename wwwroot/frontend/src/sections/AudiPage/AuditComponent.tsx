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
                title={"CyberSurvellianceProgram"} 
                coloredText="Program"
                coloredText="CyberSurvellianceProgram"
                coloredClass="secondary-header-color"
                size={"text-xl"}
                
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