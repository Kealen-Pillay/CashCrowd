import {Request, Response} from "express";
import {IPost} from "../../types/post";
import Post from "../../models/post";

const getPosts = async (req: Request, res: Response): Promise<void> => {
    try {
        const posts: IPost[] = await Post.find()
        res.status(200).json({posts})
    } catch (error) {
        console.log(error)
    }
}

const addPost = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IPost, "username" | "company" | "message" | "like_count">
        const post: IPost = new Post({
            "username": body.username ?? "user123",
            "company": body.company ?? "company",
            "message": body.message ?? "message",
            "like_count": body.like_count ?? 0
        })

        const newPost: IPost = await post.save()
        res.status(201).json({
            message: "Post Submitted",
            post: newPost
        })
    } catch (error) {
        console.log(error)
    }
}

export {getPosts, addPost}