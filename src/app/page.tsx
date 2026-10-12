import {
  ShoppingCart,
  ChartNoAxesColumnIncreasing,
  CircleDollarSign,
  Shirt,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Grafica from "./components/ui/graficaVentas";

export default function Home() {
  const data = [
    { mes: "Ene", ventas: 4000 },
    { mes: "Feb", ventas: 3000 },
    { mes: "Mar", ventas: 2000 },
    { mes: "Abr", ventas: 2780 },
    { mes: "May", ventas: 1890 },
    { mes: "Jun", ventas: 2390 },
    { mes: "Jul", ventas: 3490 },
  ];

  return (
    <div className="space-y-5">
      {/* Encabezado */}
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-0">
          <h1 className="text-2xl font-bold">¡Hola!</h1>
          <p className="text-sm text-base-content/60">Resumen de tu periodo</p>
        </div>
        <select
          className="select w-1/3"
          aria-label="Seleccionar periodo de tiempo"
          defaultValue="Mes"
        >
          <option disabled selected>
            Periodo
          </option>
          <option>Semana</option>
          <option>Mes</option>
        </select>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-2 gap-3">
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
      {/* Grafica de ventas del periodo */}
      <div className="w-full rounded-md shadow-md h-64 flex flex-col gap-1">
        <span className="text-lg font-bold">Ventas del periodo</span>
        {/* Pendiente revisar tema del responsive */}
        <Grafica/>
      </div>

      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg font-bold">Productos destacados</span>
          <Link href={"/jerseys"}>
            <button className="btn btn-md btn-secondary">Ver todos</button>
          </Link>
        </div>
        {/* Contenedor cards */}
        <div className="flex flex-row gap-2">
          <div className="card bg-base-100 w-1/3 shadow-sm border border-base-300 py-2">
            <figure>
              <Image
                src="/jersey.jpeg"
                alt="Shoes"
                width={84}
                height={84}
                loading="eager"
                className="rounded-sm"
              />
            </figure>
            <div className="card-body p-2">
              <h2 className="card-title text-sm font-bold">Chivas 26/27</h2>
              <p className="text-green-700">
                <span className="text-sm ">Stock: </span>
                <span className="text-sm font-bold">12</span>
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-1/3 shadow-sm border border-base-300 py-2">
            <figure>
              <Image
                src="/jersey.jpeg"
                alt="Shoes"
                width={84}
                height={84}
                loading="eager"
                className="rounded-sm"
              />
            </figure>
            <div className="card-body p-2">
              <h2 className="card-title text-sm font-bold">Chivas 26/27</h2>
              <p className="text-green-700">
                <span className="text-sm ">Stock: </span>
                <span className="text-sm font-bold">12</span>
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-1/3 shadow-sm border border-base-300 py-2">
            <figure>
              <Image
                src="/jersey.jpeg"
                alt="Shoes"
                width={84}
                height={84}
                loading="eager"
                className="rounded-sm"
              />
            </figure>
            <div className="card-body p-2">
              <h2 className="card-title text-sm font-bold">Chivas 26/27</h2>
              <p className="text-green-700">
                <span className="text-sm ">Stock: </span>
                <span className="text-sm font-bold">12</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
