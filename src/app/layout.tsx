import type { Metadata, Viewport } from "next";
import BottomDock from "./components/BottomDock";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "FUT11 Inventario",
  description: "Administración de jerseys",
  icons: {
    icon: "/logos/FUT11-CORTO.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="corporate">
      <body className="h-dvh overflow-hidden bg-base-200">
        {/* Contenedor principal */}
        <div
          className="
            relative
            mx-auto
            flex
            h-dvh
            w-full
            max-w-md
            flex-col
            overflow-hidden
            bg-base-100
          "
        >
          <Navbar />
          {/* Contenido de cada página */}
          <main
            className="
              min-h-0
              flex-1
              overflow-y-auto
              overscroll-contain
              px-4
              pt-[calc(env(safe-area-inset-top)+1rem)]
              pb-28
            "
          >
            {children}
          </main>

          {/* Navegación inferior */}
          <BottomDock />
        </div>
      </body>
    </html>
  );
}
