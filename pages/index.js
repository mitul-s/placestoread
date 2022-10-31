import Head from "next/head";
import Image from "next/image";
import Link from "@/components/Link";
import * as Accordion from "@radix-ui/react-accordion";
import * as Collapsible from "@radix-ui/react-collapsible";
import * as React from "react";

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

const Button = ({ children }) => {
  return (
    <button className="px-2.5 py-2 leading-none transition border rounded-sm border-mcqueen hover:bg-mcqueen hover:text-white">
      {children}
    </button>
  );
};

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
              className="z-10 p-1 leading-none rounded-sm bg-mcqueen/25 w-fit"
            >
              43.6703° N, 79.3563° W
            </Link>
            <div className="self-center w-2 h-2 rounded-full bg-mcqueen place-self-end" />
          </Collapsible.Trigger>
          <Collapsible.Content className="pt-4 pb-8">
            <div className="grid grid-cols-yeah">
              <div className="flex flex-col col-span-3 pl-16 ml-1 gap-y-6 ">
                <p>
                  It&apos;s a nice park with a great view of downtown Toronto
                  and especially the CN Tower. And it has a gorgeous view of the
                  sunset. It has many things to offer for each season. During
                  summertime, you can lay on the hill, play catch or Frisbee;
                  run, walk or bike around the track; play baseball or soccer.
                  In wintertime, you can enjoy sledding.
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
              <div className="col-span-2 col-start-5 mr-4">
                <div className="w-full h-24 bg-mcqueen/50">Image</div>
              </div>
            </div>
          </Collapsible.Content>
        </li>
      </Collapsible.Root>
    );
  };

  return (
    <div className="">
      <header className="flex justify-between pt-12 pb-16 pl-16 pr-4 ml-1">
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
        <div className="flex items-start gap-x-2">
          <Button>Submit a place</Button>
          <Button>Share feedback</Button>
        </div>
      </header>
      <div className="relative w-full">
        {/* <div className="absolute top-0 w-px h-full bg-black right-1/4" /> */}
        <div className="text-xl text-left border-b-2 border-mcqueen">
          <ul className="grid w-full ml-1 grid-cols-yeah">
            <li className="pl-16">Park</li>
            <li>City</li>
            <li>Country</li>
            <li>Notable Feature</li>
            <li>Map</li>
            <li>x</li>
          </ul>
        </div>

        <ul className="border-b divide-y border-mcqueen divide-mcqueen park">
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </ul>
      </div>
    </div>
  );
}
