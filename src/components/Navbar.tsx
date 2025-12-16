import Link from "next/link";

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link href="/" className="text-lg font-bold tracking-wide text-zinc-100 transition hover:text-amber-400">
                    League Configurator
                </Link>
                <div className="flex items-center gap-8">
                    <NavLink href="/champions">Champions</NavLink>
                    <NavLink href="/items">Items</NavLink>
                    <NavLink href="/builds">Builds</NavLink>
                </div>
            </div>
        </nav>
    );
}

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
    return (
        <Link
            href={href}
            className="relative text-sm font-medium text-zinc-300 transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-amber-400 after:transition-all hover:text-white hover:after:w-full"
        >
            {children}
        </Link>
    );
}

export default Navbar;
