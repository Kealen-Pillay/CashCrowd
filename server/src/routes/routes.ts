import {Router} from "express";
import {getProviders} from "../controllers/providers/ProviderController";

const router: Router = Router()

/**
 * Broadband Provider Routes
 */

router.get("/providers", getProviders)

export default router