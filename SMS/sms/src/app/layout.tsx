"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  LayoutDashboard,
  Shield,
  LogIn,
} from "lucide-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Students", href: "/students", icon: Users },
    { name: "Home", href: "/", icon: Home },
    { name: "Admin", href: "/admin", icon: Shield },
    { name: "Login", href: "/login", icon: LogIn },
  ];

  return (
    <html lang="en">
      <body>
        {/* HEADER */}
        <header className="header">
          <button className="menu-btn" onClick={() => setOpen(!open)}>
            ☰
          </button>

          <h1>Student Management System</h1>
        </header>

        <div className="container">
          {/* SIDEBAR */}
          <aside className={`sidebar ${open ? "show" : ""}`}>
            <h2>SMS</h2>

            <nav>
              <ul>
                {menu.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={isActive ? "active-link" : ""}
                        onClick={() => setOpen(false)}
                      >
                        <Icon size={18} />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* MAIN CONTENT */}
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}