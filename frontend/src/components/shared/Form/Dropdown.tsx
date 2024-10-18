import { ChangeEvent } from "react";

export default function Dropdown({
    name,
    collection,
    valueEl,
    handleChange
}: {
    name: string;
    collection: Array<string>;
    valueEl: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void; 
}) {
    return(
        <select
            id={name}
            name={name}
            value={valueEl}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
        >
            <option value="" disabled>
            -- Select a project type --
            </option>
            {collection.map((type, index) => (
            <option key={index} value={type} className="text-black">
                {type}
            </option>
            ))}
        </select>
    );
}