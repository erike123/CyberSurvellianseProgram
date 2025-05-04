import { useState } from "react";
import useForm from "../../../hooks/useForm";
import Button from "../Button/Button";

import { projectTypes, priorityLevel, experienceLevel, technologies } from ".";
import Dropdown from "../Form/Dropdown";
import InputField from "../Form/InputField";
import baseUrl from "../../../services/baseUrl";
import Cards from "../Cards/Cards";
import { Card } from "@mui/material";
import MyContractComponent from "../MyContractComponent/MyContractComponent";

const initialFormValues = {
  projectTitle: "",
  projectType: "",
  repositoryLink: "",
  technologies: "",
  budget: "",
  deadline: "",
  priorityLevel: "",
  desiredFreelancerExperienceLevel: "",
  projectDescription: "",
  prompt: "This works",
};

const ConsoleInput = () => {
  const [companies, setCompanies] = useState([]);

  const handleFormSubmit = async () => {
    const data = { ...values };
    try {
      const response = await fetch(`${baseUrl}/testApi`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setCompanies(result.response);
      console.log("Form submitted successfully:", result);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  const { values, onChange, onSubmit } = useForm(handleFormSubmit, initialFormValues);

  return (
    <div className="rounded-md max-w-full mt-14">
      <MyContractComponent />

      {companies.length > 0 ? (
        <Cards companies={companies} />
      ) : (
        <>
          <form className="mx-auto">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <InputField inputName="projectTitle" inputType="text" labelText="Title of Project" defaultValue={values.projectTitle} onChangeHandler={onChange} />
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <div className="mb-4">
                  <Dropdown collection={projectTypes} valueEl={values.projectType} handleChange={onChange} name="projectType" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <InputField inputName="repositoryLink" inputType="text" labelText="Repository Link" defaultValue={values.repositoryLink} onChangeHandler={onChange} />
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <Dropdown name="priorityLevel" collection={priorityLevel} valueEl={values.priorityLevel} handleChange={onChange} />
                <label
                  htmlFor="priorityLevel"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Priority Level
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <InputField inputName="budget" inputType="number" labelText="Budget" defaultValue={values.budget} onChangeHandler={onChange} />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <InputField inputName="deadline" inputType="date" labelText="Deadline" defaultValue={values.deadline} onChangeHandler={onChange} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <Dropdown name="technologies" collection={technologies} valueEl={values.technologies} handleChange={onChange} />
                <label
                  htmlFor="technologies"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Technologies
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Dropdown name="desiredFreelancerExperienceLevel" collection={experienceLevel} valueEl={values.desiredFreelancerExperienceLevel} handleChange={onChange} />
                <label
                  htmlFor="desiredFreelancerExperienceLevel"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Experience Level
                </label>
              </div>
            </div>

            <div className="relative z-0 w-full mb-10 mt-5 group">
              <textarea
                id="projectDescription"
                name="projectDescription"
                rows={10}
                value={values.projectDescription}
                onChange={onChange}
                className="w-full resize-none bg-gray-800 text-green-500 font-mono p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Explain your smart contract code..."
              ></textarea>
            </div>
          </form>

          <div className="flex justify-center" onClick={onSubmit}>
            <Button label={"Find your Auditor"} />
          </div>
        </>
      )}
    </div>
  );
};

export default ConsoleInput;
