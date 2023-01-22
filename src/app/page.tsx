"use client";
import Header from "@/Components/Header";
import { Features } from "@/Components/Features";
import Pricing from "@/Components/Pricing";

export default function page() {
  return (
    <div>
      <Header />
      <Pricing />
      <Features />
    </div>
  );
}
