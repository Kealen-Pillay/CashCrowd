import {Request, Response} from "express";
import {IProvider} from "../../types/provider";
import Provider from "../../models/provider";

const getProviders = async (req: Request, res: Response): Promise<void> => {
    try {
        const providers: IProvider[] = await Provider.find()
        res.status(200).json({providers})
    } catch (error) {
        console.log(error)
    }
}

export {getProviders}