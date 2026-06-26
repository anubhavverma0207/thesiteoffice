import Link from "next/link";
import { site } from "@/lib/site.config";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[100svh] flex-col items-center justify-center text-center">
      <span className="label text-ash">(404)</span>
      <h1 className="mt-6 font-serif text-display-lg">Lost the thread.</h1>
      <p className="mt-6 max-w-sm text-lg text-ash">
        The page you're after doesn't exist, but the rest of {site.name} is
        worth a look.
      </p>
      <Link
        href="/"
        data-cursor="Home"
        data-cursor-theme="dark"
        className="mt-10 rounded-full bg-ink px-8 py-4 text-bone transition-colors hover:bg-ink/85"
      >
        Back to home →
      </Link>
    </section>
  );
}
