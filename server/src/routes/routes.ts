import {Request, Router} from "express";
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

router.post('/test', (req, res) => {
    res.send('POST request to the homepage' + req.body)
})

export default router