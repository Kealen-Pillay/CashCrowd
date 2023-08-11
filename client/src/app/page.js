import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1>CashCrowd</h1>
                <Link href="/blog">Blog</Link>
            </div>
        </main>
    )
}
