"use client";

import { useUser, Role, Country } from "../context/UserContext";

const roleInfo: Record<Role, { icon: string; desc: string }> = {
  ADMIN: { icon: "👑", desc: "Full access · Manage payments" },
  MANAGER: { icon: "📋", desc: "Pay & cancel orders" },
  MEMBER: { icon: "👤", desc: "View & place orders only" },
};

const countryInfo: Record<Country, { flag: string; label: string }> = {
  INDIA: { flag: "🇮🇳", label: "India" },
  USA: { flag: "🇺🇸", label: "United States" },
};

export default function RoleSwitcher() {
  const { role, country, userId, setRole, setCountry } = useUser();

  const roles: Role[] = ["ADMIN", "MANAGER", "MEMBER"];
  const countries: Country[] = ["INDIA", "USA"];

  return (
    <div className="glass-card p-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Left side: persona info */}
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
            style={{ background: 'var(--accent-gradient)', boxShadow: '0 8px 25px rgba(108, 92, 231, 0.3)' }}
          >
            {roleInfo[role].icon}
          </div>
          <div>
            <h2 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
              {role} · {countryInfo[country].flag} {countryInfo[country].label}
            </h2>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
              {roleInfo[role].desc}
            </p>
          </div>
        </div>

        {/* Right side: selectors */}
        <div className="flex flex-wrap gap-6">
          {/* Country */}
          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-[0.15em]" style={{ color: 'var(--text-muted)' }}>
              Region
            </label>
            <div className="flex gap-2">
              {countries.map((c) => (
                <button
                  key={c}
                  onClick={() => setCountry(c)}
                  className={`pill ${country === c ? "pill-active" : ""}`}
                >
                  {countryInfo[c].flag} {countryInfo[c].label}
                </button>
              ))}
            </div>
          </div>

          {/* Role */}
          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-[0.15em]" style={{ color: 'var(--text-muted)' }}>
              Role
            </label>
            <div className="flex gap-2">
              {roles.map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`pill ${role === r ? "pill-active" : ""}`}
                >
                  {roleInfo[r].icon} {r}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer info bar */}
      <div className="mt-5 pt-4 flex flex-wrap gap-4 text-[11px]" style={{ borderTop: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
        <span>User ID: <code className="px-1.5 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.04)' }}>{userId}</code></span>
        <span>Access: <code className="px-1.5 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.04)' }}>{role}</code></span>
        <span>Region: <code className="px-1.5 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.04)' }}>{country}</code></span>
      </div>
    </div>
  );
}
