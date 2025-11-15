import { NextResponse } from "next/server";

export async function GET() {
  const versionInfo = {
    android: "1.0.14",
    ios: "1.0.0",
    minAndroidVersion: "1.0.13",
    minIosVersion: "1.0.0",
    forceUpdate: true,
  };

  return NextResponse.json(versionInfo, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600", // 1시간 캐시
    },
  });
}
