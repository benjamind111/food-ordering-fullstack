import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type OrderModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderPayload>;
export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type OrderAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    total: number | null;
    paymentMethodId: number | null;
};
export type OrderSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    total: number | null;
    paymentMethodId: number | null;
};
export type OrderMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    status: $Enums.OrderStatus | null;
    total: number | null;
    paymentMethodId: number | null;
};
export type OrderMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    status: $Enums.OrderStatus | null;
    total: number | null;
    paymentMethodId: number | null;
};
export type OrderCountAggregateOutputType = {
    id: number;
    userId: number;
    status: number;
    total: number;
    paymentMethodId: number;
    _all: number;
};
export type OrderAvgAggregateInputType = {
    id?: true;
    userId?: true;
    total?: true;
    paymentMethodId?: true;
};
export type OrderSumAggregateInputType = {
    id?: true;
    userId?: true;
    total?: true;
    paymentMethodId?: true;
};
export type OrderMinAggregateInputType = {
    id?: true;
    userId?: true;
    status?: true;
    total?: true;
    paymentMethodId?: true;
};
export type OrderMaxAggregateInputType = {
    id?: true;
    userId?: true;
    status?: true;
    total?: true;
    paymentMethodId?: true;
};
export type OrderCountAggregateInputType = {
    id?: true;
    userId?: true;
    status?: true;
    total?: true;
    paymentMethodId?: true;
    _all?: true;
};
export type OrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderCountAggregateInputType;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder[P]> : Prisma.GetScalarType<T[P], AggregateOrder[P]>;
};
export type OrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithAggregationInput | Prisma.OrderOrderByWithAggregationInput[];
    by: Prisma.OrderScalarFieldEnum[] | Prisma.OrderScalarFieldEnum;
    having?: Prisma.OrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type OrderGroupByOutputType = {
    id: number;
    userId: number;
    status: $Enums.OrderStatus;
    total: number;
    paymentMethodId: number | null;
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]>;
}>>;
export type OrderWhereInput = {
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    id?: Prisma.IntFilter<"Order"> | number;
    userId?: Prisma.IntFilter<"Order"> | number;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    total?: Prisma.FloatFilter<"Order"> | number;
    paymentMethodId?: Prisma.IntNullableFilter<"Order"> | number | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    paymentMethod?: Prisma.XOR<Prisma.PaymentMethodNullableScalarRelationFilter, Prisma.PaymentMethodWhereInput> | null;
};
export type OrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    paymentMethodId?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    paymentMethod?: Prisma.PaymentMethodOrderByWithRelationInput;
};
export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    userId?: Prisma.IntFilter<"Order"> | number;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    total?: Prisma.FloatFilter<"Order"> | number;
    paymentMethodId?: Prisma.IntNullableFilter<"Order"> | number | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    paymentMethod?: Prisma.XOR<Prisma.PaymentMethodNullableScalarRelationFilter, Prisma.PaymentMethodWhereInput> | null;
}, "id">;
export type OrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    paymentMethodId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.OrderCountOrderByAggregateInput;
    _avg?: Prisma.OrderAvgOrderByAggregateInput;
    _max?: Prisma.OrderMaxOrderByAggregateInput;
    _min?: Prisma.OrderMinOrderByAggregateInput;
    _sum?: Prisma.OrderSumOrderByAggregateInput;
};
export type OrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Order"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"Order"> | number;
    status?: Prisma.EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus;
    total?: Prisma.FloatWithAggregatesFilter<"Order"> | number;
    paymentMethodId?: Prisma.IntNullableWithAggregatesFilter<"Order"> | number | null;
};
export type OrderCreateInput = {
    status?: $Enums.OrderStatus;
    total: number;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    paymentMethod?: Prisma.PaymentMethodCreateNestedOneWithoutOrdersInput;
};
export type OrderUncheckedCreateInput = {
    id?: number;
    userId: number;
    status?: $Enums.OrderStatus;
    total: number;
    paymentMethodId?: number | null;
};
export type OrderUpdateInput = {
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    paymentMethod?: Prisma.PaymentMethodUpdateOneWithoutOrdersNestedInput;
};
export type OrderUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    paymentMethodId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type OrderCreateManyInput = {
    id?: number;
    userId: number;
    status?: $Enums.OrderStatus;
    total: number;
    paymentMethodId?: number | null;
};
export type OrderUpdateManyMutationInput = {
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type OrderUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    paymentMethodId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type OrderListRelationFilter = {
    every?: Prisma.OrderWhereInput;
    some?: Prisma.OrderWhereInput;
    none?: Prisma.OrderWhereInput;
};
export type OrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    paymentMethodId?: Prisma.SortOrder;
};
export type OrderAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    paymentMethodId?: Prisma.SortOrder;
};
export type OrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    paymentMethodId?: Prisma.SortOrder;
};
export type OrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    paymentMethodId?: Prisma.SortOrder;
};
export type OrderSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    paymentMethodId?: Prisma.SortOrder;
};
export type OrderCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutUserInput | Prisma.OrderUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutUserInput | Prisma.OrderUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutUserInput | Prisma.OrderUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutUserInput | Prisma.OrderUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutUserInput | Prisma.OrderUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutUserInput | Prisma.OrderUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderCreateNestedManyWithoutPaymentMethodInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPaymentMethodInput, Prisma.OrderUncheckedCreateWithoutPaymentMethodInput> | Prisma.OrderCreateWithoutPaymentMethodInput[] | Prisma.OrderUncheckedCreateWithoutPaymentMethodInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPaymentMethodInput | Prisma.OrderCreateOrConnectWithoutPaymentMethodInput[];
    createMany?: Prisma.OrderCreateManyPaymentMethodInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutPaymentMethodInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPaymentMethodInput, Prisma.OrderUncheckedCreateWithoutPaymentMethodInput> | Prisma.OrderCreateWithoutPaymentMethodInput[] | Prisma.OrderUncheckedCreateWithoutPaymentMethodInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPaymentMethodInput | Prisma.OrderCreateOrConnectWithoutPaymentMethodInput[];
    createMany?: Prisma.OrderCreateManyPaymentMethodInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutPaymentMethodNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPaymentMethodInput, Prisma.OrderUncheckedCreateWithoutPaymentMethodInput> | Prisma.OrderCreateWithoutPaymentMethodInput[] | Prisma.OrderUncheckedCreateWithoutPaymentMethodInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPaymentMethodInput | Prisma.OrderCreateOrConnectWithoutPaymentMethodInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutPaymentMethodInput | Prisma.OrderUpsertWithWhereUniqueWithoutPaymentMethodInput[];
    createMany?: Prisma.OrderCreateManyPaymentMethodInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutPaymentMethodInput | Prisma.OrderUpdateWithWhereUniqueWithoutPaymentMethodInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutPaymentMethodInput | Prisma.OrderUpdateManyWithWhereWithoutPaymentMethodInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutPaymentMethodNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPaymentMethodInput, Prisma.OrderUncheckedCreateWithoutPaymentMethodInput> | Prisma.OrderCreateWithoutPaymentMethodInput[] | Prisma.OrderUncheckedCreateWithoutPaymentMethodInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPaymentMethodInput | Prisma.OrderCreateOrConnectWithoutPaymentMethodInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutPaymentMethodInput | Prisma.OrderUpsertWithWhereUniqueWithoutPaymentMethodInput[];
    createMany?: Prisma.OrderCreateManyPaymentMethodInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutPaymentMethodInput | Prisma.OrderUpdateWithWhereUniqueWithoutPaymentMethodInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutPaymentMethodInput | Prisma.OrderUpdateManyWithWhereWithoutPaymentMethodInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type OrderCreateWithoutUserInput = {
    status?: $Enums.OrderStatus;
    total: number;
    paymentMethod?: Prisma.PaymentMethodCreateNestedOneWithoutOrdersInput;
};
export type OrderUncheckedCreateWithoutUserInput = {
    id?: number;
    status?: $Enums.OrderStatus;
    total: number;
    paymentMethodId?: number | null;
};
export type OrderCreateOrConnectWithoutUserInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput>;
};
export type OrderCreateManyUserInputEnvelope = {
    data: Prisma.OrderCreateManyUserInput | Prisma.OrderCreateManyUserInput[];
};
export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutUserInput, Prisma.OrderUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput>;
};
export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutUserInput, Prisma.OrderUncheckedUpdateWithoutUserInput>;
};
export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutUserInput>;
};
export type OrderScalarWhereInput = {
    AND?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    OR?: Prisma.OrderScalarWhereInput[];
    NOT?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    id?: Prisma.IntFilter<"Order"> | number;
    userId?: Prisma.IntFilter<"Order"> | number;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    total?: Prisma.FloatFilter<"Order"> | number;
    paymentMethodId?: Prisma.IntNullableFilter<"Order"> | number | null;
};
export type OrderCreateWithoutPaymentMethodInput = {
    status?: $Enums.OrderStatus;
    total: number;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
};
export type OrderUncheckedCreateWithoutPaymentMethodInput = {
    id?: number;
    userId: number;
    status?: $Enums.OrderStatus;
    total: number;
};
export type OrderCreateOrConnectWithoutPaymentMethodInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutPaymentMethodInput, Prisma.OrderUncheckedCreateWithoutPaymentMethodInput>;
};
export type OrderCreateManyPaymentMethodInputEnvelope = {
    data: Prisma.OrderCreateManyPaymentMethodInput | Prisma.OrderCreateManyPaymentMethodInput[];
};
export type OrderUpsertWithWhereUniqueWithoutPaymentMethodInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutPaymentMethodInput, Prisma.OrderUncheckedUpdateWithoutPaymentMethodInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutPaymentMethodInput, Prisma.OrderUncheckedCreateWithoutPaymentMethodInput>;
};
export type OrderUpdateWithWhereUniqueWithoutPaymentMethodInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutPaymentMethodInput, Prisma.OrderUncheckedUpdateWithoutPaymentMethodInput>;
};
export type OrderUpdateManyWithWhereWithoutPaymentMethodInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutPaymentMethodInput>;
};
export type OrderCreateManyUserInput = {
    id?: number;
    status?: $Enums.OrderStatus;
    total: number;
    paymentMethodId?: number | null;
};
export type OrderUpdateWithoutUserInput = {
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    paymentMethod?: Prisma.PaymentMethodUpdateOneWithoutOrdersNestedInput;
};
export type OrderUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    paymentMethodId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    paymentMethodId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type OrderCreateManyPaymentMethodInput = {
    id?: number;
    userId: number;
    status?: $Enums.OrderStatus;
    total: number;
};
export type OrderUpdateWithoutPaymentMethodInput = {
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
};
export type OrderUncheckedUpdateWithoutPaymentMethodInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type OrderUncheckedUpdateManyWithoutPaymentMethodInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type OrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    status?: boolean;
    total?: boolean;
    paymentMethodId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    paymentMethod?: boolean | Prisma.Order$paymentMethodArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    status?: boolean;
    total?: boolean;
    paymentMethodId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    paymentMethod?: boolean | Prisma.Order$paymentMethodArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    status?: boolean;
    total?: boolean;
    paymentMethodId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    paymentMethod?: boolean | Prisma.Order$paymentMethodArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectScalar = {
    id?: boolean;
    userId?: boolean;
    status?: boolean;
    total?: boolean;
    paymentMethodId?: boolean;
};
export type OrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "status" | "total" | "paymentMethodId", ExtArgs["result"]["order"]>;
export type OrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    paymentMethod?: boolean | Prisma.Order$paymentMethodArgs<ExtArgs>;
};
export type OrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    paymentMethod?: boolean | Prisma.Order$paymentMethodArgs<ExtArgs>;
};
export type OrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    paymentMethod?: boolean | Prisma.Order$paymentMethodArgs<ExtArgs>;
};
export type $OrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Order";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        paymentMethod: Prisma.$PaymentMethodPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        status: $Enums.OrderStatus;
        total: number;
        paymentMethodId: number | null;
    }, ExtArgs["result"]["order"]>;
    composites: {};
};
export type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderPayload, S>;
export type OrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderCountAggregateInputType | true;
};
export interface OrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Order'];
        meta: {
            name: 'Order';
        };
    };
    findUnique<T extends OrderFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderFindManyArgs>(args?: Prisma.SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderCreateArgs>(args: Prisma.SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderDeleteArgs>(args: Prisma.SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderUpdateArgs>(args: Prisma.SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderUpsertArgs>(args: Prisma.SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderCountArgs>(args?: Prisma.Subset<T, OrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderCountAggregateOutputType> : number>;
    aggregate<T extends OrderAggregateArgs>(args: Prisma.Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>;
    groupBy<T extends OrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderFieldRefs;
}
export interface Prisma__OrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    paymentMethod<T extends Prisma.Order$paymentMethodArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$paymentMethodArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderFieldRefs {
    readonly id: Prisma.FieldRef<"Order", 'Int'>;
    readonly userId: Prisma.FieldRef<"Order", 'Int'>;
    readonly status: Prisma.FieldRef<"Order", 'OrderStatus'>;
    readonly total: Prisma.FieldRef<"Order", 'Float'>;
    readonly paymentMethodId: Prisma.FieldRef<"Order", 'Int'>;
}
export type OrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
};
export type OrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
};
export type OrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    include?: Prisma.OrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type OrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
    include?: Prisma.OrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
};
export type OrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type Order$paymentMethodArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where?: Prisma.PaymentMethodWhereInput;
};
export type OrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
};
export {};
