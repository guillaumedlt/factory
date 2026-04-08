import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Quanta — Cabinet d'Expertise IA à Monaco";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#151515",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              background: "#c8ee44",
            }}
          />
          <span style={{ color: "#ffffff", fontSize: "24px", fontWeight: 600 }}>
            Quanta
          </span>
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: "56px",
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: "24px",
            maxWidth: "800px",
          }}
        >
          Cabinet d&apos;expertise en intelligence artificielle.
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "22px",
            lineHeight: 1.5,
          }}
        >
          Principauté de Monaco
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            display: "flex",
            gap: "16px",
          }}
        >
          <div
            style={{
              background: "#c8ee44",
              color: "#151515",
              padding: "12px 24px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            quantamonaco.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
