import Link from "next/link";

export const metadata = {
  title: 'Home',
  description: 'Home page',
}

export default function Page() {
  return (
    <main>
      <div>testing</div>
      <Link href="/about">About</Link>
      <Link style={{display:'block'}} href="/blog/1">BLOG</Link>

    </main>
  );
}
