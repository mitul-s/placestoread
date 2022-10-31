import Head from "next/head";
import Image from "next/image";
import Link from "@/components/Link";
import * as Collapsible from "@radix-ui/react-collapsible";
import * as Dialog from "@radix-ui/react-dialog";
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

const Button = React.forwardRef(({ children, ...props }, forwardRef) => {
  return (
    <button
      ref={forwardRef}
      className="px-2.5 py-2 leading-none transition border rounded-sm border-mcqueen hover:bg-mcqueen hover:text-white"
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default function Home() {
  const TableRow = () => {
    const [open, setOpen] = React.useState(false);

    return (
      <Collapsible.Root asChild>
        <li>
          <Collapsible.Trigger className="w-full grid text-left py-2.5 px-4 grid-cols-yeah">
            <h2>Riverdale Park East</h2>
            <div>Toronto</div>
            <div>Canada</div>
            <div>Architechture</div>
            <Link
              href="/"
              isExternal
              className="z-10 p-1 ml-4 leading-none rounded-sm bg-mcqueen/25 w-fit"
            >
              43.6703° N, 79.3563° W
            </Link>
            <div className="self-center w-2 h-2 rounded-full bg-mcqueen place-self-end" />
          </Collapsible.Trigger>
          <Collapsible.Content className="grid px-4 grid-cols-yeah">
            <div className="flex flex-col col-span-2 pl-12 ml-1.5 gap-y-6 pb-6 pt-3">
              <h3 className="sr-only">Description</h3>
              <p>
                It&apos;s a nice park with a great view of downtown Toronto and
                especially the CN Tower. And it has a gorgeous view of the
                sunset. It has many things to offer for each season. During
                summertime, you can lay on the hill, play catch or Frisbee; run,
                walk or bike around the track; play baseball or soccer. In
                wintertime, you can enjoy sledding.
              </p>
              <div className="flex leading-none gap-x-10">
                <div>
                  <h3 className="text-sm mb-1.5">Recommended reading</h3>
                  <Link href="">Project Hail Mary – John Howel</Link>
                </div>
                <div>
                  <h3 className="text-sm mb-1.5">Submitted by</h3>
                  <Link href="">@typicalmitul</Link>
                </div>
              </div>
              <div className="flex gap-x-2">
                <Button>Share</Button>
                <Button>Leave a review</Button>
              </div>
            </div>
            <div className="col-span-2 col-start-5 pt-3 pb-6 ml-4">
              <div className="w-full h-24 bg-mcqueen/50">Image</div>
            </div>
          </Collapsible.Content>
        </li>
      </Collapsible.Root>
    );
  };

  return (
    <div>
      <header className="justify-between px-4 pt-12 pb-16 mx-auto sm:flex max-w-screen-2xl">
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
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-mcqueen/50" />
              <Dialog.Content className="fixed inset-0 w-full max-w-screen-sm mx-auto mt-48 bg-white border-2 h-1/2 border-mcqueen">
                <h1 className="text-4xl">The Place</h1>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
          <Button>Share feedback</Button>
        </div>
      </header>
      <div className="hidden w-full sm:block">
        <div className="text-xl border-b-2 border-mcqueen">
          <ul className="grid w-full px-4 grid-cols-yeah">
            <li className="pl-12 ml-1.5">Park</li>
            <li>City</li>
            <li>Country</li>
            <li>Notable Feature</li>
            <li className="pl-4">Map</li>
            <li></li>
          </ul>
        </div>
        <div className="grid isolate">
          <ul className="z-10 border-b divide-y border-mcqueen divide-mcqueen park overlay">
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
          </ul>
          <div className="w-full h-full content">
            <div className="grid w-full h-full px-4 grid-cols-yeah col-divider" />
          </div>
        </div>
      </div>
    </div>
  );
}
