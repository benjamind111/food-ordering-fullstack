import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { UserProvider } from "@/context/UserContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FoodFlow — Role-Based Food Ordering",
  description: "RBAC & Re-BAC Demonstration with NestJS + GraphQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ApolloWrapper>
          <UserProvider>{children}</UserProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
