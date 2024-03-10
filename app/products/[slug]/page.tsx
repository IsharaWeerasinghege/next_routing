import React from 'react';
import Link from "next/link";

function Page({params}: { params: { slug: string } }) {
    return (
        <div className={"w-full items-center flex flex-col justify-center"}>
            <h1 className={"mt-3"}>
                {params.slug} Page
            </h1>

            <Link href={"/products"} className={"mt-8 border rounded-2xl px-4 py-2"}>
                Back to Products
            </Link>

        </div>
    );
}

export default Page;