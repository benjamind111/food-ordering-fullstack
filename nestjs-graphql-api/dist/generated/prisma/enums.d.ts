export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly MANAGER: "MANAGER";
    readonly MEMBER: "MEMBER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const Country: {
    readonly INDIA: "INDIA";
    readonly USA: "USA";
};
export type Country = (typeof Country)[keyof typeof Country];
export declare const OrderStatus: {
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly CANCELLED: "CANCELLED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
