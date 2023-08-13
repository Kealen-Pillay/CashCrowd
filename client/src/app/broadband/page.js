import Navbar from "@/app/Navbar";

export default function Broadband() {
    return (
        <div className="bg-white h-screen">
            <Navbar/>
            <div className="flex w-screen flex-col h-screen pl-5 mt-5">
                <div>
                    <h1 className="text-4xl font-bold text-black">Available Broadband Plans for 57 Wakefield Street</h1>
                </div>
                <div className="mt-5">
                    <p className="text-black font-bold text-2xl">I want it to be...</p>
                </div>
                <div className="flex flex-row items-start mt-5">
                    <div className="font-bold rounded-full bg-[#FCB52C] border px-5 py-2 mr-2 hover:scale-105 border-black">
                       <button>Cost-Effective</button>
                    </div>
                    <div className="font-bold rounded-full bg-[#FCB52C] border px-5 py-2 mr-2 hover:scale-105 border-black">
                        <button>Open Term</button>
                    </div>
                    <div className="font-bold rounded-full bg-[#FCB52C] border px-5 py-2 mr-2 hover:scale-105 border-black">
                        <button>Unlimited Data</button>
                    </div>
                    <div className="font-bold rounded-full bg-[#FCB52C] border px-5 py-2 mr-2 hover:scale-105 border-black">
                        <button>Fibre</button>
                    </div>
                    <div className="font-bold rounded-full bg-[#FCB52C] border px-5 py-2 mr-2 hover:scale-105 border-black">
                        <button>Free Router</button>
                    </div>
                    <div className="font-bold rounded-full bg-[#FCB52C] border px-5 py-2 mr-2 hover:scale-105 border-black">
                        <button>Bundle Power</button>
                    </div>
                    <div className="font-bold rounded-full bg-[#FCB52C] border px-5 py-2 mr-2 hover:scale-105 border-black">
                        <button>Homeline</button>
                    </div>
                </div>
                <div className="font-bold text-black text-4xl my-10">
                    <h1>Best Price</h1>
                </div>
                <div className="flex flex-row justify-between">
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
