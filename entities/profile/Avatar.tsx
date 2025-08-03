"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
};

export function Avatar({ src, alt }: Props) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={180}
      height={180}
      className="rounded-full object-cover"
      onError={() =>
        setImgSrc(
          "/avatarPlaceholder.png"
        )
      }
    />
  );
}
