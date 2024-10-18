import { useState } from "react";
import useForm from "../../../hooks/useForm";
import Button from "../Button/Button";

import normalizeSourceCode from "../../../VulnerabilityTests/formatSourceCode";
import { checkReentrancy } from "../../../VulnerabilityTests/ERC-721/reentrancyChecker";

const initialFormValues = {
    smartContractCode: '',
};


const ConsoleInput = () => {
  
  const [vulnerabilities, setVulnerabilities] = useState<string[]>([])

  const handleCheck = () => {
    const formatedSourceCode = normalizeSourceCode(values.smartContractCode);
    console.log(formatedSourceCode)
    const results = checkReentrancy(formatedSourceCode);
    console.log('RESULTS', results)
    setVulnerabilities(results);
  }

  const handleFormSubmit = (values: { [key: string]: any }): void => {
      console.log('Form Submitted: ', values);
      handleCheck()
      // Handle form data (e.g., send to an API)
    };

  const { values, onChange, onSubmit } = useForm(handleFormSubmit, initialFormValues)

  return (
    <div className="rounded-md max-w-full text-center mt-14">
      <div className="bg-gray-700 p-4 mb-6 rounded-2xl">
          <label htmlFor="codeInput" className="block text-gray-300 mb-2 text-sm">
              Paste your code below:
          </label>
          <form >
              <textarea
                  id="smartContractCode"
                  name="smartContractCode" 
                  rows="10"
                  value={values.smartContractCode}
                  onChange={onChange}
                  className="w-full resize-none bg-gray-800 text-green-500 font-mono p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Paste your code here..."
              ></textarea>
          </form>
      </div>
      
      <div className="flex justify-center" onClick={onSubmit}>
          <Button label={"Start Scan"} />
      </div>

      <div>
        {vulnerabilities.length > 0 ? (
          <ul>
            {vulnerabilities.map((vuln, index) => (
              <li key={index} className="text-white-clr">{vuln}</li>
            ))}
          </ul>
        ) : (
          <p className="text-white-clr">No vulnerabilities detected</p>
        )}
      </div>
    </div>
  );
}
  
export default ConsoleInput;
  