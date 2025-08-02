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
      className="w-24 h-24 rounded-full object-cover"
      onError={() =>
        setImgSrc(
          "https://api.dicebear.com/7.x/personas/svg?seed=profile"
        )
      }
    />
  );
}
