"use client"
import Navbar from "@/app/Navbar";
import {useEffect, useState} from "react";
import {addPost, getPosts} from "@/app/API";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Blog() {
    const [discussionShow, setDiscussionShow] = useState(false)
    const [company, setCompany] = useState("")
    const [message, setMessage] = useState("")
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getPosts()
            .then((posts) => {
                setReviews(posts.data.posts)
            }).then(() => console.log(reviews))
            .catch((err) => console.log(err))
    }, []);

    const displayDiscussionModal = (val) => {
        setDiscussionShow(val)
    }

    const onCompanyChange = (e) => {
        e.preventDefault()
        setCompany(e.target.value)
    }

    const onMessageChange = (e) => {
        e.preventDefault()
        setMessage(e.target.value)
    }

    const handleSubmit = () => {
        const formData = {
            username: "user123",
            company: company,
            message: message,
            like_count: 4
        }
        setCompany("")
        setMessage("")
        addPost(formData).then(() => {
            console.log("added post:" + formData)
        })
        displayDiscussionModal(false)
        getPosts()
            .then((posts) => {
                setReviews(posts.data.posts)
            }).then(() => console.log(reviews))
            .catch((err) => console.log(err))
    }

    return (
        <div className="bg-white h-100vh relative">
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
            <div className="grid grid-cols-4 mt-10 px-10">
                {reviews && (
                    reviews.map((review, index) => {
                        return (
                            <div key={index}
                                 className="bg-white border border-black px-2 py-2 rounded w-72 h-fit text-black font-bold m-2">
                                <h1>User: {review.username}</h1>
                                <p>Company: {review.company}</p>
                                <p className="font-light">Review: {review.message}</p>
                                <div className="flex flex-row mt-2">
                                    <FavoriteIcon sx={{color: "red"}}/>
                                    <p className="px-1">{review.like_count}</p>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
            {
                discussionShow ? (
                    <div
                        className="absolute flex-col rounded bg-[#FCB52C] flex justify-start w-1/2 h-1/2 bsolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="font-bold text-center text-2xl py-5 text-black w-full">New Discussion</h1>
                        <div className="flex flex-col items-center w-full h-full">
                            <div className="my-4 w-full flex justify-center">
                                <input value={company} onChange={onCompanyChange}
                                       className="pl-2 rounded h-12 w-3/5 text-black"
                                       type="text" placeholder="Company"/>
                            </div>
                            <div className="my-4 w-full flex justify-center">
                                <textarea value={message} onChange={onMessageChange}
                                          className="pl-2 rounded h-20 pt-2 w-3/5 text-black" placeholder="Message"/>
                            </div>
                            <div className="flex flex-row justify-between w-1/2 font-bold mt-4">
                                <div className="text-black border rounded-full py-3 px-8 border-black hover:bg-white">
                                    <button className="hover:scale-105"
                                            onClick={() => handleSubmit()}>Submit
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
                    <div className="hidden">
                    </div>
                )
            }

        </div>
    )
}