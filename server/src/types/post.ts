import {Document} from "mongoose";

export interface IPost extends Document {
    username: string,
    company: string
    message: string,
    like_count: number
}