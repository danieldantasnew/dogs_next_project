import Photos from "@/components/photos/photos";
import { Metadata } from "next";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Dogs - Feed",
  description: "Feed de fotos da Dogs",
};

export default function Home() {
  return (
    <main style={{ margin: "2rem 0 8.5rem 0" }}>
      <Suspense fallback={"Carregando..."}>
        <Photos />
      </Suspense>
    </main>
  );
}
