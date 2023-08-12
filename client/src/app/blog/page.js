import Navbar from "@/app/Navbar";

export default function Blog() {
    return (
        <div className="bg-white h-screen relative">
            <Navbar/>
            <div className="w-screen my-10 flex justify-center font-bold text-black">
                <h3 className="px-5 hover:cursor-pointer">Popular Discussions</h3>
                <h3 className="px-5 text-gray-400 hover:cursor-pointer">Recent</h3>
            </div>
            <div className="w-screen flex justify-center">
                <button
                    className="bg-[#FCB52C] p-3 rounded-full font-bold hover:scale-105 hover:cursor-pointer">Start a
                    Discussion
                </button>
            </div>
            <div
                className="absolute flex-col items-center rounded bg-[#FCB52C] flex justify-start w-1/2 h-1/2 bsolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="font-bold text-2xl py-5 text-black">New Discussion</h1>
                <div className="flex flex-col">
                    <div className="my-4">
                        <input className="pl-2 rounded h-12 w-100" type="text" placeholder="Company"/>
                    </div>
                    <div className="my-4">
                        <textarea className="pl-2 rounded h-20" placeholder="Message"/>
                    </div>
                </div>
            </div>
        </div>
    )
}