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
      {/* Contenedor de jerseys más vendido */}

      <ul className="list gap-2 h-[200px] overflow-y-auto">
        <h3 className="font-bold text-base">Jerseys más vendidos</h3>
        <li className="list-row border border-base-300 items-center">
          <div className="rounded-full p-4 h-6 w-6 flex justify-center items-center bg-yellow-300">
            1
          </div>
          <div className="flex flex-row gap-4">
          <Image src={"/jersey.jpeg"} width={56} height={56} alt="Jersey" />
          <div className="flex flex-col gap-0">
            <span>Real Madrid Local</span>
            <span>2026/27</span>
          </div>
          </div>
          <div className="flex flex-col justify-center gap-0">
            <span className="text-center font-bold">6</span>
            <span>vendidos</span>
          </div>
        </li>
        <li className="list-row border border-base-300 items-center">
          <div className="rounded-full p-4 h-6 w-6 flex justify-center items-center bg-yellow-300"> 
            
            1
          </div>
          <div className="flex flex-row gap-4">
          <Image src={"/jersey.jpeg"} width={56} height={56} alt="Jersey" />
          <div className="flex flex-col gap-0">
            <span>Real Madrid Local</span>
            <span>2026/27</span>
          </div>
          </div>
          <div className="flex flex-col justify-center gap-0">
            <span className="text-center font-bold">6</span>
            <span>vendidos</span>
          </div>
        </li>
        <li className="list-row border border-base-300 items-center">
          <div className="rounded-full p-4 h-6 w-6 flex justify-center items-center bg-yellow-300">
            1
          </div>
          <div className="flex flex-row gap-4">
          <Image src={"/jersey.jpeg"} width={56} height={56} alt="Jersey" />
          <div className="flex flex-col gap-0">
            <span>Real Madrid Local</span>
            <span>2026/27</span>
          </div>
          </div> 
          <div className="flex flex-col justify-center gap-0">
            <span className="text-center font-bold">6</span>
            <span>vendidos</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
