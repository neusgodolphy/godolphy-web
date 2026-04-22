"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Sectores", href: "#sectores", hasDropdown: true },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Recursos", href: "#recursos" },
  { label: "Precio", href: "#precio" },
];

const sectores = [
  "Limpieza de oficinas",
  "Limpieza industrial",
  "Limpieza de vehículos",
  "Técnicos de campo",
  "Manitas a domicilio",
  "Jardineros",
  "Lampistas",
  "Fontaneros",
  "Mantenimiento de piscinas",
  "Niñeras",
  "Tutores a domicilio",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(99, 28, 255, 0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "'Gabarito', sans-serif",
              fontWeight: 700,
              fontSize: 24,
              color: "white",
              letterSpacing: "-0.5px",
            }}
          >
            godolphy
          </span>
          <span
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#EEFE3A",
              marginLeft: 3,
              marginBottom: 6,
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: 8 }}
          className="hidden-mobile"
        >
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    color: "rgba(255,255,255,0.85)",
                    background: "none",
                    border: "none",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: 15,
                    padding: "8px 14px",
                    borderRadius: 8,
                    cursor: "pointer",
                    transition: "color 0.15s, background 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "white";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    style={{
                      transition: "transform 0.2s",
                      transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {dropdownOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: 0,
                      background: "white",
                      borderRadius: 12,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.16)",
                      padding: "8px 0",
                      minWidth: 220,
                      zIndex: 100,
                    }}
                  >
                    {sectores.map((sector) => (
                      <Link
                        key={sector}
                        href="#sectores"
                        style={{
                          display: "block",
                          padding: "10px 20px",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 14,
                          color: "#333333",
                          textDecoration: "none",
                          transition: "background 0.1s, color 0.1s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "#F0ECFF";
                          (e.currentTarget as HTMLElement).style.color = "#631CFF";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "transparent";
                          (e.currentTarget as HTMLElement).style.color = "#333333";
                        }}
                      >
                        {sector}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: 15,
                  padding: "8px 14px",
                  borderRadius: 8,
                  transition: "color 0.15s, background 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "white";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="hidden-mobile">
          <Link
            href="#demo"
            style={{
              padding: "9px 22px",
              borderRadius: 9999,
              border: "1.8px solid white",
              color: "white",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "white";
              (e.currentTarget as HTMLElement).style.color = "#631CFF";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "white";
            }}
          >
            Demo
          </Link>
          <Link
            href="https://www.godolphy.com/darme-de-alta/"
            target="_blank"
            style={{
              padding: "9px 22px",
              borderRadius: 9999,
              border: "1.8px solid white",
              background: "white",
              color: "#631CFF",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#EEFE3A";
              (e.currentTarget as HTMLElement).style.borderColor = "#EEFE3A";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "white";
              (e.currentTarget as HTMLElement).style.borderColor = "white";
            }}
          >
            Login
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            padding: 8,
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "#331378",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "white",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 16,
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            <Link href="#demo" className="btn-outline" style={{ flex: 1, textAlign: "center" }}>
              Demo
            </Link>
            <Link
              href="https://www.godolphy.com/darme-de-alta/"
              target="_blank"
              className="btn-primary"
              style={{ flex: 1, textAlign: "center" }}
            >
              Alta
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
