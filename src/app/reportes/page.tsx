import Grafica from "../components/ui/graficaVentas";
import {
  Shirt,
  ShoppingCart,
  CircleDollarSign,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";
import Image from "next/image";
export default function Resportes() {
  return (
    <div className="space-y-5 overflow-y-hidden">
      <div className="w-full flex flex-row justify-between">
        <h3 className="text-2xl font-bold">Reportes</h3>
        <select
          className="select select-sm w-1/3"
          aria-label="Seleccionar periodo de tiempo"
          defaultValue="Mes"
        >
          <option disabled>Periodo</option>
          <option>Semana</option>
          <option>Mes</option>
        </select>
      </div>
      {/* Contenedor de cards de grafica  */}
      <div className="grid grid-cols-2 gap-2">
        <div className="card bg-base-200">
          <div className="card-body p-4">
            <div className="flex flex-row gap-4 items-center">
              <Shirt className="h-6 w-6 text-primary" />

              <div className="flex flex-col gap-1">
                <p className="text-xs">Jerseys en stock</p>
                <h2 className="text-2xl font-bold">124</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-200">
          <div className="card-body p-4">
            <div className="flex flex-row gap-4 items-center">
              <ShoppingCart className="h-6 w-6 text-primary" />

              <div className="flex flex-col gap-1">
                <p className="text-xs">Ventas</p>
                <h2 className="text-2xl font-bold">28</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body p-4">
            <div className="flex flex-row gap-4 items-center">
              <CircleDollarSign className="h-6 w-6 text-primary" />

              <div className="flex flex-col gap-1">
                <p className="text-xs">Ingresos</p>
                <h2 className="text-2xl font-bold">$ 12,460</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body p-4">
            <div className="flex flex-row gap-4 items-center">
              <ChartNoAxesColumnIncreasing className="h-6 w-6 text-primary" />

              <div className="flex flex-col gap-1">
                <p className="text-xs">Utilidad</p>
                <h2 className="text-2xl font-bold">$ 5,460</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contendor grafica */}
      <div className="w-full rounded-md shadow-md h-56 flex flex-col gap-4 border border-base-300">
        <Grafica />
      </div>
      {/* historial de las ventas */}

      <ul className="list">
        <li className="list-row">
          {/* debe de contener fecha, cantidad de jerseys, y monto total, al presionarse debe de disparar un modal con el listado de jerseys y talla  */}
        </li>
      </ul>
    </div>
  );
}
