import { ImageResponse } from "next/og";

export const alt = "PLNLY — Built bespoke. Yours to run.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK_2 = "#06080A";
const CLOUD = "#F0F2F5";
const CLOUD_DIM = "#AEB3B8";
const CORAL = "#FF3D00";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px 96px",
          background: INK_2,
          backgroundImage: `radial-gradient(circle at 88% 82%, rgba(255,61,0,0.30) 0%, rgba(255,61,0,0.12) 32%, rgba(255,61,0,0) 62%)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <div style={{ width: 34, height: 5, background: CORAL, marginRight: 14, marginBottom: 4 }} />
          <div style={{ fontSize: 30, letterSpacing: 6, color: CLOUD, display: "flex" }}>PLNLY</div>
          <div style={{ width: 9, height: 9, borderRadius: 999, background: CORAL, marginLeft: 10, marginBottom: 4 }} />
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            lineHeight: 1.15,
            color: CLOUD_DIM,
            marginTop: 36,
            maxWidth: 880,
          }}
        >
          We set up the AI.{" "}
          <span style={{ color: CLOUD, marginLeft: 16 }}>You run the house.</span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: CLOUD, marginTop: 30 }}>
          Built bespoke. Yours to run.
        </div>
      </div>
    ),
    { ...size }
  );
}
