"use client"
import Navbar from "@/app/Navbar";
import {useState} from "react";

export default function Blog() {
    const [discussionShow, setDiscussionShow] = useState(false)

    const displayDiscussionModal = (val) => {
        setDiscussionShow(val)
    }

    return (
        <div className="bg-white h-screen relative">
            <Navbar/>
            <div className="w-screen my-10 flex justify-center font-bold text-black">
                <h3 className="px-5 hover:cursor-pointer">Popular Discussions</h3>
                <h3 className="px-5 text-gray-400 hover:cursor-pointer">Recent</h3>
            </div>
            <div className="w-screen flex justify-center">
                <button
                    className="bg-[#FCB52C] p-3 rounded-full font-bold hover:scale-105 hover:cursor-pointer"
                    onClick={() => displayDiscussionModal(true)}>
                    Start a Discussion
                </button>
            </div>
            {
                discussionShow ? (
                    <div
                        className="absolute flex-col rounded bg-[#FCB52C] flex justify-start w-1/2 h-1/2 bsolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="font-bold text-center text-2xl py-5 text-black w-full">New Discussion</h1>
                        <div className="flex flex-col items-center w-full h-full">
                            <div className="my-4 w-full flex justify-center">
                                <input className="pl-2 rounded h-12 w-3/5" type="text" placeholder="Company"/>
                            </div>
                            <div className="my-4 w-full flex justify-center">
                                <textarea className="pl-2 rounded h-20 pt-2 w-3/5" placeholder="Message"/>
                            </div>
                            <div className="flex flex-row justify-between w-1/2 font-bold mt-4">
                                <div className="text-black border rounded-full py-3 px-8 border-black hover:bg-white">
                                    <button className="hover:scale-105"
                                            onClick={() => displayDiscussionModal(false)}>Submit
                                    </button>
                                </div>
                                <div className="text-black border rounded-full py-3 px-8 border-black hover:bg-white">
                                    <button className="hover:scale-105"
                                            onClick={() => displayDiscussionModal(false)}>Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        className="hidden absolute flex-col rounded bg-[#FCB52C] flex justify-start w-1/2 h-1/2 bsolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="font-bold text-center text-2xl py-5 text-black w-full">New Discussion</h1>
                        <div className="flex flex-col items-center w-full h-full">
                            <div className="my-4 w-full flex justify-center">
                                <input className="pl-2 rounded h-12 w-3/5" type="text" placeholder="Company"/>
                            </div>
                            <div className="my-4 w-full flex justify-center">
                                <textarea className="pl-2 rounded h-20 pt-2 w-3/5" placeholder="Message"/>
                            </div>
                            <div className="flex flex-row justify-between w-1/2 font-bold mt-4">
                                <div className="text-black border rounded-full py-3 px-8 border-black hover:bg-white">
                                    <button className="hover:scale-105 text-black border rounded-full py-3 px-8 border-black hover:bg-white"
                                            onClick={() => displayDiscussionModal(false)}>Submit
                                    </button>
                                </div>
                                <div className="text-black border rounded-full py-3 px-8 border-black hover:bg-white">
                                    <button className="hover:scale-105"
                                            onClick={() => displayDiscussionModal(false)}>Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}