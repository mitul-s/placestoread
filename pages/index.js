import Head from "next/head";
import Image from "next/image";
import Link from "@/components/Link";

export default function Home() {
  return (
    <div className="">
      <h1>Places to Read</h1>
      <Link href="/about">About</Link>
      <table>
        <caption className="sr-only">Table caption</caption>
        <thead>
          <tr role="row">
            <th>Park</th>
            <th>Address</th>
            <th>Hours</th>
            <th>Website</th>
          </tr>
        </thead>
        s
        <tbody>
          <tr role="row">
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
          </tr>
        </tbody>
      </table>
    </div>
  );
}
