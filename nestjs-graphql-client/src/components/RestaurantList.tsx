"use client";

import { useQuery, useMutation, gql } from "@apollo/client";
import { useUser } from "../context/UserContext";

const GET_RESTAURANTS = gql`
  query GetRestaurants {
    restaurants {
      id
      name
      country
      menuItems
    }
  }
`;

const CREATE_ORDER = gql`
  mutation CreateOrder($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
      status
      total
    }
  }
`;

const restaurantEmojis = ["🍕", "🍔", "🌮", "🍜", "🍛", "🥘", "🍱", "🥗", "🍲", "🧆"];

export default function RestaurantList() {
  const { userId, role, country } = useUser();

  const { data, loading, error } = useQuery(GET_RESTAURANTS, {
    context: { headers: { "x-user-id": userId } },
    fetchPolicy: "network-only",
  });

  const [createOrder] = useMutation(CREATE_ORDER, {
    context: { headers: { "x-user-id": userId } },
    refetchQueries: ["GetOrders", "GetMyOrders"],
  });

  const currencySymbol = country === "INDIA" ? "₹" : "$";
  const mockPrice = country === "INDIA" ? 250 : 15;

  const handleOrder = async (restaurantId: number) => {
    try {
      await createOrder({
        variables: {
          input: {
            userId: parseInt(userId),
            total: mockPrice,
          },
        },
      });
    } catch (e: any) {
      alert("Failed to place order: " + e.message);
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="glass-card p-0 overflow-hidden" style={{ height: 320 }}>
            <div className="loading-shimmer w-full" style={{ height: 140 }} />
            <div className="p-5 space-y-3">
              <div className="loading-shimmer h-5 w-3/4 rounded" />
              <div className="loading-shimmer h-3 w-1/2 rounded" />
              <div className="flex gap-2 mt-3">
                <div className="loading-shimmer h-6 w-16 rounded" />
                <div className="loading-shimmer h-6 w-16 rounded" />
                <div className="loading-shimmer h-6 w-16 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-card p-8 text-center">
        <p className="text-sm" style={{ color: 'var(--danger)' }}>⚠️ {error.message}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger-children">
      {data.restaurants.map((restaurant: any, idx: number) => (
        <div
          key={restaurant.id}
          className="glass-card overflow-hidden group"
          style={{ padding: 0 }}
        >
          {/* Header gradient with emoji */}
          <div
            className="h-36 flex items-center justify-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, rgba(108, 92, 231, ${0.08 + (idx % 3) * 0.04}), rgba(116, 185, 255, ${0.05 + (idx % 2) * 0.03}))`,
            }}
          >
            <span className="text-5xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
              {restaurantEmojis[idx % restaurantEmojis.length]}
            </span>
            <div
              className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
              style={{
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(10px)',
                color: 'var(--text-secondary)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {restaurant.country === "INDIA" ? "🇮🇳" : "🇺🇸"} {restaurant.country}
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-base font-bold mb-3 transition-colors group-hover:text-[#a29bfe]" style={{ color: 'var(--text-primary)' }}>
              {restaurant.name}
            </h3>

            <div className="mb-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-muted)' }}>
                Menu
              </p>
              <div className="flex flex-wrap gap-1.5">
                {restaurant.menuItems.map((item: string, i: number) => (
                  <span key={i} className="menu-tag">{item}</span>
                ))}
              </div>
            </div>

            <button
              className="btn-primary w-full flex items-center justify-center gap-2"
              onClick={() => handleOrder(parseInt(restaurant.id))}
            >
              <span>🛒</span>
              <span>Order · {currencySymbol}{mockPrice}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
