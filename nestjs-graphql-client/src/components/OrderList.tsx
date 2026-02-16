"use client";

import { useQuery, useMutation, gql } from "@apollo/client";
import { useUser } from "../context/UserContext";
import { useState } from "react";

const GET_ORDERS = gql`
  query GetOrders {
    orders {
      id
      status
      total
      user {
        email
      }
    }
  }
`;

const GET_MY_ORDERS = gql`
  query GetMyOrders {
    myOrders {
      id
      status
      total
    }
  }
`;

const GET_PAYMENT_METHODS = gql`
  query GetPaymentMethods {
    paymentMethods {
      id
      name
    }
  }
`;

const CANCEL_ORDER = gql`
  mutation CancelOrder($id: Int!) {
    cancelOrder(id: $id) {
      id
      status
    }
  }
`;

const PAY_ORDER = gql`
  mutation PayOrder($id: Int!, $paymentMethodId: Int!) {
    payOrder(id: $id, paymentMethodId: $paymentMethodId) {
      id
      status
    }
  }
`;

export default function OrderList() {
  const { role, userId, country } = useUser();
  const [selectedPM, setSelectedPM] = useState<Record<number, number>>({});
  const currencySymbol = country === "INDIA" ? "₹" : "$";

  const isPrivileged = role === "ADMIN" || role === "MANAGER";
  const QUERY = isPrivileged ? GET_ORDERS : GET_MY_ORDERS;

  const headers = { "x-user-id": userId };

  const { data, loading, error, refetch } = useQuery(QUERY, {
    fetchPolicy: "network-only",
    context: { headers },
  });

  const { data: pmData } = useQuery(GET_PAYMENT_METHODS, {
    context: { headers },
  });

  const mutationContext = { context: { headers } };
  const [cancelOrder] = useMutation(CANCEL_ORDER, { ...mutationContext, onCompleted: () => refetch() });
  const [payOrder] = useMutation(PAY_ORDER, { ...mutationContext, onCompleted: () => refetch() });

  if (loading) {
    return (
      <div className="glass-card p-5 space-y-4">
        <div className="loading-shimmer h-6 w-32 rounded" />
        <div className="loading-shimmer h-20 w-full rounded" />
        <div className="loading-shimmer h-20 w-full rounded" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-card p-5">
        <p className="text-sm" style={{ color: 'var(--danger)' }}>⚠️ {error.message}</p>
      </div>
    );
  }

  const orders = isPrivileged ? data?.orders : data?.myOrders;
  const paymentMethods = pmData?.paymentMethods || [];

  const handlePay = (orderId: number) => {
    const pmId = selectedPM[orderId] || (paymentMethods.length > 0 ? paymentMethods[0].id : null);
    if (!pmId) {
      alert("No payment methods available. An Admin must add one first.");
      return;
    }
    payOrder({ variables: { id: orderId, paymentMethodId: pmId } });
  };

  return (
    <div className="glass-card p-5 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(108, 92, 231, 0.15)' }}>
            📦
          </div>
          <div>
            <h2 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>Orders</h2>
            <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
              {isPrivileged ? "All orders" : "Your orders"}
            </p>
          </div>
        </div>
        {orders && (
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: 'rgba(108, 92, 231, 0.12)', color: 'var(--accent-secondary)' }}>
            {orders.length}
          </span>
        )}
      </div>

      {/* Orders list */}
      {!orders || orders.length === 0 ? (
        <div className="py-10 text-center" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <p className="text-3xl mb-2">🛒</p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>No orders yet. Order from a restaurant!</p>
        </div>
      ) : (
        <div className="space-y-3 stagger-children">
          {orders.map((order: any) => (
            <div
              key={order.id}
              className="p-3.5 rounded-xl transition-all duration-200 hover:scale-[1.01]"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)' }}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    #{order.id}
                  </p>
                  {order.user && (
                    <p className="text-[10px] mt-0.5" style={{ color: 'var(--text-muted)' }}>
                      {order.user.email}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                    {currencySymbol}{order.total.toFixed(2)}
                  </span>
                  <span className={`badge badge-${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Actions for Admin/Manager on PENDING orders */}
              {isPrivileged && order.status === "PENDING" && (
                <div className="flex items-center gap-2 mt-3 pt-3" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                  <select
                    value={selectedPM[order.id] || (paymentMethods.length > 0 ? paymentMethods[0].id : "")}
                    onChange={(e) => setSelectedPM(prev => ({ ...prev, [order.id]: parseInt(e.target.value) }))}
                    className="select-modern flex-1"
                  >
                    {paymentMethods.map((pm: any) => (
                      <option key={pm.id} value={pm.id}>{pm.name}</option>
                    ))}
                  </select>
                  <button onClick={() => handlePay(order.id)} className="btn-success">
                    Pay
                  </button>
                  <button onClick={() => cancelOrder({ variables: { id: order.id } })} className="btn-danger">
                    Cancel
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
