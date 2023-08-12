"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPost = exports.getPosts = void 0;
const post_1 = __importDefault(require("../../models/post"));
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield post_1.default.find();
        res.status(200).json({ posts });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getPosts = getPosts;
const addPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        const body = req.body;
        const post = new post_1.default({
            "username": (_a = body.username) !== null && _a !== void 0 ? _a : "user123",
            "company": (_b = body.company) !== null && _b !== void 0 ? _b : "company",
            "message": (_c = body.message) !== null && _c !== void 0 ? _c : "message",
            "like_count": (_d = body.like_count) !== null && _d !== void 0 ? _d : 0
        });
        const newPost = yield post.save();
        res.status(201).json({
            message: "Post Submitted",
            post: newPost
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.addPost = addPost;
//# sourceMappingURL=PostController.js.map