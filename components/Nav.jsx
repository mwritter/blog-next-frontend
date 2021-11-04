import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="flex p-11 bg-gray-100">
            <div className='logo'>Logo</div>
            <div className="ml-auto flex space-x-4">
                <Link href="/">
                    <a>HOME</a>
                </Link>
                <p>/</p>
                <Link href="/posts">
                    <a>ARTICLES</a>
                </Link>
            </div>
        </nav>
    )
}
