import Link from "next/link";

function Navbar() {
    return (
        <div className="flex h-20 flex-row justify-around items-center">
            <Link href={"/champions"}>Champions</Link>
            <Link href={"/items"}>Items</Link>
            <Link href={"/builds"}>Your build</Link>
            <Link href={"/account"}>Account</Link>
        </div>
    );
}

export default Navbar;
