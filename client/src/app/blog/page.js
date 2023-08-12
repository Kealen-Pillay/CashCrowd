import Navbar from "@/app/Navbar";

export default function Blog() {
    return (
        <div className="bg-white h-screen">
            <Navbar/>
            <div className="w-screen my-10 flex justify-center font-bold text-black">
                <h3 className="px-5">Popular Discussions</h3>
                <h3 className="px-5 text-gray-400">Recent</h3>
            </div>
            <div className="w-screen flex justify-center">
                <button className="bg-[#FCB52C] p-3 rounded-full font-bold hover:scale-105">Start a Discussion</button>
            </div>
        </div>
    )
}