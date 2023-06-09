"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTag = exports.listByPrices = exports.listByCategory = exports.listByTag = exports.listById = exports.updateProduct = exports.listProducts = exports.deleteProduct = exports.createProduct = void 0;
const create_product_1 = __importDefault(require("./create-product"));
exports.createProduct = create_product_1.default;
const delete_product_1 = __importDefault(require("./delete-product"));
exports.deleteProduct = delete_product_1.default;
const list_all_product_1 = __importDefault(require("./list-all-product"));
exports.listProducts = list_all_product_1.default;
const update_product_1 = __importDefault(require("./update-product"));
exports.updateProduct = update_product_1.default;
const list_by_id_product_1 = __importDefault(require("./filters/list-by-id-product"));
exports.listById = list_by_id_product_1.default;
const list_by_tag_products_1 = __importDefault(require("./filters/list-by-tag-products"));
exports.listByTag = list_by_tag_products_1.default;
const list_by_category_product_1 = __importDefault(require("./filters/list-by-category-product"));
exports.listByCategory = list_by_category_product_1.default;
const list_by_prices_product_1 = __importDefault(require("./filters/list-by-prices-product"));
exports.listByPrices = list_by_prices_product_1.default;
const add_tag_product_1 = __importDefault(require("./add-tag-product"));
exports.addTag = add_tag_product_1.default;
