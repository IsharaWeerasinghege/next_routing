import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold mb-8">Welcome to Next.js</h1>

                <p>
                    Home page
                </p>
            </div>
        </main>
    );
}
