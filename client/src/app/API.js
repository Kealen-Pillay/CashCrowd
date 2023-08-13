import axios from "axios"

const baseURL = "https://cash-crowd.vercel.app"
const getPosts = async () => {
    try {
        const posts = await axios.get(baseURL + "/posts")
        return posts
    } catch (error) {
        console.log(error)
    }
}

const addPost = async (formData) => {
    console.log("clientside", formData)
    try {
        const post = {
            "username": formData.username ?? "user1234",
            "company": formData.company ?? "company cannot be displayed",
            "message": formData.message ?? "message cannot be displayed",
            "like_count": formData.like_count ?? 4
        }
        await axios.post(baseURL + "/add-post", post)
    } catch (error) {
        console.log(error)
    }
}

export {getPosts, addPost}