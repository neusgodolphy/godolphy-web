"use client";
const testimonials = [
  {
    name: "Neus Figueres",
    role: "CEO Orgasmi",
    text: "Hemos mejorado muchísimo el tiempo de transporte entre servicio y aumentado el número de servicios diarios por profesional. Además la experiencia del cliente ha mejorado notablemente.",
    initials: "NF",
  },
  {
    name: "Silvia Gonzalo",
    role: "Terapeuta",
    text: "Mis clientes pueden agendar citas y cambiar las horas todo dentro de la política y sin tener que llamarme. He ganado en tranquilidad y tiempo libre.",
    initials: "SG",
  },
  {
    name: "Ricardo Alemany",
    role: "Businessman",
    text: "Las rutas de mis empleados son mucho más óptimas, ellos mismos pueden comunicarse con los clientes y brindar una mejor experiencia de servicio.",
    initials: "RA",
  },
];

export default function TestimonialsSection() {
  return (
    <section style={{ background: "#FAF8FB", padding: "100px 0" }}>
      <div className="section-container">
        {/* Header */}
        <h2
          style={{
            fontFamily: "'Gabarito', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "#02021E",
            textAlign: "center",
            marginBottom: 64,
            maxWidth: 600,
            margin: "0 auto 64px",
          }}
        >
          La confianza de nuestros clientes
        </h2>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: "white",
                borderRadius: 16,
                padding: "40px",
                border: "1px solid #E8E8E8",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(99,28,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Stars */}
              <div style={{ color: "#EEFE3A", fontSize: 18, marginBottom: 16, display: "flex", gap: 2 }}>
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} style={{ color: "#631CFF" }}>{s}</span>
                ))}
              </div>
              {/* Text */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 16,
                  color: "#4E4E62",
                  lineHeight: 1.7,
                  marginBottom: 32,
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>
              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #631CFF, #4A10D4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 15, color: "#02021E", margin: 0 }}>
                    {t.name}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#696871", margin: 0 }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
