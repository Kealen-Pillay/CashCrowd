"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const providerSchema = new mongoose_1.Schema({
    provider: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        required: true,
    },
    bandwidth_max_mbps: {
        type: Number,
        required: true,
    },
    bandwidth_min_mbps: {
        type: Number,
        required: true,
    },
    bandwidth_up_max_mbps: {
        type: Number,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    wholesale_network: {
        type: Boolean,
        required: true,
    },
    technology: {
        type: String,
        required: true
    }
});
exports.default = (0, mongoose_1.model)("Provider", providerSchema);
//# sourceMappingURL=provider.js.map