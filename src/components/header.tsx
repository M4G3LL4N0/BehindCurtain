"use client";

import Link from "next/link";
import { Menu, Search, Shield, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "/explorer", label: "Explorer", icon: Search, primary: false },
  { href: "/#trust", label: "Trust", icon: Shield, primary: false },
  { href: "/#launch", label: "Launch MVP", icon: Sparkles, primary: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="container" style={{ paddingTop: 24, paddingBottom: 16 }}>
      <div
        className="panel"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 16,
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12 }} onClick={() => setOpen(false)}>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 14,
              background: "linear-gradient(180deg, #aadaff 0%, #79bbff 100%)",
              color: "#07111f",
              display: "grid",
              placeItems: "center",
              fontWeight: 900,
            }}
          >
            BC
          </div>

          <div>
            <div style={{ fontWeight: 800, letterSpacing: "-0.03em" }}>BehindCurtain</div>
            <div className="muted" style={{ fontSize: 12 }}>
              Source-linked intelligence
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {links.map((item) => {
            const Icon = item.icon;
            const className = item.primary ? "btn btn-primary" : "btn btn-secondary";
            if (item.href.startsWith("/#")) {
              return (
                <a key={item.href} className={className} href={item.href}>
                  <Icon size={16} />
                  {item.label}
                </a>
              );
            }
            return (
              <Link key={item.href} className={className} href={item.href}>
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="btn btn-secondary md:hidden"
          aria-expanded={open}
          aria-controls="behindcurtain-mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open && (
        <nav
          id="behindcurtain-mobile-nav"
          className="panel mt-3 flex flex-col gap-2 p-4 md:hidden"
          aria-label="Mobile"
        >
          {links.map((item) => {
            const Icon = item.icon;
            const className = item.primary ? "btn btn-primary w-full justify-center" : "btn btn-secondary w-full justify-center";
            if (item.href.startsWith("/#")) {
              return (
                <a key={item.href} className={className} href={item.href} onClick={() => setOpen(false)}>
                  <Icon size={16} />
                  {item.label}
                </a>
              );
            }
            return (
              <Link key={item.href} className={className} href={item.href} onClick={() => setOpen(false)}>
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
