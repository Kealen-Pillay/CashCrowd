import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="flex flex-row items-center justify-between bg-white h-20">
                <div className="w-4/5 text-black font-bold text-4xl pl-5">
                    <h1>CashCrowd</h1>
                </div>
                <div className="w-1/5 flex flex-row justify-between font-bold pr-5">
                    <div className="text-black">
                        <Link href="/" className="hover:text-[#FCB52C]">Home</Link>
                    </div>
                    <div className="text-black">
                        <Link href="/blog" className="hover:text-[#FCB52C]">Crowd</Link>
                    </div>
                    <div className="text-black">
                        <Link href="/broadband" className="hover:text-[#FCB52C]">Broadband</Link>
                    </div>
                </div>
            </div>
        </>
    )
}