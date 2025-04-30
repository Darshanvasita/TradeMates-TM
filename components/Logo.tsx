import Image from "next/image";
import logo from "../public/TM-1.png";

type LogoProps = {
  width?: number;
  height?: number;
};

export function Logo({ width = 200, height = 100 }: LogoProps) {
  return (
    <Image
      src={logo}
      alt="TradeMates Logo"
      width={width}
      height={height}
      priority
    />
  );
}
