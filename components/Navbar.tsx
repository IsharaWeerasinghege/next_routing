import React from 'react';
import Link from "next/link";

function Navbar() {
    return (
        <div className="border-b w-full">
        <div className="container mx-auto flex py-2 items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold">Next Routing</h1>
            </div>
            <nav>
                <div className="flex font-semibold space-x-4">
                    <Link href={"/"}>
                        Home
                    </Link>
                    <Link href={"/products"}>
                        Products
                    </Link>
                    <Link href={"/about"}>
                        About
                    </Link>
                </div>
            </nav>
        </div>
        </div>
    );
}

export default Navbar;