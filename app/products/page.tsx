import React from 'react';
import Link from "next/link";

function Page() {
    return (
        <div className={"w-full flex justify-center items-center flex-col"}>
            <div className=" mt-3">Products Page</div>

            <nav>
                <div className="flex font-semibold mt-8 space-x-4">
                    <Link href="products/products-1">Products 01</Link>
                    <Link href="products/products-2">Products 02</Link>
                    <Link href="products/products-3">Products 03</Link>
                </div>
            </nav>
        </div>
    );
}

export default Page;