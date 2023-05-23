"use client";

import Image from "next/image";

interface AvatarProps {}

export const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="avatar"
      src="/images/placeholder.jpg"
    />
  );
};
