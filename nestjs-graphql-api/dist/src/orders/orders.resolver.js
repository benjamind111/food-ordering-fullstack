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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_model_1 = require("./order.model");
const orders_service_1 = require("./orders.service");
const create_order_input_1 = require("./dto/create-order.input");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const common_1 = require("@nestjs/common");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const client_1 = require("../../generated/prisma/client");
let OrdersResolver = class OrdersResolver {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    async findAll() {
        return this.ordersService.findAll();
    }
    async findMyOrders(user) {
        return this.ordersService.findByUser(user.id);
    }
    async findOne(id) {
        return this.ordersService.findOne(id);
    }
    async createOrder(input) {
        return this.ordersService.create(input);
    }
    async cancelOrder(id) {
        return this.ordersService.cancel(id);
    }
    async payOrder(id, paymentMethodId) {
        return this.ordersService.pay(id, paymentMethodId);
    }
};
exports.OrdersResolver = OrdersResolver;
__decorate([
    (0, graphql_1.Query)(() => [order_model_1.OrderModel], { name: 'orders' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => [order_model_1.OrderModel], { name: 'myOrders' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "findMyOrders", null);
__decorate([
    (0, graphql_1.Query)(() => order_model_1.OrderModel, { name: 'order', nullable: true }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_model_1.OrderModel),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_input_1.CreateOrderInput]),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "createOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_model_1.OrderModel),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(client_1.Role.ADMIN, client_1.Role.MANAGER),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "cancelOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_model_1.OrderModel),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(client_1.Role.ADMIN, client_1.Role.MANAGER),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('paymentMethodId', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "payOrder", null);
exports.OrdersResolver = OrdersResolver = __decorate([
    (0, graphql_1.Resolver)(() => order_model_1.OrderModel),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersResolver);
//# sourceMappingURL=orders.resolver.js.map