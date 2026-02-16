import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PaymentMethodModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentMethodPayload>;
export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null;
    _avg: PaymentMethodAvgAggregateOutputType | null;
    _sum: PaymentMethodSumAggregateOutputType | null;
    _min: PaymentMethodMinAggregateOutputType | null;
    _max: PaymentMethodMaxAggregateOutputType | null;
};
export type PaymentMethodAvgAggregateOutputType = {
    id: number | null;
};
export type PaymentMethodSumAggregateOutputType = {
    id: number | null;
};
export type PaymentMethodMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    isActive: boolean | null;
};
export type PaymentMethodMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    isActive: boolean | null;
};
export type PaymentMethodCountAggregateOutputType = {
    id: number;
    name: number;
    isActive: number;
    _all: number;
};
export type PaymentMethodAvgAggregateInputType = {
    id?: true;
};
export type PaymentMethodSumAggregateInputType = {
    id?: true;
};
export type PaymentMethodMinAggregateInputType = {
    id?: true;
    name?: true;
    isActive?: true;
};
export type PaymentMethodMaxAggregateInputType = {
    id?: true;
    name?: true;
    isActive?: true;
};
export type PaymentMethodCountAggregateInputType = {
    id?: true;
    name?: true;
    isActive?: true;
    _all?: true;
};
export type PaymentMethodAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentMethodWhereInput;
    orderBy?: Prisma.PaymentMethodOrderByWithRelationInput | Prisma.PaymentMethodOrderByWithRelationInput[];
    cursor?: Prisma.PaymentMethodWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentMethodCountAggregateInputType;
    _avg?: PaymentMethodAvgAggregateInputType;
    _sum?: PaymentMethodSumAggregateInputType;
    _min?: PaymentMethodMinAggregateInputType;
    _max?: PaymentMethodMaxAggregateInputType;
};
export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
    [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaymentMethod[P]> : Prisma.GetScalarType<T[P], AggregatePaymentMethod[P]>;
};
export type PaymentMethodGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentMethodWhereInput;
    orderBy?: Prisma.PaymentMethodOrderByWithAggregationInput | Prisma.PaymentMethodOrderByWithAggregationInput[];
    by: Prisma.PaymentMethodScalarFieldEnum[] | Prisma.PaymentMethodScalarFieldEnum;
    having?: Prisma.PaymentMethodScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentMethodCountAggregateInputType | true;
    _avg?: PaymentMethodAvgAggregateInputType;
    _sum?: PaymentMethodSumAggregateInputType;
    _min?: PaymentMethodMinAggregateInputType;
    _max?: PaymentMethodMaxAggregateInputType;
};
export type PaymentMethodGroupByOutputType = {
    id: number;
    name: string;
    isActive: boolean;
    _count: PaymentMethodCountAggregateOutputType | null;
    _avg: PaymentMethodAvgAggregateOutputType | null;
    _sum: PaymentMethodSumAggregateOutputType | null;
    _min: PaymentMethodMinAggregateOutputType | null;
    _max: PaymentMethodMaxAggregateOutputType | null;
};
type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentMethodGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentMethodGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>;
}>>;
export type PaymentMethodWhereInput = {
    AND?: Prisma.PaymentMethodWhereInput | Prisma.PaymentMethodWhereInput[];
    OR?: Prisma.PaymentMethodWhereInput[];
    NOT?: Prisma.PaymentMethodWhereInput | Prisma.PaymentMethodWhereInput[];
    id?: Prisma.IntFilter<"PaymentMethod"> | number;
    name?: Prisma.StringFilter<"PaymentMethod"> | string;
    isActive?: Prisma.BoolFilter<"PaymentMethod"> | boolean;
    orders?: Prisma.OrderListRelationFilter;
};
export type PaymentMethodOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
};
export type PaymentMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.PaymentMethodWhereInput | Prisma.PaymentMethodWhereInput[];
    OR?: Prisma.PaymentMethodWhereInput[];
    NOT?: Prisma.PaymentMethodWhereInput | Prisma.PaymentMethodWhereInput[];
    isActive?: Prisma.BoolFilter<"PaymentMethod"> | boolean;
    orders?: Prisma.OrderListRelationFilter;
}, "id" | "name">;
export type PaymentMethodOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    _count?: Prisma.PaymentMethodCountOrderByAggregateInput;
    _avg?: Prisma.PaymentMethodAvgOrderByAggregateInput;
    _max?: Prisma.PaymentMethodMaxOrderByAggregateInput;
    _min?: Prisma.PaymentMethodMinOrderByAggregateInput;
    _sum?: Prisma.PaymentMethodSumOrderByAggregateInput;
};
export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentMethodScalarWhereWithAggregatesInput | Prisma.PaymentMethodScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentMethodScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentMethodScalarWhereWithAggregatesInput | Prisma.PaymentMethodScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"PaymentMethod"> | number;
    name?: Prisma.StringWithAggregatesFilter<"PaymentMethod"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"PaymentMethod"> | boolean;
};
export type PaymentMethodCreateInput = {
    name: string;
    isActive?: boolean;
    orders?: Prisma.OrderCreateNestedManyWithoutPaymentMethodInput;
};
export type PaymentMethodUncheckedCreateInput = {
    id?: number;
    name: string;
    isActive?: boolean;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutPaymentMethodInput;
};
export type PaymentMethodUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    orders?: Prisma.OrderUpdateManyWithoutPaymentMethodNestedInput;
};
export type PaymentMethodUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutPaymentMethodNestedInput;
};
export type PaymentMethodCreateManyInput = {
    id?: number;
    name: string;
    isActive?: boolean;
};
export type PaymentMethodUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PaymentMethodUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PaymentMethodCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type PaymentMethodAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PaymentMethodMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type PaymentMethodMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type PaymentMethodSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PaymentMethodNullableScalarRelationFilter = {
    is?: Prisma.PaymentMethodWhereInput | null;
    isNot?: Prisma.PaymentMethodWhereInput | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type PaymentMethodCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.PaymentMethodCreateWithoutOrdersInput, Prisma.PaymentMethodUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.PaymentMethodCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.PaymentMethodWhereUniqueInput;
};
export type PaymentMethodUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentMethodCreateWithoutOrdersInput, Prisma.PaymentMethodUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.PaymentMethodCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.PaymentMethodUpsertWithoutOrdersInput;
    disconnect?: Prisma.PaymentMethodWhereInput | boolean;
    delete?: Prisma.PaymentMethodWhereInput | boolean;
    connect?: Prisma.PaymentMethodWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaymentMethodUpdateToOneWithWhereWithoutOrdersInput, Prisma.PaymentMethodUpdateWithoutOrdersInput>, Prisma.PaymentMethodUncheckedUpdateWithoutOrdersInput>;
};
export type PaymentMethodCreateWithoutOrdersInput = {
    name: string;
    isActive?: boolean;
};
export type PaymentMethodUncheckedCreateWithoutOrdersInput = {
    id?: number;
    name: string;
    isActive?: boolean;
};
export type PaymentMethodCreateOrConnectWithoutOrdersInput = {
    where: Prisma.PaymentMethodWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentMethodCreateWithoutOrdersInput, Prisma.PaymentMethodUncheckedCreateWithoutOrdersInput>;
};
export type PaymentMethodUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.PaymentMethodUpdateWithoutOrdersInput, Prisma.PaymentMethodUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.PaymentMethodCreateWithoutOrdersInput, Prisma.PaymentMethodUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.PaymentMethodWhereInput;
};
export type PaymentMethodUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.PaymentMethodWhereInput;
    data: Prisma.XOR<Prisma.PaymentMethodUpdateWithoutOrdersInput, Prisma.PaymentMethodUncheckedUpdateWithoutOrdersInput>;
};
export type PaymentMethodUpdateWithoutOrdersInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PaymentMethodUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PaymentMethodCountOutputType = {
    orders: number;
};
export type PaymentMethodCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | PaymentMethodCountOutputTypeCountOrdersArgs;
};
export type PaymentMethodCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodCountOutputTypeSelect<ExtArgs> | null;
};
export type PaymentMethodCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type PaymentMethodSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    isActive?: boolean;
    orders?: boolean | Prisma.PaymentMethod$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentMethod"]>;
