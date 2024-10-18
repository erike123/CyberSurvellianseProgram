export default function InputField({
    inputName,
    inputType,
    labelText,
    onChangeHandler,
    defaultValue,
}:{
    inputName: string,
    inputType: string,
    labelText: string,
    onChangeHandler: string,
    defaultValue: string;
}) {
    return(
        <>
        <input
            type={inputType}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name={inputName}
            id={inputName}
            defaultValue={defaultValue}
            onChange={onChangeHandler}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            />
        <label
            htmlFor={inputName}
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
            {labelText}
        </label>
        </>
    );
}