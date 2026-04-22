"use client";
import Link from "next/link";

const checkIcon = (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
    <circle cx="12.5" cy="12.5" r="12.5" fill="#631CFF" opacity="0.15" />
    <path d="M7 12.5L10.5 16L18 9" stroke="#631CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type SectionProps = {
  tag?: string;
  title: string;
  bullets?: string[];
  description?: string;
  cta?: string;
  ctaHref?: string;
  imageAlt: string;
  imageSrc?: string;
  reverse?: boolean;
  bgColor?: string;
};

function FeatureRow({
  tag,
  title,
  bullets,
  description,
  cta,
  ctaHref,
  imageAlt,
  imageSrc,
  reverse,
  bgColor = "white",
}: SectionProps) {
  return (
    <section style={{ background: bgColor, padding: "80px 0" }}>
      <div
        className="section-container"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 60,
          flexDirection: reverse ? "row-reverse" : "row",
          flexWrap: "wrap",
        }}
      >
        {/* Text */}
        <div style={{ flex: "1 1 460px", minWidth: 280 }}>
          {tag && (
            <span
              style={{
                display: "inline-block",
                background: "#E8E8FF",
                color: "#631CFF",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: 13,
                padding: "4px 12px",
                borderRadius: 99,
                marginBottom: 16,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              {tag}
            </span>
          )}
          <h2
            style={{
              fontFamily: "'Gabarito', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(26px, 3vw, 42px)",
              lineHeight: 1.2,
              color: "#02021E",
              marginBottom: 20,
            }}
          >
            {title}
          </h2>
          {description && (
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 17,
                color: "#696871",
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              {description}
            </p>
          )}
          {bullets && (
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 14 }}>
              {bullets.map((b) => (
                <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{ flexShrink: 0, marginTop: 1 }}>{checkIcon}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#4E4E62", lineHeight: 1.5 }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          )}
          {cta && ctaHref && (
            <Link href={ctaHref} className="btn-primary" style={{ background: "#631CFF", color: "white", borderColor: "#631CFF" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#EEFE3A";
                (e.currentTarget as HTMLElement).style.borderColor = "#EEFE3A";
                (e.currentTarget as HTMLElement).style.color = "#631CFF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#631CFF";
                (e.currentTarget as HTMLElement).style.borderColor = "#631CFF";
                (e.currentTarget as HTMLElement).style.color = "white";
              }}
            >
              {cta}
            </Link>
          )}
        </div>

        {/* Image placeholder */}
        <div
          style={{
            flex: "1 1 460px",
            minWidth: 280,
            borderRadius: 20,
            overflow: "hidden",
            background: "linear-gradient(135deg, #E8E8FF 0%, #F0ECFF 100%)",
            aspectRatio: "4/3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 300,
          }}
        >
          {imageSrc ? (
            <img src={imageSrc} alt={imageAlt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <span style={{ color: "#631CFF", opacity: 0.3, fontSize: 13, fontFamily: "'Inter', sans-serif" }}>
              {imageAlt}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default function FeatureSections() {
  return (
    <>
      <FeatureRow
        title="Tus clientes reservan y realizan cambios sin molestar."
        description="Ofrece libertad a los clientes para reservar a cualquier hora y realizar cambios dentro de tu política de empresa. El cliente podrá reservar con su teléfono, seleccionar profesional si lo desea, ubicación, día y hora."
        cta="Ver demo"
        ctaHref="#demo"
        imageAlt="agenda digital en el momento de la selección de la hora"
        bgColor="#FAF8FB"
      />
      <FeatureRow
        reverse
        title="Opciones de pago flexibles con garantía para todos."
        bullets={[
          "Solicita un depósito para consolidar compromiso.",
          "Cobra una vez realizado el servicio y evita barreras de entrada.",
          "Reduce cancelaciones con penalizaciones según política.",
        ]}
        cta="Ver más"
        ctaHref="#precio"
        imageAlt="Procese pagos contra las tarjetas de crédito almacenadas"
      />
      <FeatureRow
        title="El equipo está organizado."
        bullets={[
          "App muy visual para visualizar las citas y servicios.",
          "Notificación de nuevas citas y recordatorios.",
          "Especificaciones aportadas por el cliente.",
          "Chat con el cliente y notificaciones de retrasos.",
        ]}
        cta="Ver demo"
        ctaHref="#demo"
        imageAlt="Agenda inteligente para servicios en el local o a domicilio"
        bgColor="#FAF8FB"
      />
      <FeatureRow
        reverse
        title="Cálculo de distancias y precios en servicios a domicilio."
        description="Calcula los tiempos de desplazamiento en base al medio de transporte, andando, coche, transporte público y gestiona las reservas en base a los tiempos de transporte para no llegar tarde a ninguna cita."
        cta="Ver más"
        ctaHref="#demo"
        imageAlt="la agenda inteligente para servicios en el local o a domicilio"
      />
      <FeatureRow
        title="Incrementa la fidelización un 60% con mensajes de seguimiento humanos."
        description="Escoge la plantilla según tu sector y envía mensajes customizados con AI según el perfil de cada cliente, a tu nombre. Aumenta la tasa de fidelización un 60%."
        imageAlt="imagen de conversación de whatsapp con una clienta"
        bgColor="#FAF8FB"
      />
    </>
  );
}
