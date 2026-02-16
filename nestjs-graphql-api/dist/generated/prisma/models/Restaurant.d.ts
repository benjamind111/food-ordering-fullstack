import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type RestaurantModel = runtime.Types.Result.DefaultSelection<Prisma.$RestaurantPayload>;
export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null;
    _avg: RestaurantAvgAggregateOutputType | null;
    _sum: RestaurantSumAggregateOutputType | null;
    _min: RestaurantMinAggregateOutputType | null;
    _max: RestaurantMaxAggregateOutputType | null;
};
export type RestaurantAvgAggregateOutputType = {
    id: number | null;
};
export type RestaurantSumAggregateOutputType = {
    id: number | null;
};
export type RestaurantMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    country: $Enums.Country | null;
    menuItems: string | null;
};
export type RestaurantMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    country: $Enums.Country | null;
    menuItems: string | null;
};
export type RestaurantCountAggregateOutputType = {
    id: number;
    name: number;
    country: number;
    menuItems: number;
    _all: number;
};
export type RestaurantAvgAggregateInputType = {
    id?: true;
};
export type RestaurantSumAggregateInputType = {
    id?: true;
};
export type RestaurantMinAggregateInputType = {
    id?: true;
    name?: true;
    country?: true;
    menuItems?: true;
};
export type RestaurantMaxAggregateInputType = {
    id?: true;
    name?: true;
    country?: true;
    menuItems?: true;
};
export type RestaurantCountAggregateInputType = {
    id?: true;
    name?: true;
    country?: true;
    menuItems?: true;
    _all?: true;
};
export type RestaurantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RestaurantWhereInput;
    orderBy?: Prisma.RestaurantOrderByWithRelationInput | Prisma.RestaurantOrderByWithRelationInput[];
    cursor?: Prisma.RestaurantWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RestaurantCountAggregateInputType;
    _avg?: RestaurantAvgAggregateInputType;
    _sum?: RestaurantSumAggregateInputType;
    _min?: RestaurantMinAggregateInputType;
    _max?: RestaurantMaxAggregateInputType;
};
export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
    [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRestaurant[P]> : Prisma.GetScalarType<T[P], AggregateRestaurant[P]>;
};
export type RestaurantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RestaurantWhereInput;
    orderBy?: Prisma.RestaurantOrderByWithAggregationInput | Prisma.RestaurantOrderByWithAggregationInput[];
    by: Prisma.RestaurantScalarFieldEnum[] | Prisma.RestaurantScalarFieldEnum;
    having?: Prisma.RestaurantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RestaurantCountAggregateInputType | true;
    _avg?: RestaurantAvgAggregateInputType;
    _sum?: RestaurantSumAggregateInputType;
    _min?: RestaurantMinAggregateInputType;
    _max?: RestaurantMaxAggregateInputType;
};
export type RestaurantGroupByOutputType = {
    id: number;
    name: string;
    country: $Enums.Country;
    menuItems: string;
    _count: RestaurantCountAggregateOutputType | null;
    _avg: RestaurantAvgAggregateOutputType | null;
    _sum: RestaurantSumAggregateOutputType | null;
    _min: RestaurantMinAggregateOutputType | null;
    _max: RestaurantMaxAggregateOutputType | null;
};
type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RestaurantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RestaurantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RestaurantGroupByOutputType[P]>;
}>>;
export type RestaurantWhereInput = {
    AND?: Prisma.RestaurantWhereInput | Prisma.RestaurantWhereInput[];
    OR?: Prisma.RestaurantWhereInput[];
    NOT?: Prisma.RestaurantWhereInput | Prisma.RestaurantWhereInput[];
    id?: Prisma.IntFilter<"Restaurant"> | number;
    name?: Prisma.StringFilter<"Restaurant"> | string;
    country?: Prisma.EnumCountryFilter<"Restaurant"> | $Enums.Country;
    menuItems?: Prisma.StringFilter<"Restaurant"> | string;
};
export type RestaurantOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    menuItems?: Prisma.SortOrder;
};
export type RestaurantWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.RestaurantWhereInput | Prisma.RestaurantWhereInput[];
    OR?: Prisma.RestaurantWhereInput[];
    NOT?: Prisma.RestaurantWhereInput | Prisma.RestaurantWhereInput[];
    name?: Prisma.StringFilter<"Restaurant"> | string;
    country?: Prisma.EnumCountryFilter<"Restaurant"> | $Enums.Country;
    menuItems?: Prisma.StringFilter<"Restaurant"> | string;
}, "id">;
export type RestaurantOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    menuItems?: Prisma.SortOrder;
    _count?: Prisma.RestaurantCountOrderByAggregateInput;
    _avg?: Prisma.RestaurantAvgOrderByAggregateInput;
    _max?: Prisma.RestaurantMaxOrderByAggregateInput;
    _min?: Prisma.RestaurantMinOrderByAggregateInput;
    _sum?: Prisma.RestaurantSumOrderByAggregateInput;
};
export type RestaurantScalarWhereWithAggregatesInput = {
    AND?: Prisma.RestaurantScalarWhereWithAggregatesInput | Prisma.RestaurantScalarWhereWithAggregatesInput[];
    OR?: Prisma.RestaurantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RestaurantScalarWhereWithAggregatesInput | Prisma.RestaurantScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Restaurant"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Restaurant"> | string;
    country?: Prisma.EnumCountryWithAggregatesFilter<"Restaurant"> | $Enums.Country;
    menuItems?: Prisma.StringWithAggregatesFilter<"Restaurant"> | string;
};
export type RestaurantCreateInput = {
    name: string;
    country: $Enums.Country;
    menuItems: string;
};
export type RestaurantUncheckedCreateInput = {
    id?: number;
    name: string;
    country: $Enums.Country;
    menuItems: string;
};
export type RestaurantUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.EnumCountryFieldUpdateOperationsInput | $Enums.Country;
    menuItems?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RestaurantUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.EnumCountryFieldUpdateOperationsInput | $Enums.Country;
    menuItems?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RestaurantCreateManyInput = {
    id?: number;
    name: string;
    country: $Enums.Country;
    menuItems: string;
};
export type RestaurantUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.EnumCountryFieldUpdateOperationsInput | $Enums.Country;
    menuItems?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RestaurantUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.EnumCountryFieldUpdateOperationsInput | $Enums.Country;
    menuItems?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RestaurantCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    menuItems?: Prisma.SortOrder;
};
export type RestaurantAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type RestaurantMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    menuItems?: Prisma.SortOrder;
};
export type RestaurantMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    menuItems?: Prisma.SortOrder;
};
export type RestaurantSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type RestaurantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    country?: boolean;
    menuItems?: boolean;
}, ExtArgs["result"]["restaurant"]>;
export type RestaurantSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    country?: boolean;
    menuItems?: boolean;
}, ExtArgs["result"]["restaurant"]>;
export type RestaurantSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    country?: boolean;
    menuItems?: boolean;
}, ExtArgs["result"]["restaurant"]>;
export type RestaurantSelectScalar = {
    id?: boolean;
    name?: boolean;
    country?: boolean;
    menuItems?: boolean;
};
export type RestaurantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "country" | "menuItems", ExtArgs["result"]["restaurant"]>;
export type $RestaurantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Restaurant";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        country: $Enums.Country;
        menuItems: string;
    }, ExtArgs["result"]["restaurant"]>;
    composites: {};
};
export type RestaurantGetPayload<S extends boolean | null | undefined | RestaurantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RestaurantPayload, S>;
export type RestaurantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RestaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RestaurantCountAggregateInputType | true;
};
export interface RestaurantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Restaurant'];
        meta: {
            name: 'Restaurant';
        };
    };
    findUnique<T extends RestaurantFindUniqueArgs>(args: Prisma.SelectSubset<T, RestaurantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RestaurantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RestaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RestaurantFindFirstArgs>(args?: Prisma.SelectSubset<T, RestaurantFindFirstArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RestaurantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RestaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RestaurantFindManyArgs>(args?: Prisma.SelectSubset<T, RestaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RestaurantCreateArgs>(args: Prisma.SelectSubset<T, RestaurantCreateArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RestaurantCreateManyArgs>(args?: Prisma.SelectSubset<T, RestaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RestaurantCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RestaurantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RestaurantDeleteArgs>(args: Prisma.SelectSubset<T, RestaurantDeleteArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RestaurantUpdateArgs>(args: Prisma.SelectSubset<T, RestaurantUpdateArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RestaurantDeleteManyArgs>(args?: Prisma.SelectSubset<T, RestaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RestaurantUpdateManyArgs>(args: Prisma.SelectSubset<T, RestaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RestaurantUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RestaurantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RestaurantUpsertArgs>(args: Prisma.SelectSubset<T, RestaurantUpsertArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RestaurantCountArgs>(args?: Prisma.Subset<T, RestaurantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RestaurantCountAggregateOutputType> : number>;
    aggregate<T extends RestaurantAggregateArgs>(args: Prisma.Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>;
    groupBy<T extends RestaurantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RestaurantGroupByArgs['orderBy'];
    } : {
        orderBy?: RestaurantGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RestaurantFieldRefs;
}
export interface Prisma__RestaurantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RestaurantFieldRefs {
    readonly id: Prisma.FieldRef<"Restaurant", 'Int'>;
    readonly name: Prisma.FieldRef<"Restaurant", 'String'>;
    readonly country: Prisma.FieldRef<"Restaurant", 'Country'>;
    readonly menuItems: Prisma.FieldRef<"Restaurant", 'String'>;
}
export type RestaurantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    where: Prisma.RestaurantWhereUniqueInput;
};
export type RestaurantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    where: Prisma.RestaurantWhereUniqueInput;
};
export type RestaurantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    where?: Prisma.RestaurantWhereInput;
    orderBy?: Prisma.RestaurantOrderByWithRelationInput | Prisma.RestaurantOrderByWithRelationInput[];
    cursor?: Prisma.RestaurantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RestaurantScalarFieldEnum | Prisma.RestaurantScalarFieldEnum[];
};
export type RestaurantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    where?: Prisma.RestaurantWhereInput;
    orderBy?: Prisma.RestaurantOrderByWithRelationInput | Prisma.RestaurantOrderByWithRelationInput[];
    cursor?: Prisma.RestaurantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RestaurantScalarFieldEnum | Prisma.RestaurantScalarFieldEnum[];
};
export type RestaurantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    where?: Prisma.RestaurantWhereInput;
    orderBy?: Prisma.RestaurantOrderByWithRelationInput | Prisma.RestaurantOrderByWithRelationInput[];
    cursor?: Prisma.RestaurantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RestaurantScalarFieldEnum | Prisma.RestaurantScalarFieldEnum[];
};
export type RestaurantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RestaurantCreateInput, Prisma.RestaurantUncheckedCreateInput>;
};
export type RestaurantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RestaurantCreateManyInput | Prisma.RestaurantCreateManyInput[];
};
export type RestaurantCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    data: Prisma.RestaurantCreateManyInput | Prisma.RestaurantCreateManyInput[];
};
export type RestaurantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RestaurantUpdateInput, Prisma.RestaurantUncheckedUpdateInput>;
    where: Prisma.RestaurantWhereUniqueInput;
};
export type RestaurantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RestaurantUpdateManyMutationInput, Prisma.RestaurantUncheckedUpdateManyInput>;
    where?: Prisma.RestaurantWhereInput;
    limit?: number;
};
export type RestaurantUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RestaurantUpdateManyMutationInput, Prisma.RestaurantUncheckedUpdateManyInput>;
    where?: Prisma.RestaurantWhereInput;
    limit?: number;
};
export type RestaurantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    where: Prisma.RestaurantWhereUniqueInput;
    create: Prisma.XOR<Prisma.RestaurantCreateInput, Prisma.RestaurantUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RestaurantUpdateInput, Prisma.RestaurantUncheckedUpdateInput>;
};
export type RestaurantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    where: Prisma.RestaurantWhereUniqueInput;
};
export type RestaurantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RestaurantWhereInput;
    limit?: number;
};
export type RestaurantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
};
export {};
