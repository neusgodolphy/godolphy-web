"use client";
import { useState } from "react";
import Link from "next/link";

const reservasOptions = [50, 100, 200, 500, 1000, 2000];

function calcPrice(reservas: number, profesionales: number, annual: boolean): number {
  const base = 29;
  const extraReservas = Math.max(0, (reservas - 100) / 100) * 5;
  const extraProf = Math.max(0, profesionales - 1) * 10;
  const monthly = base + extraReservas + extraProf;
  return annual ? monthly * 0.8 : monthly;
}

export default function PricingSection() {
  const [reservas, setReservas] = useState(100);
  const [profesionales, setProfesionales] = useState(1);
  const [annual, setAnnual] = useState(false);
  const price = calcPrice(reservas, profesionales, annual);

  return (
    <section id="precio" style={{ background: "white", padding: "100px 0" }}>
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: "'Gabarito', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 4vw, 55px)",
              color: "#02021E",
              marginBottom: 16,
            }}
          >
            Precio
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 17,
              color: "#696871",
              maxWidth: 540,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Un único pack con todas las funcionalidades que se adapta a medida que creces. Empieza
            hoy a digitalizar y optimizar tu negocio de servicios a domicilio / técnicos de campo.
          </p>
        </div>

        {/* Calculator card */}
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            background: "#FAF8FB",
            borderRadius: 24,
            border: "1px solid #E8E8E8",
            padding: "48px",
            display: "flex",
            gap: 48,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {/* Left: controls */}
          <div style={{ flex: "1 1 320px" }}>
            {/* Reservas */}
            <label style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 15, color: "#02021E", display: "block", marginBottom: 8 }}>
              Reservas por mes:
            </label>
            <select
              value={reservas}
              onChange={(e) => setReservas(Number(e.target.value))}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: 10,
                border: "1.5px solid #E8E8E8",
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                marginBottom: 24,
                background: "white",
                color: "#02021E",
                cursor: "pointer",
              }}
            >
              {reservasOptions.map((o) => (
                <option key={o} value={o}>{o} servicios</option>
              ))}
            </select>

            {/* Profesionales */}
            <label style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 15, color: "#02021E", display: "block", marginBottom: 8 }}>
              Número de profesionales:
            </label>
            <input
              type="number"
              min={1}
              max={50}
              value={profesionales}
              onChange={(e) => setProfesionales(Math.max(1, Number(e.target.value)))}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: 10,
                border: "1.5px solid #E8E8E8",
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                marginBottom: 24,
                background: "white",
                color: "#02021E",
                boxSizing: "border-box",
              }}
            />

            {/* Toggle */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: annual ? "#696871" : "#02021E", fontWeight: annual ? 400 : 600 }}>
                Mensualmente
              </span>
              <button
                onClick={() => setAnnual(!annual)}
                style={{
                  width: 50,
                  height: 26,
                  borderRadius: 13,
                  background: annual ? "#631CFF" : "#E8E8E8",
                  border: "none",
                  position: "relative",
                  cursor: "pointer",
                  transition: "background 0.2s",
                  flexShrink: 0,
                }}
                aria-label="Toggle annual billing"
              >
                <span
                  style={{
                    position: "absolute",
                    top: 3,
                    left: annual ? 25 : 3,
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "white",
                    transition: "left 0.2s",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                  }}
                />
              </button>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: annual ? "#02021E" : "#696871", fontWeight: annual ? 600 : 400 }}>
                Anualmente{" "}
                <span style={{ color: "#631CFF", fontSize: 12, fontWeight: 600 }}>-20%</span>
              </span>
            </div>
          </div>

          {/* Right: price display */}
          <div
            style={{
              flex: "0 0 260px",
              background: "linear-gradient(135deg, #631CFF 0%, #4A10D4 100%)",
              borderRadius: 20,
              padding: "40px 32px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Offer badge */}
            {annual && (
              <div
                style={{
                  position: "absolute",
                  top: -10,
                  right: -10,
                  width: 80,
                  height: 80,
                  background: "#EEFE3A",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Gabarito', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#631CFF",
                  transform: "rotate(15deg)",
                }}
              >
                Oferta
              </div>
            )}
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 18, color: "rgba(255,255,255,0.8)", marginBottom: 8 }}>
              Todo Incluido
            </p>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 4, marginBottom: 8 }}>
              <span
                style={{
                  fontFamily: "'Gabarito', sans-serif",
                  fontWeight: 700,
                  fontSize: 56,
                  color: "white",
                  lineHeight: 1,
                }}
              >
                €{price.toFixed(0)}
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.7)", marginBottom: 8 }}>
                / mes
              </span>
            </div>
            {annual && (
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 24 }}>
                Facturado anualmente
              </p>
            )}
            <Link
              href="https://www.godolphy.com/darme-de-alta/"
              target="_blank"
              style={{
                display: "block",
                background: "#EEFE3A",
                color: "#631CFF",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 24px",
                borderRadius: 99,
                textDecoration: "none",
                transition: "opacity 0.15s",
                marginTop: 16,
              }}
            >
              Empezar 30 días gratis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
