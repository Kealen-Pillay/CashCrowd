import {model, Schema} from "mongoose";
import {IPost} from "../types/post";

const postSchema: Schema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        like_count: {
            type: Number,
            required: false
        }
    }
)

export default model<IPost>("Post", postSchema)