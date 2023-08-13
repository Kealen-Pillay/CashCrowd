import Navbar from "@/app/Navbar";

export default function Broadband() {
    return (
        <div className="bg-white h-screen">
            <Navbar/>
            <div className="flex w-screen flex-col h-100vh pl-5 mt-5">
                <div>
                    <h1 className="text-4xl font-bold text-black">Available Broadband Plans for 57 Wakefield Street</h1>
                </div>
                <div className="mt-5">
                    <p className="text-black font-bold text-2xl">I want it to be...</p>
                </div>
                <div className="flex flex-row items-start mt-5">
                    <div
                        className="font-bold rounded-full bg-[#FCB52C] border px-5 py-2 mr-2 hover:scale-105 border-black">
                        <button>Cost-Effective</button>
                    </div>
                    <div
                        className="font-bold rounded-full bg-[#FCB52C] border px-5 py-2 mr-2 hover:scale-105 border-black">
                        <button>Open Term</button>
                    </div>
                    <div
                        className="font-bold rounded-full bg-[#FCB52C] border px-5 py-2 mr-2 hover:scale-105 border-black">
                        <button>Unlimited Data</button>
                    </div>
                    <div
                        className="font-bold rounded-full bg-[#FCB52C] border px-5 py-2 mr-2 hover:scale-105 border-black">
                        <button>Fibre</button>
                    </div>
                    <div
                        className="font-bold rounded-full bg-[#FCB52C] border px-5 py-2 mr-2 hover:scale-105 border-black">
                        <button>Free Router</button>
                    </div>
                    <div
                        className="font-bold rounded-full bg-[#FCB52C] border px-5 py-2 mr-2 hover:scale-105 border-black">
                        <button>Bundle Power</button>
                    </div>
                    <div
                        className="font-bold rounded-full bg-[#FCB52C] border px-5 py-2 mr-2 hover:scale-105 border-black">
                        <button>Homeline</button>
                    </div>
                </div>
                <div>
                    <div className="font-bold text-black text-4xl my-10">
                        <h1>Best Price</h1>
                    </div>
                    <div className="flex flex-row justify-between text-black pr-5">
                        <div className="shadow-2xl w-72 h-72 rounded-2xl bg-[#FCB52C] pl-3 pt-5">
                            <p className="text-sm pb-2">Fibre Starter</p>
                            <h1 className="text-2xl font-bold pb-2">$85.00 / month</h1>
                            <p className="font-bold text-white text-sm pb-2">Unlimited Fibre</p>
                            <ul className="list-disc pl-5 pb-5">
                                <li>
                                    No fixed term with BYO modem
                                </li>
                                <li>
                                    Home phone connection $10/month
                                </li>
                                <li>
                                    Average peak 50 MMbps download, 10Mbps upload.
                                </li>
                                <li>
                                    No fee for standard connections.
                                </li>
                            </ul>
                        </div>
                        <div className="shadow-2xl w-72 h-72 rounded-2xl bg-blue-300 pl-3 pt-5">
                            <p className="text-sm pb-2">Fibre Starter</p>
                            <h1 className="text-2xl font-bold pb-2">$55.00 / month</h1>
                            <p className="font-bold text-white text-sm pb-2">Unlimited Fibre</p>
                            <ul className="list-disc pl-5 pb-5">
                                <li>
                                    Home phone connection $20/month
                                </li>
                                <li>
                                    Average peak 50 MMbps download, 10Mbps upload.
                                </li>
                                <li>
                                    No fee for standard connections.
                                </li>
                            </ul>
                        </div>
                        <div className="shadow-2xl w-72 h-72 rounded-2xl bg-emerald-200 pl-3 pt-5">
                            <p className="text-sm pb-2">Everyday Wireless Plus</p>
                            <h1 className="text-2xl font-bold pb-2">$45.00 / month</h1>
                            <p className="font-bold text-white text-sm pb-2">Unlimited Data</p>
                            <ul className="list-disc pl-5 pb-5">
                                <li>
                                    HD Video Streaming
                                </li>
                                <li>
                                    Add landline for $15/month
                                </li>
                                <li>
                                    Open Term
                                </li>
                            </ul>
                        </div>
                        <div className="shadow-2xl w-72 h-72 rounded-2xl bg-fuchsia-300 pl-3 pt-5">
                            <p className="text-sm pb-2">Everyday Wireless Plus</p>
                            <h1 className="text-2xl font-bold pb-2">$60.00 / month</h1>
                            <p className="font-bold text-white text-sm pb-2">Unlimited Data</p>
                            <ul className="list-disc pl-5 pb-5">
                                <li>
                                    HD Video Streaming
                                </li>
                                <li>
                                    Add landline for $10/month
                                </li>
                                <li>
                                    Open Term
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
