"use client";

import { useQuery, useMutation, gql } from "@apollo/client";
import { useUser } from "../context/UserContext";
import { useState } from "react";

const GET_PAYMENT_METHODS = gql`
  query GetPaymentMethods {
    paymentMethods {
      id
      name
      isActive
    }
  }
`;

const ADD_PAYMENT_METHOD = gql`
  mutation AddPaymentMethod($name: String!) {
    addPaymentMethod(name: $name) {
      id
      name
      isActive
    }
  }
`;

const UPDATE_PAYMENT_METHOD = gql`
  mutation UpdatePaymentMethod($id: Int!, $name: String!) {
    updatePaymentMethod(id: $id, name: $name) {
      id
      name
    }
  }
`;

const TOGGLE_PAYMENT_METHOD = gql`
  mutation TogglePaymentMethod($id: Int!) {
    togglePaymentMethod(id: $id) {
      id
      isActive
    }
  }
`;

export default function PaymentMethodsManager() {
  const { role, userId } = useUser();
  const [newName, setNewName] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");

  const headers = { "x-user-id": userId };
  const mutationContext = { context: { headers } };

  const { data, loading, error, refetch } = useQuery(GET_PAYMENT_METHODS, {
    context: { headers },
    fetchPolicy: "network-only",
  });

  const [addPM] = useMutation(ADD_PAYMENT_METHOD, {
    ...mutationContext,
    onCompleted: () => { refetch(); setNewName(""); },
  });

  const [updatePM] = useMutation(UPDATE_PAYMENT_METHOD, {
    ...mutationContext,
    onCompleted: () => { refetch(); setEditingId(null); setEditName(""); },
  });

  const [togglePM] = useMutation(TOGGLE_PAYMENT_METHOD, {
    ...mutationContext,
    onCompleted: () => refetch(),
  });

  if (role !== "ADMIN") return null;
  if (loading) return <div className="glass-card p-5"><div className="loading-shimmer h-20 w-full rounded" /></div>;
  if (error) return <div className="glass-card p-5"><p className="text-sm" style={{ color: 'var(--danger)' }}>⚠️ {error.message}</p></div>;

  const methods = data?.paymentMethods || [];

  return (
    <div className="glass-card p-5 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(108, 92, 231, 0.15)' }}>
          💳
        </div>
        <div className="flex-1">
          <h2 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>Payment Methods</h2>
          <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Admin access only</p>
        </div>
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: 'rgba(162, 155, 254, 0.12)', color: 'var(--accent-secondary)' }}>
          ADMIN
        </span>
      </div>

      {/* Add new */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (newName.trim()) addPM({ variables: { name: newName.trim() } });
        }}
        className="flex gap-2 mb-4"
      >
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New payment method..."
          className="input-modern flex-1"
          style={{ padding: '8px 12px', fontSize: '12px' }}
        />
        <button
          type="submit"
          disabled={!newName.trim()}
          className="btn-primary"
          style={{ padding: '8px 16px', fontSize: '12px', opacity: newName.trim() ? 1 : 0.4 }}
        >
          + Add
        </button>
      </form>

      {/* List */}
      <div className="space-y-2">
        {methods.map((pm: any) => (
          <div
            key={pm.id}
            className="flex items-center justify-between p-3 rounded-lg transition-all"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)' }}
          >
            {editingId === pm.id ? (
              <div className="flex gap-2 flex-1">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="input-modern flex-1"
                  style={{ padding: '6px 10px', fontSize: '12px' }}
                  autoFocus
                />
                <button onClick={() => updatePM({ variables: { id: pm.id, name: editName } })} className="btn-success" style={{ fontSize: '11px' }}>
                  Save
                </button>
                <button onClick={() => setEditingId(null)} className="pill" style={{ fontSize: '11px', padding: '4px 10px' }}>
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: pm.isActive ? 'var(--success)' : 'var(--danger)' }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: pm.isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                      textDecoration: pm.isActive ? 'none' : 'line-through',
                    }}
                  >
                    {pm.name}
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => { setEditingId(pm.id); setEditName(pm.name); }}
                    className="pill"
                    style={{ fontSize: '10px', padding: '3px 8px' }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => togglePM({ variables: { id: pm.id } })}
                    className={pm.isActive ? "btn-danger" : "btn-success"}
                    style={{ fontSize: '10px', padding: '3px 8px' }}
                  >
                    {pm.isActive ? "Disable" : "Enable"}
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
