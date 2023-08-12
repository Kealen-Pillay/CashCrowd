import {Document} from "mongoose"

export interface IProvider extends Document {
    provider: string
    availability: string
    bandwidth_max_mbps: number
    bandwidth_min_mbps: number
    bandwidth_up_max_mbps: number
    bandwidth_up_min_mbps: number
    url: string
    wholesale_network: boolean
    technology: string
}