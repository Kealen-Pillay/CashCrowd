"use client"
import Navbar from "@/app/Navbar";
import {useEffect, useState} from "react";
import {addPost, getPosts} from "@/app/API";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Blog() {
    const [discussionShow, setDiscussionShow] = useState(false)
    const [company, setCompany] = useState("")
    const [message, setMessage] = useState("")
    const [reviews, setReviews] = useState([])
    const [newPost, setNewPost] = useState(false)
    const [latestPost, setLatestPost] = useState({
        username: "user1234",
        company: "",
        message: "",
        like_count: 0
    })

    useEffect(() => {
        showNewPost(false)
        getPosts()
            .then((posts) => {
                setReviews(posts.data.posts)
            })
            .catch((err) => console.log(err))
    }, []);

    const displayDiscussionModal = (val) => {
        setDiscussionShow(val)
        console.log(discussionShow)
    }

    const showNewPost = (val) => {
        setNewPost(val)
        console.log(newPost)
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
            like_count: Math.round(Math.random() * (10) + 1)
        }
        setLatestPost(formData)
        setCompany("")
        setMessage("")
        addPost(formData).then(() => {
            console.log("added post:" + formData)
        }).then(() => showNewPost(true)).then(() => toast.success("Post Added!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        }))
        displayDiscussionModal(false)
        getPosts()
            .then((posts) => {
                setReviews(posts.data.posts)
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <div className="bg-white h-100vh relative">
                <Navbar/>
                <div className="w-screen my-10 flex justify-center font-bold text-black">
                    <h3 className="px-5 hover:cursor-pointer">Popular Discussions</h3>
                    <h3 className="px-5 text-gray-400 hover:cursor-pointer">Recent</h3>
                </div>
                <div className="w-screen flex justify-center">
                    <button
                        className="bg-[#FCB52C] p-3 rounded-full font-bold hover:scale-105 hover:cursor-pointer mr-10"
                        onClick={() => displayDiscussionModal(true)}>
                        Start a Discussion
                    </button>
                </div>
                <div className="w-screen">
                    {
                        newPost ? (
                            <>
                                <h1 className="font-bold text-black text-2xl ml-10">Latest Post</h1>
                                <div
                                    className="ml-10 bg-white border border-black px-2 py-2 rounded w-72 h-fit text-black font-bold m-2">
                                    <h1 className="py-2">User: User1234</h1>
                                    <div className="flex flex-row py-2">
                                        <span className="font-bold">Company:</span>
                                        <span className="font-light pl-1">{latestPost.company}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>Review:</span>
                                        <p className="font-light">{latestPost.message}</p>
                                    </div>
                                    <div className="flex flex-row mt-2">
                                        <FavoriteIcon sx={{color: "red"}}/>
                                        <p className="px-1">{latestPost.like_count}</p>
                                    </div>
                                </div>
                            </>

                        ) : (<div>

                        </div>)
                    }
                </div>
                <h1 className="font-bold text-black text-2xl ml-12 mt-4">All Posts</h1>
                <div className="grid grid-cols-4 mt-6 px-10 relative h-100vh">
                    {reviews && (
                        reviews.map((review, index) => {
                            return (
                                <div key={index}
                                     className="bg-white border border-black px-2 py-2 rounded w-72 h-fit text-black font-bold m-2">
                                    <h1 className="py-2">User: {review.username}</h1>
                                    <div className="flex flex-row py-2">
                                        <span className="font-bold">Company:</span>
                                        <span className="font-light pl-1">{review.company}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>Review:</span>
                                        <p className="font-light">{review.message}</p>
                                    </div>
                                    <div className="flex flex-row mt-2">
                                        <FavoriteIcon sx={{color: "red"}}/>
                                        <p className="px-1">{review.like_count}</p>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
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
                                <div
                                    className="text-black border rounded-full py-3 px-8 border-black hover:bg-white">
                                    <button className="hover:scale-105"
                                            onClick={() => handleSubmit()}>Submit
                                    </button>
                                </div>
                                <div
                                    className="text-black border rounded-full py-3 px-8 border-black hover:bg-white">
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
        </>
    )
}