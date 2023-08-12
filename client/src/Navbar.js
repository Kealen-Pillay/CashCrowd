import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <div className="flex flex-row items-center justify-between h-20 bg-amber-500">
                <div>
                    <h1 className="text-2xl font-bold font-black">CashCrowd</h1>
                </div>
                <div className="flex flex-row w-100 h-20 items-center bg-blue-600">
                    <div>
                        <Link href="/">Home</Link>
                    </div>
                    <div>
                        <Link href="/blog">Crowd</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar