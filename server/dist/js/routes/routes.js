"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProviderController_1 = require("../controllers/providers/ProviderController");
const router = (0, express_1.Router)();
/**
 * Broadband Provider Routes
 */
router.get("/providers", ProviderController_1.getProviders);
exports.default = router;
//# sourceMappingURL=routes.js.map