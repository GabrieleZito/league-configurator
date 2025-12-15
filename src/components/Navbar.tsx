import Link from "next/link";

function Navbar() {
    return (
        <div className="sticky top-0 z-100 flex h-20 flex-row items-center justify-around bg-zinc-950">
            <Link href={"/"}>Home</Link>
            <Link href={"/champions"}>Champions</Link>
            <Link href={"/items"}>Items</Link>
            <Link href={"/builds"}>Your build</Link>
        </div>
    );
}

export default Navbar;
