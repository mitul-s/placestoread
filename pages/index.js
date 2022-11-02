import Head from "next/head";
import Image from "next/image";
import Link from "@/components/Link";
import Button from "@/components/Button";
import * as Collapsible from "@radix-ui/react-collapsible";
import { google } from "googleapis";
import React from "react";

export async function getStaticProps() {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: {
      private_key: privateKey,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
  });
  const sheets = google.sheets({ version: "v4", auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "Sheet1!A:O",
  });

  const rows = [];
  const rawRows = res.data.values || [];
  const headers = rawRows.shift();

  rawRows.forEach((row) => {
    const rowData = {};
    row.forEach((item, index) => {
      rowData[headers[index]] = item;
    });
    rows.push(rowData);
  });

  const parks = rows;

  return {
    props: {
      parks,
    },
    // revalidate: 10,
  };
}

export default function Home({ parks }) {
  const ParkRow = (props) => {
    const {
      parkName,
      city,
      country,
      notableFeature,
      coordinates,
      locationLink,
      description,
      submittedByLink,
      submittedByHandle,
      suggestedBook,
      suggestedBookLink,
    } = props;

    console.log(props);
    const [open, setOpen] = React.useState(false);

    return (
      <Collapsible.Root asChild>
        <li className="transition hover:bg-sally/10">
          <Collapsible.Trigger className="w-full grid text-left py-2.5 px-4 grid-cols-yeah">
            <h2>{parkName}</h2>
            <div>{city}</div>
            <div>{country}</div>
            <div>{notableFeature}</div>
            <Link
              href={locationLink}
              isExternal
              className="z-10 p-1 ml-4 leading-none transition rounded-sm bg-sally/50 w-fit hover:bg-mcqueen hover:text-white"
            >
              {coordinates}
            </Link>
            <div className="self-center w-2 h-2 rounded-full bg-mcqueen place-self-end" />
          </Collapsible.Trigger>
          <Collapsible.Content className="grid px-4 overflow-hidden grid-cols-yeah data-[state=open]:open data-[state=closed]:close">
            <div className="flex flex-col col-span-2 pl-12 ml-1.5 gap-y-6 pb-6 pt-3">
              <h3 className="sr-only">Description</h3>
              <p>{description}</p>
              <div className="flex leading-none gap-x-10">
                <div>
                  <h3 className="text-sm mb-1.5">Recommended reading</h3>
                  <Link
                    href={suggestedBookLink}
                    isExternal
                    className="underline transition hover:bg-sally/50 underline-offset-4"
                  >
                    {suggestedBook}
                  </Link>
                </div>
                <div>
                  <h3 className="text-sm mb-1.5">Submitted by</h3>
                  <Link
                    href={submittedByLink}
                    isExternal
                    className="underline transition hover:bg-sally/50 underline-offset-4"
                  >
                    @{submittedByHandle}
                  </Link>
                </div>
              </div>
              <div className="flex gap-x-2">
                <Button>Share</Button>
                <Button>Leave a review</Button>
              </div>
            </div>
            <div className="col-span-2 col-start-5 pt-3 pb-6 ml-4">
              {/* <Image src=""  /> */}
            </div>
          </Collapsible.Content>
        </li>
      </Collapsible.Root>
    );
  };

  return (
    <>
      <main className="hidden w-full h-full sm:block">
        <div className="text-xl border-b-2 border-mcqueen">
          <ul className="grid w-full px-4 grid-cols-yeah">
            <li className="pl-12 ml-1.5">Park</li>
            <li>City</li>
            <li>Country</li>
            <li>Notable Feature</li>
            <li className="pl-4 after:content-['']">Map</li>
          </ul>
        </div>
        <div className="grid isolate">
          <ul className="z-10 border-b divide-y border-mcqueen divide-mcqueen park overlay">
            {parks.map((park) => (
              <ParkRow key={park.id} {...park} />
            ))}
          </ul>
          <div className="w-full h-full content">
            <div className="grid w-full h-full px-4 grid-cols-yeah col-divider" />
          </div>
        </div>
        <div className="absolute grid w-full px-4 -translate-x-1/2 left-1/2 grid-cols-yeah col-divider h-fill-available" />
      </main>
    </>
  );
}
