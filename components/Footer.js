import Link from "@/components/Link";

export default function Footer() {
  return (
    <footer className="z-10 flex items-baseline gap-x-1 w-full px-4 py-2 mt-auto text-white bg-mcqueen">
      <Link
        href="https://twitter.com/typicalmitul"
        isExternal
        className="block ml-auto text-sm tracking-wide w-fit"
      >
        Built by Mitul Shah
      </Link>
      <p className="text-xs">and descriptions by AI</p>
    </footer>
  );
}
