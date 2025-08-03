"use client";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
};

export function Avatar({ src, alt }: Props) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className="w-[180px] h-[180px] rounded-full object-cover"
      onError={() =>
        setImgSrc(
          "/avatarPlaceholder.png"
        )
      }
    />
  );
}
