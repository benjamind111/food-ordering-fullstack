"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Role = "ADMIN" | "MANAGER" | "MEMBER";
export type Country = "INDIA" | "USA";

interface UserContextType {
  role: Role;
  country: Country;
  userId: string; // "1" for India, "2" for USA (mocked)
  setRole: (role: Role) => void;
  setCountry: (country: Country) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>("MEMBER");
  const [country, setCountry] = useState<Country>("INDIA");

  // Map role + country to correct seeded user ID
  // Seed order: 1=MEMBER/INDIA, 2=MEMBER/USA, 3=MANAGER/INDIA, 4=MANAGER/USA, 5=ADMIN/INDIA, 6=ADMIN/USA
  const userIdMap: Record<string, string> = {
    "MEMBER_INDIA": "1",
    "MEMBER_USA": "2",
    "MANAGER_INDIA": "3",
    "MANAGER_USA": "4",
    "ADMIN_INDIA": "5",
    "ADMIN_USA": "6",
  };
  const userId = userIdMap[`${role}_${country}`] || "1";

  return (
    <UserContext.Provider value={{ role, country, userId, setRole, setCountry }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
