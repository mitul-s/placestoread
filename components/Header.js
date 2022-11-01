import * as Dialog from "@radix-ui/react-dialog";
import Link from "@/components/Link";
import Button from "@/components/Button";

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

const Field = ({ label, placeholder, textArea, ...props }) => {
  const Component = textArea ? "textarea" : "input";
  return (
    <div className="flex flex-col gap-y-1">
      <label className="text-sm leading-none">{label}</label>
      <Component
        className="p-2 text-sm leading-none border rounded-sm border-mcqueen placeholder:text-mcqueen/50"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default function Header() {
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
            <form className="flex flex-col gap-y-4">
              <h2 className="text-xl leading-none">About You</h2>
              <div className="grid grid-cols-2 gap-x-2">
                <Field label="Your Twitter (optional)" placeholder="https://" />
                <Field label="Suggested Book" placeholder="Project Hail Mary" />
              </div>
              <hr className="border-mcqueen/25" />
              <h2 className="text-xl leading-none ">The Place</h2>
              <Field label="Park Name" placeholder="Riverdale Park East" />
              <div className="grid grid-cols-2 gap-x-2">
                <Field label="City" placeholder="Toronto" />
                <Field label="Country" placeholder="Canada" />
              </div>
              <Field
                label="Describe the park"
                placeholder="In your own words, a beautiful park..."
                textArea
                rows={5}
              />

              <Button
                type="submit"
                className="p-2 text-white rounded-sm bg-mcqueen"
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
