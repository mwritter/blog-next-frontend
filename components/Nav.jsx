import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex p-11 bg-gray-100">
      <Link href="/">
        <div className="cursor-pointer text-2xl text-gray-600 hover:text-black">
          <span className="font-light">CoffeeBreak</span>
          <span className="font-bold">Engineer</span>
        </div>
      </Link>
      <div className="ml-auto flex space-x-4">
        {/* Not needed until we have other links */}
        {/* <Link href="/">
                    <a>HOME</a>
                </Link> */}
        {/* Not needed until the home page has more content for now just show all the post on the home page */}
        {/* <Link href="/posts">
                    <a>ARTICLES</a>
                </Link> */}
      </div>
    </nav>
  );
}
