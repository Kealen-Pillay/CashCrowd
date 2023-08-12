"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
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
});
exports.default = (0, mongoose_1.model)("Post", postSchema);
//# sourceMappingURL=post.js.map