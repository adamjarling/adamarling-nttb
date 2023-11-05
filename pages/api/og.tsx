import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default function ogRequest(req: NextRequest) {
  const { searchParams, host, protocol } = new URL(req.url);

  const cover = `${protocol}//${host}/_next/image?url=${encodeURIComponent(
    searchParams.get("cover") || "/images/IMG_9823.jpg"
  )}&w=1200&q=75`;

  return new ImageResponse(
    (
      <div tw="flex w-full h-full flex-col justify-end bg-slate-200 items-stretch">
        <img
          src={cover}
          alt=""
          tw="flex-1 w-full h-full"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
