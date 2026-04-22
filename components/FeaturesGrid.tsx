"use client";
const features = [
  {
    icon: "💬",
    title: "fidelización AI",
    description:
      "Comunicaciones automatizadas por WhatsApp que se sienten más humanas con un mensaje personalizado con AI.",
  },
  {
    icon: "🏠",
    title: "Servicios a domicilio",
    description:
      "Permite reservas en base ubicación y cálculo de los tiempos necesarios para el servicio + desplazamiento.",
  },
  {
    icon: "📅",
    title: "Reservas online",
    description:
      "Permite reservas fáciles para el usuario y adaptadas a tu negocio con cálculo de los tiempos y precios.",
  },
  {
    icon: "💳",
    title: "Pagos y depósitos",
    description:
      "Solicita un depósito porcentual o fijo en el momento de la reserva para consolidar el compromiso de los clientes.",
  },
  {
    icon: "📍",
    title: "Múltiples ubicaciones",
    description:
      "Permite reservar entre varias ubicaciones o salones, o citas a domicilio. Asigna profesionales y precios a cada ubicación.",
  },
  {
    icon: "👥",
    title: "Gestión de clientes",
    description:
      "Gestiona toda la información de los clientes desde un único lugar, reservas, métodos de pago, etc.",
  },
  {
    icon: "🗺️",
    title: "Geolocalización equipo",
    description:
      "Visualiza la ubicación de tu equipo, asigna nuevos proyectos y servicios, incrementa el precio en base ubicación, etc.",
  },
  {
    icon: "📊",
    title: "Facturación y reporte",
    description:
      "Descárgate un excel periódico con todos los datos de ventas para poder ejecutar una correcta contabilidad.",
  },
  {
    icon: "🕐",
    title: "Equipo y horarios",
    description:
      "Gestiona los horarios del equipo interno o freelance, sus vacaciones, qué servicios realizan, precios, comisiones, etc.",
  },
];

export default function FeaturesGrid() {
  return (
    <section style={{ background: "white", padding: "100px 0" }}>
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: "'Gabarito', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 4vw, 55px)",
              lineHeight: 1.2,
              color: "#02021E",
              marginBottom: 20,
              maxWidth: 780,
              margin: "0 auto 20px",
            }}
          >
            Maximiza la experiencia de clientes y empleados mientras crece tu negocio.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 17,
              color: "#696871",
              maxWidth: 650,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Godolphy es un software para servicios a domicilio y técnicos de campo que mejora los
            procesos optimizando rutas y mejorando la vida de los empleados.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: 24,
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                background: "#FAF8FB",
                borderRadius: 16,
                padding: "40px 40px 40px 40px",
                border: "1px solid #E8E8E8",
                transition: "box-shadow 0.2s, transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 8px 32px rgba(99,28,255,0.12)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "none";
                el.style.transform = "none";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 16,
                  background: "#E8E8FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  marginBottom: 20,
                }}
              >
                {feature.icon}
              </div>
              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#02021E",
                  marginBottom: 12,
                  textTransform: "capitalize",
                }}
              >
                {feature.title}
              </h3>
              {/* Description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  color: "#696871",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
