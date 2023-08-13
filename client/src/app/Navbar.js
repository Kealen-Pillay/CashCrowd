import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row items-center justify-between bg-white h-20">
        <div className="w-4/5 text-black font-bold text-4xl pl-5">
          <h1>CashCrowd</h1>
        </div>
        <div className="w-1/5 flex flex-row justify-between font-bold pr-2">
          <div className="text-black pr-2">
            <Link href="/" className="hover:text-[#FCB52C]">
              Home
            </Link>
          </div>
          <div className="text-black pr-2">
            <Link href="/blog" className="hover:text-[#FCB52C]">
              Crowd
            </Link>
          </div>
          <div className="text-black pr-2">
            <Link href="/broadband" className="hover:text-[#FCB52C]">
              Broadband
            </Link>
          </div>
          <div className="user_image">
            <img
              src="image/avatar1.svg"
              alt="user"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="user-dropdown whitespace-normal">
            <span className="username ">John Doe</span>
            {/* Add drop down feature later */}
          </div>
        </div>
      </div>
    </>
  )
}
