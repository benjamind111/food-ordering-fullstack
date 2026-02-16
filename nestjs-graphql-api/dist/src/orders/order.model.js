"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("../../generated/prisma/client");
const user_model_1 = require("../users/user.model");
(0, graphql_1.registerEnumType)(client_1.OrderStatus, {
    name: 'OrderStatus',
});
let OrderModel = class OrderModel {
};
exports.OrderModel = OrderModel;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], OrderModel.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], OrderModel.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.OrderStatus),
    __metadata("design:type", String)
], OrderModel.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], OrderModel.prototype, "total", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], OrderModel.prototype, "paymentMethodId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.UserModel, { nullable: true }),
    __metadata("design:type", user_model_1.UserModel)
], OrderModel.prototype, "user", void 0);
exports.OrderModel = OrderModel = __decorate([
    (0, graphql_1.ObjectType)()
], OrderModel);
//# sourceMappingURL=order.model.js.map