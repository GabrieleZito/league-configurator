import Link from "next/link";

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Logo / Home */}
                <Link
                    href="/"
                    className="text-lg font-bold tracking-wide text-zinc-100 hover:text-amber-400 transition"
                >
                    League Configurator
                </Link>

                {/* Links */}
                <div className="flex items-center gap-8">
                    <NavLink href="/champions">Champions</NavLink>
                    <NavLink href="/items">Items</NavLink>
                    <NavLink href="/builds">Builds</NavLink>
                </div>
            </div>
        </nav>
    );
}

function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="
                relative text-sm font-medium text-zinc-300
                transition
                hover:text-white
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0 after:bg-amber-400
                after:transition-all
                hover:after:w-full
            "
        >
            {children}
        </Link>
    );
}

export default Navbar;
