import Link from "next/link";

function Navbar() {
    return (
        <div className="sticky top-0 flex h-20 flex-row items-center justify-around bg-zinc-950 z-100">
            <Link href={"/champions"}>Champions</Link>
            <Link href={"/items"}>Items</Link>
            <Link href={"/builds"}>Your build</Link>
            <Link href={"/account"}>Account</Link>
        </div>
    );
}

export default Navbar;
