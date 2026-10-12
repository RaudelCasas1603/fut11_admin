import {ShoppingCart, ChartNoAxesColumnIncreasing, CircleDollarSign, Shirt } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-5">
      {/* Encabezado */}
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-0">
          <h1 className="text-2xl font-bold">¡Hola!</h1>
          <p className="text-sm text-base-content/60">Resumen de tu negocio</p>
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

      <div></div>
    </div>
  );
}
