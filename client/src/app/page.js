import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 class="font-bold drop-shadow-2xl text-7xl absolute left-0 h-10 w-16">
          CashCrowd
        </h1>
        <Link
          href="/blog"
          class="font-serif Georgia hover:font-bold text-2xl text-left"
        >
          Blog
        </Link>
        <h1>Compare NZ Broadbands</h1>
        <p>Helping Kiwis to Find the best price speed, quality, and service</p>
      </div>
    </main>
  )
}
