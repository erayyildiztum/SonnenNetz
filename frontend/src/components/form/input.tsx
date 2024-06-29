import { useForm } from "react-hook-form";
import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";

function InputBox(props) {
  const { id, name, type, required, autoComplete, placeholder } = props;

  const { register } = useForm();

  return (
    <div className="relative w-full">
      <input
        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
        id={id}
        {...register(name)}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

function DateInputBox(props) {
  const {
    id,
    name,
    type,
    dataDateFormat,
    required,
    autoComplete,
    placeholder,
    onFocus,
    onBlur,
  } = props;

  const { register } = useForm();

  const [inputType, setInputType] = useState("text");

  const handleFocus = () => {
    setInputType("date");
  };

  const handleBlur = (event) => {
    if (!event.target.value) {
      setInputType("text");
    }
  };

  return (
    <div className="relative w-full">
      <input
        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
        id={id}
        {...register(name)}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}

function TextArea(props) {
  const { id, name, placeholder } = props;

  const { register } = useForm();

  return (
    <div className="relative w-full">
      <textarea
        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none resize-none"
        id={id}
        {...register(name)}
        placeholder={placeholder}
      />
    </div>
  );
}

function FileInput(props) {
  const { id, htmlFor, name, text, extension, size } = props;

  const { register } = useForm();

  return (
    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
      <div className="text-center">
        <PhotoIcon
          className="mx-auto h-12 w-12 text-gray-300"
          aria-hidden="true"
        />
        <div className="mt-4 flex text-sm leading-6 text-gray-600">
          <label
            htmlFor={htmlFor}
            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
          >
            <span>{text}</span>
            <input id={id} name={name} type="file" className="sr-only" />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs leading-5 text-gray-600">
          {extension} up to {size}MB
        </p>
      </div>
    </div>
  );
}

export { InputBox, DateInputBox, TextArea, FileInput };
