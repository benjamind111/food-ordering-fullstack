import { PaymentMethodsService } from './payment-methods.service';
export declare class PaymentMethodsResolver {
    private readonly paymentMethodsService;
    constructor(paymentMethodsService: PaymentMethodsService);
    paymentMethods(): Promise<{
        id: number;
        name: string;
        isActive: boolean;
    }[]>;
    addPaymentMethod(name: string): Promise<{
        id: number;
        name: string;
        isActive: boolean;
    }>;
    updatePaymentMethod(id: number, name: string): Promise<{
        id: number;
        name: string;
        isActive: boolean;
    }>;
    togglePaymentMethod(id: number): Promise<{
        id: number;
        name: string;
        isActive: boolean;
    }>;
}
