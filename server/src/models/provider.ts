import {IProvider} from "../types/provider";
import {model, Schema} from "mongoose";

const providerSchema: Schema = new Schema(
    {
        provider: {
            type: String,
            required: true
        },
        availability: {
            type: String,
            required: true,
        },
        bandwidth_max_mbps: {
            type: Number,
            required: true,
        },
        bandwidth_min_mbps: {
            type: Number,
            required: true,
        },
        bandwidth_up_max_mbps: {
            type: Number,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        wholesale_network: {
            type: Boolean,
            required: true,
        },
        technology: {
            type: String,
            required: true
        }
    }
)

export default model<IProvider>("Provider", providerSchema)