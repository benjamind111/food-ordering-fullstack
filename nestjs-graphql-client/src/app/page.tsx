import RestaurantList from "@/components/RestaurantList";
import RoleSwitcher from "@/components/RoleSwitcher";
import OrderList from "@/components/OrderList";
import PaymentMethodsManager from "@/components/PaymentMethodsManager";

export default function Home() {
  return (
    <main className="min-h-screen relative z-10">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass-card" style={{ borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg" style={{ background: 'var(--accent-gradient)' }}>
              🍕
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                FoodFlow
              </h1>
              <p className="text-[10px] font-medium tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                RBAC Demo
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium px-3 py-1.5 rounded-full" style={{ background: 'rgba(108, 92, 231, 0.1)', color: 'var(--accent-secondary)', border: '1px solid rgba(108, 92, 231, 0.2)' }}>
              NestJS + GraphQL
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Role & Country Switcher */}
        <RoleSwitcher />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Restaurants Section */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  Restaurants
                </h2>
                <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                  Browse restaurants in your region
                </p>
              </div>
            </div>
            <RestaurantList />
          </div>
          
          {/* Sidebar: Orders + Payment Methods */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <OrderList />
            <PaymentMethodsManager />
          </div>
        </div>
      </div>
    </main>
  );
}