export type PaymentMethodSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["paymentMethod"]>;
export type PaymentMethodSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["paymentMethod"]>;
export type PaymentMethodSelectScalar = {
    id?: boolean;
    name?: boolean;
    isActive?: boolean;
};
export type PaymentMethodOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "isActive", ExtArgs["result"]["paymentMethod"]>;
export type PaymentMethodInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.PaymentMethod$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PaymentMethodIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PaymentMethodIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PaymentMethodPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PaymentMethod";
    objects: {
        orders: Prisma.$OrderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        isActive: boolean;
    }, ExtArgs["result"]["paymentMethod"]>;
    composites: {};
};
export type PaymentMethodGetPayload<S extends boolean | null | undefined | PaymentMethodDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload, S>;
export type PaymentMethodCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentMethodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentMethodCountAggregateInputType | true;
};
export interface PaymentMethodDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethod'];
        meta: {
            name: 'PaymentMethod';
        };
    };
    findUnique<T extends PaymentMethodFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentMethodFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentMethodFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentMethodFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentMethodFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentMethodCreateArgs>(args: Prisma.SelectSubset<T, PaymentMethodCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentMethodCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaymentMethodCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentMethodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaymentMethodDeleteArgs>(args: Prisma.SelectSubset<T, PaymentMethodDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentMethodUpdateArgs>(args: Prisma.SelectSubset<T, PaymentMethodUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentMethodDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentMethodUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaymentMethodUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentMethodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaymentMethodUpsertArgs>(args: Prisma.SelectSubset<T, PaymentMethodUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentMethodCountArgs>(args?: Prisma.Subset<T, PaymentMethodCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentMethodCountAggregateOutputType> : number>;
    aggregate<T extends PaymentMethodAggregateArgs>(args: Prisma.Subset<T, PaymentMethodAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodAggregateType<T>>;
    groupBy<T extends PaymentMethodGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentMethodGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentMethodGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentMethodFieldRefs;
}
export interface Prisma__PaymentMethodClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.PaymentMethod$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentMethod$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentMethodFieldRefs {
    readonly id: Prisma.FieldRef<"PaymentMethod", 'Int'>;
    readonly name: Prisma.FieldRef<"PaymentMethod", 'String'>;
    readonly isActive: Prisma.FieldRef<"PaymentMethod", 'Boolean'>;
}
export type PaymentMethodFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where: Prisma.PaymentMethodWhereUniqueInput;
};
export type PaymentMethodFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where: Prisma.PaymentMethodWhereUniqueInput;
};
export type PaymentMethodFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where?: Prisma.PaymentMethodWhereInput;
    orderBy?: Prisma.PaymentMethodOrderByWithRelationInput | Prisma.PaymentMethodOrderByWithRelationInput[];
    cursor?: Prisma.PaymentMethodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentMethodScalarFieldEnum | Prisma.PaymentMethodScalarFieldEnum[];
};
export type PaymentMethodFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where?: Prisma.PaymentMethodWhereInput;
    orderBy?: Prisma.PaymentMethodOrderByWithRelationInput | Prisma.PaymentMethodOrderByWithRelationInput[];
    cursor?: Prisma.PaymentMethodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentMethodScalarFieldEnum | Prisma.PaymentMethodScalarFieldEnum[];
};
export type PaymentMethodFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where?: Prisma.PaymentMethodWhereInput;
    orderBy?: Prisma.PaymentMethodOrderByWithRelationInput | Prisma.PaymentMethodOrderByWithRelationInput[];
    cursor?: Prisma.PaymentMethodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentMethodScalarFieldEnum | Prisma.PaymentMethodScalarFieldEnum[];
};
export type PaymentMethodCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentMethodCreateInput, Prisma.PaymentMethodUncheckedCreateInput>;
};
export type PaymentMethodCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentMethodCreateManyInput | Prisma.PaymentMethodCreateManyInput[];
};
export type PaymentMethodCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    data: Prisma.PaymentMethodCreateManyInput | Prisma.PaymentMethodCreateManyInput[];
};
export type PaymentMethodUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentMethodUpdateInput, Prisma.PaymentMethodUncheckedUpdateInput>;
    where: Prisma.PaymentMethodWhereUniqueInput;
};
export type PaymentMethodUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentMethodUpdateManyMutationInput, Prisma.PaymentMethodUncheckedUpdateManyInput>;
    where?: Prisma.PaymentMethodWhereInput;
    limit?: number;
};
export type PaymentMethodUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentMethodUpdateManyMutationInput, Prisma.PaymentMethodUncheckedUpdateManyInput>;
    where?: Prisma.PaymentMethodWhereInput;
    limit?: number;
};
export type PaymentMethodUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where: Prisma.PaymentMethodWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentMethodCreateInput, Prisma.PaymentMethodUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentMethodUpdateInput, Prisma.PaymentMethodUncheckedUpdateInput>;
};
export type PaymentMethodDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where: Prisma.PaymentMethodWhereUniqueInput;
};
export type PaymentMethodDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentMethodWhereInput;
    limit?: number;
};
export type PaymentMethod$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PaymentMethodDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
};
export {};
