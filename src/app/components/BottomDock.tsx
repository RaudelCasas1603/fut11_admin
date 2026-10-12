
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  House,
  Shirt,
  CirclePlus,
  ChartNoAxesColumn,
  Settings,
} from "lucide-react";

const opciones = [
  {
    nombre: "Inicio",
    ruta: "/",
    icono: House,
  },
  {
    nombre: "Jerseys",
    ruta: "/jerseys",
    icono: Shirt,
  },
  {
    nombre: "Registrar",
    ruta: "/registrar",
    icono: CirclePlus,
  },
  {
    nombre: "Reportes",
    ruta: "/reportes",
    icono: ChartNoAxesColumn,
  },
  {
    nombre: "Config.",
    ruta: "/configuracion",
    icono: Settings,
  },
];

export default function BottomDock() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegación principal"
      className="
        dock
        dock-md
        absolute!
        bottom-0
        z-50
        w-full
        border-t
        border-base-300
        bg-base-100
      "
    >
      {opciones.map((opcion) => {
        const Icono = opcion.icono;

        const activo =
          pathname === opcion.ruta ||
          (opcion.ruta !== "/" &&
            pathname.startsWith(opcion.ruta + "/"));

        return (
          <Link
            key={opcion.ruta}
            href={opcion.ruta}
            className={activo ? "dock-active" : ""}
            aria-current={activo ? "page" : undefined}
          >
            <Icono size={21} strokeWidth={1.8} />
            <span className="dock-label">
              {opcion.nombre}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
