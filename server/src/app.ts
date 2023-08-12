import cors from "cors";
import express, {Express, Request, Response} from "express";
import router from "../src/routes/routes";
import mongoose, {ConnectOptions} from "mongoose";

const app: Express = express();
const PORT: string | number = process.env.PORT || 5000;

app.use(cors());
app.use(router);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cashcrowd.rd9wvq4.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const options = {
    useNewURLParser: true,
    useUnifiedTopology: true,
} as ConnectOptions;

mongoose
    .connect(uri, options)
    .then(() => {
        app.get("/", (req: Request, res: Response) => {
            res.send(`API RUNNING`);
        });
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        throw error;
    });