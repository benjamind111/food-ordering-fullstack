"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.SortOrder = exports.OrderScalarFieldEnum = exports.PaymentMethodScalarFieldEnum = exports.RestaurantScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = require("@prisma/client/runtime/index-browser");
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Restaurant: 'Restaurant',
    PaymentMethod: 'PaymentMethod',
    Order: 'Order'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    country: 'country'
};
exports.RestaurantScalarFieldEnum = {
    id: 'id',
    name: 'name',
    country: 'country',
    menuItems: 'menuItems'
};
exports.PaymentMethodScalarFieldEnum = {
    id: 'id',
    name: 'name',
    isActive: 'isActive'
};
exports.OrderScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    status: 'status',
    total: 'total',
    paymentMethodId: 'paymentMethodId'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map