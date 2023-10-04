import Link from "@/components/Link";

export default function About() {
  return (
    <main className="w-full px-4 mx-auto max-w-screen-2xl">
      <div className="flex flex-col max-w-2xl gap-4 text-lg w-fit">
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
        <div className="h-px w-96 bg-sally" />
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
        <p className="text-sm">
          Featured on Read.cv, Minimal Gallery and Where I Would Like to Read{" "}
        </p>
      </div>
    </main>
  );
}
