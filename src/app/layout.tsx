import type { ReactNode } from "react";
import "./globals.css";

type Props = {
  children: ReactNode;
};

// Since we have a `[locale]` dynamic segment, this root layout simply renders children.
export default function RootLayout({ children }: Props) {
  return children;
}

