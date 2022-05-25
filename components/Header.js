import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex justify-between items-center h-16">
            <nav className="flex gap-4">
                <Link href="/">
                    <span className="cursor-pointer hover:underline decoration-wavy">Home</span>
                </Link>
                <Link href="/blog">
                    <span className="cursor-pointer hover:underline decoration-wavy">Blog</span>
                </Link>
            </nav>
        </header>
    );
}
