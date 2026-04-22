"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #631CFF 0%, #4A10D4 60%, #331378 100%)",
        paddingTop: 160,
        paddingBottom: 0,
        position: "relative",
        overflow: "hidden",
        minHeight: 640,
        textAlign: "center",
      }}
    >
      {/* Background texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container" style={{ position: "relative" }}>
        {/* Main headline */}
        <h1
          style={{
            fontFamily: "'Gabarito', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(48px, 6vw, 90px)",
            lineHeight: 1.04,
            color: "white",
            marginBottom: 16,
          }}
        >
          El motor de reservas con IA
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(22px, 3vw, 35px)",
            lineHeight: 1.04,
            color: "rgba(255,255,255,0.9)",
            marginBottom: 20,
          }}
        >
          que te ayuda con tus finanzas
        </p>

        {/* Body text */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "26.92px",
            color: "rgba(255,255,255,0.8)",
            maxWidth: 708,
            margin: "0 auto 40px",
            letterSpacing: "0.5px",
          }}
        >
          Más allá de una gestión óptima de las reservas tu negocio precisa de inteligencia,
          y consejos para poder entender qué hay detrás de los datos.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <Link href="#demo" className="btn-primary">
            Demo
          </Link>
          <Link
            href="https://www.godolphy.com/darme-de-alta/"
            target="_blank"
            className="btn-outline"
          >
            Alta
          </Link>
        </div>

        {/* Trust stats */}
        <div
          style={{
            marginTop: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0,
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "+500", label: "negocios activos" },
            { value: "+60%", label: "más fidelización" },
            { value: "30 días", label: "gratis para probar" },
          ].map((stat, i) => (
            <div
              key={stat.value}
              style={{
                padding: "0 40px",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.2)" : "none",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Gabarito', sans-serif",
                  fontWeight: 700,
                  fontSize: 32,
                  color: "#EEFE3A",
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.65)",
                  marginTop: 4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave bottom */}
      <div
        style={{
          position: "absolute",
          bottom: -1,
          left: 0,
          right: 0,
          height: 120,
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 1920 120"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%", display: "block" }}
        >
          <path d="M0,60 C480,120 960,0 1920,60 L1920,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
