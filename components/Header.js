import * as Dialog from "@radix-ui/react-dialog";
import Link from "@/components/Link";
import Button from "@/components/Button";
import { useForm, ValidationError } from "@formspree/react";
import React from "react";

const Arrow = ({ ...props }) => {
  return (
    <svg
      width={12}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.392 11.21 5.37 10.2 8.92 6.648H0V5.17h8.92L5.37 1.625 6.391.608l5.301 5.301-5.3 5.301Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Field = ({ label, name, type, placeholder, textArea, id, ...props }) => {
  const Component = textArea ? "textarea" : "input";
  return (
    <div className="flex flex-col gap-y-1">
      <label className="text-sm leading-none" htmlFor={id}>
        {label}
      </label>
      <Component
        className="p-2 text-sm leading-none border rounded-sm border-mcqueen placeholder:text-mcqueen/50"
        placeholder={placeholder}
        id={id}
        name={id}
        type={type}
        {...props}
      />
    </div>
  );
};

export default function Header() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);
  const [inputs, setInputs] = React.useState({
    userTwitter: "",
    suggestedBook: "",
    parkName: "",
    city: "",
    country: "",
    parkDescription: "",
  });

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <header className="justify-between w-full px-4 pt-12 pb-16 mx-auto sm:flex max-w-screen-2xl">
      <div>
        <h1 className="text-5xl">Places to Read</h1>
        <p className="max-w-md mt-1">
          A project to help people find places outside where they can enjoy a
          book, people watch and touch some grass.
        </p>
        <Link href="/about" className="flex items-center mt-4 gap-x-1 w-fit">
          About <Arrow />
        </Link>
      </div>
      <div className="flex items-start mt-4 sm:mt-0 gap-x-2">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>Submit a place</Button>
          </Dialog.Trigger>
          <Dialog.Overlay className="fixed inset-0 z-10 bg-mcqueen/25 backdrop-brightness-90" />
          <Dialog.Content className="fixed inset-0 z-20 w-full max-w-md px-4 py-6 mx-auto mt-48 bg-white border-2 h-fit border-mcqueen">
            <form
              className="flex flex-col gap-y-4"
              method="POST"
              onSubmit={handleSubmit}
            >
              <h2 className="text-xl leading-none">About You</h2>
              <div className="grid grid-cols-2 gap-x-2">
                <Field
                  label="Your Twitter (optional)"
                  placeholder="https://"
                  id="userTwitter"
                  onChange={handleOnChange}
                  value={inputs.userTwitter}
                />
                <Field
                  label="Suggested Book"
                  placeholder="Project Hail Mary"
                  id="suggestedBook"
                  onChange={handleOnChange}
                  value={inputs.suggestedBook}
                />
              </div>
              <hr className="border-mcqueen/25" />
              <h2 className="text-xl leading-none ">The Place</h2>
              <Field
                label="Park Name"
                placeholder="Riverdale Park East"
                id="parkName"
                onChange={handleOnChange}
                value={inputs.parkName}
              />
              <div className="grid grid-cols-2 gap-x-2">
                <Field
                  label="City"
                  placeholder="Toronto"
                  id="city"
                  onChange={handleOnChange}
                  value={inputs.city}
                />
                <Field
                  label="Country"
                  placeholder="Canada"
                  id="country"
                  onChange={handleOnChange}
                  value={inputs.country}
                />
              </div>
              <Field
                label="Describe the park"
                placeholder="In your own words, a beautiful park..."
                textArea
                rows={5}
                id="parkDescription"
                onChange={handleOnChange}
                value={inputs.parkDescription}
              />

              <Button
                type="submit"
                className="p-2 text-white rounded-sm bg-mcqueen disabled:bg-black"
                disabled={state.submitting}
              >
                Submit
              </Button>
            </form>
          </Dialog.Content>
        </Dialog.Root>
        <Button>Share feedback</Button>
      </div>
    </header>
  );
}
