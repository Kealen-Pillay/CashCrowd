"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(routes_1.default);
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cashcrowd.rd9wvq4.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const options = {
    useNewURLParser: true,
    useUnifiedTopology: true,
};
mongoose_1.default
    .connect(uri, options)
    .then(() => {
    app.get("/", (req, res) => {
        res.send(`API RUNNING`);
    });
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    throw error;
});
//# sourceMappingURL=app.js.map