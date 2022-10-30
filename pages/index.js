import Head from "next/head";
import Image from "next/image";
import Link from "@/components/Link";
import * as Accordion from "@radix-ui/react-accordion";
import * as Collapsible from "@radix-ui/react-collapsible";
import * as React from "react";

export default function Home() {
  const TableRow = () => {
    const [open, setOpen] = React.useState(false);

    return (
      <Collapsible.Root asChild>
        <li>
          <Collapsible.Trigger className="w-full grid grid-cols-4 text-left py-2">
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
          </Collapsible.Trigger>
          <Collapsible.Content>Yo</Collapsible.Content>
        </li>
      </Collapsible.Root>
    );
  };

  //   const TableRow = () => {
  //     return (
  //       <Accordion.Item>
  //         <Accordion.Trigger asChild>
  //           <tr>
  //             <td>Prospect Park</td>
  //             <td>Prospect Park West and 9th St.</td>
  //             <td>6am - 1am</td>
  //             <td>
  //               <a href="https://www.prospectpark.org/">Visit</a>
  //             </td>
  //           </tr>
  //         </Accordion.Trigger>
  //         <Accordion.Content>Content</Accordion.Content>
  //       </Accordion.Item>
  //     );
  //   };

  return (
    <div className="">
      <h1>Places to Read</h1>
      <Link href="/about">About</Link>
      <div className="w-full">
        {/* <caption className="sr-only">Table caption</caption> */}
        <div className="text-left border-b-2 border-supreme text-xl">
          <ul className="w-full grid grid-cols-4">
            <li>Park</li>
            <li>Address</li>
            <li>Hours</li>
            <li>Website</li>
          </ul>
        </div>

        <ul className="divide-y border-b divide-black border-black">
          {/* <tr role="row">
              <td>Central Park</td>
              <td>59th St. and 5th Ave.</td>
              <td>6am - 1am</td>
              <td>
                <a href="https://www.centralparknyc.org/">Visit</a>
              </td>
            </tr>
            <tr role="row">
              <td>Prospect Park</td>
              <td>Prospect Park West and 9th St.</td>
              <td>6am - 1am</td>
              <td>
                <a href="https://www.prospectpark.org/">Visit</a>
              </td>
            </tr> */}
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </ul>
      </div>
    </div>
  );
}
