import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Premier Gym";
  const eyebrow = searchParams.get("eyebrow") ?? "Palma de Mallorca";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#111111",
          color: "#ffffff",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#B7A98F",
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 64,
            fontWeight: 200,
            letterSpacing: 4,
            textTransform: "uppercase",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#8A8A8A",
          }}
        >
          Premier Gym
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
