import Link from "@/components/Link";

export default function About() {
  return (
    <main className="px-4 max-w-screen-2xl w-full mx-auto">
      <div className="text-lg max-w-2xl w-fit flex flex-col gap-4">
        <p>
          Built this project to practice my design skills, specifically working
          with a limited set of colours and font sizes. This project was deeply
          inspired by{" "}
          <Link
            isExternal
            href="https://verygoodfilms.co/"
            className="underline transition hover:bg-sally/50 underline-offset-4"
          >
            Very Good Films
          </Link>
          <span className="text-xs"> (i know, basically a copy)</span> and a
          solo backpacking trip I took in 2022. It did not take me long to
          realize that being in a nice park with my Kindle is more than enough
          to make me happy.
        </p>
        <p>
          {
            "I'd love for you to share places around the around the world that also brought you joy in a similar way."
          }
        </p>
        <p className="text-sm">
          You can check out the repository for this website{" "}
          <Link
            href="https://github.com/mitul-s/placestoread"
            isExternal
            className="underline transition hover:bg-sally/50 underline-offset-4"
          >
            here
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
