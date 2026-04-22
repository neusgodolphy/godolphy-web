"use client";
import Link from "next/link";

const industries = [
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

const features = [
  "Reservas online",
  "Agenda digital",
  "Pagos y depósitos",
  "Múltiples ubicaciones",
  "Gestión de clientes",
  "Geolocalización equipo",
  "Facturación y reporte",
  "Equipo y horarios",
  "Fidelización AI",
  "Servicios a domicilio",
  "Cálculo de distancias",
];

const resources = [
  "Blog",
  "Documentación",
  "API",
];

export default function Footer() {
  return (
    <footer style={{ background: "#02021E", color: "white", paddingTop: 80 }}>
      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 48,
            paddingBottom: 64,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontFamily: "'Gabarito', sans-serif", fontWeight: 700, fontSize: 24, color: "white" }}>
                godolphy
              </span>
              <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#EEFE3A", marginLeft: 3, marginBottom: 4 }} />
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 24 }}>
              El motor de reservas con IA para servicios a domicilio y técnicos de campo.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://www.instagram.com/godolphy" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", textDecoration: "none", transition: "background 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/godolphy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", textDecoration: "none", transition: "background 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 16, color: "white", marginBottom: 20 }}>
              Industrias
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {industries.map((item) => (
                <li key={item}>
                  <a href="#sectores" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 16, color: "white", marginBottom: 20 }}>
              Funcionalidades
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {features.map((item) => (
                <li key={item}>
                  <a href="#funcionalidades" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + CTA */}
          <div>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 16, color: "white", marginBottom: 20 }}>
              Recursos
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px", display: "flex", flexDirection: "column", gap: 10 }}>
              {resources.map((item) => (
                <li key={item}>
                  <a href="#recursos" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 16, color: "white", marginBottom: 12 }}>
                Darme de alta
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>
                Prueba godolphy durante 30 días.
              </p>
              <Link
                href="https://www.godolphy.com/darme-de-alta/"
                target="_blank"
                style={{
                  display: "inline-flex",
                  padding: "10px 20px",
                  borderRadius: 99,
                  background: "#EEFE3A",
                  color: "#631CFF",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                Empezar gratis
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "24px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.3)", margin: 0 }}>
            © {new Date().getFullYear()} Godolphy. Todos los derechos reservados.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Política de privacidad", "Términos", "Cookies", "RGPD", "Aviso legal"].map((link) => (
              <a key={link} href="#" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
