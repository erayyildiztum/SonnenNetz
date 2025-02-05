import { useForm } from "react-hook-form";
import AxiosInstance from "../components/axios/AxiosInstance";
import { FormHeader } from "../components/form/header";
import { InputBox } from "../components/form/input";
import { FormLabel } from "../components/form/label";
import { FormButton } from "../components/form/button";
import { useState } from "react";

export function PasswordResetRequest() {
  const { register, handleSubmit } = useForm();

  const [showMessage, setShowMessage] = useState(false);

  const submission = (data: any) => {
    AxiosInstance.post(`api/password_reset/`, {
      email: data.email,
    }).then(() => {
      setShowMessage(true);
    });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <FormHeader>Create password reset request</FormHeader>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {showMessage ? (
            <div>
              <div className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm">
                <p className="my-2 justify-center text-center text-sm text-white">
                  "If your email exists you have received an email with
                  instructions for resetting the password."
                </p>
              </div>
            </div>
          ) : null}
          <form onSubmit={handleSubmit(submission)} className="space-y-6">
            <div>
              <FormLabel htmlFor="email" isRequired={true}>
                Email address
              </FormLabel>
              <div className="mt-2">
                <InputBox
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required={true}
                  placeholder="Email address"
                  register={register}
                ></InputBox>
              </div>
            </div>

            <div>
              <FormButton
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send request
              </FormButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
