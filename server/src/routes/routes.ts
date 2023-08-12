import {Router} from "express";
import {getProviders} from "../controllers/providers/ProviderController";
import {addPost, getPosts} from "../controllers/posts/PostController";

const router: Router = Router()

/**
 * Broadband Provider Routes
 */

router.get("/providers", getProviders)

/**
 * Post Routes
 */

router.get("/posts", getPosts)

router.post("/add-post", addPost)

export default router