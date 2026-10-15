import BotonRegresar from "@/app/components/ui/BotonRegresar";
import Image from "next/image";
import { Plus } from "lucide-react";

export default function detallesRegistroStock() {
  return (
    <div className="space-y-5 h-full relative ">
      <div className="relative flex flex-row items-center justify-center w-full">
        <div className="absolute left-0">
          <BotonRegresar />
        </div>
        <span className="font-medium text-xl">Registrar entrada stock</span>
      </div>
      <div className="card bg-gray-100 p-4 shadow-md flex flex-row items-center gap-6">
        <Image
          src={"/jersey.jpeg"}
          width={100}
          height={100}
          alt="Jersey"
          className="rounded-md"
        />
        <div className="flex flex-col gap-0">
          <span className="font-medium text-xl">Chivas Local</span>
          <span className="text-gray-500">2026/27 | Local</span>
        </div>
      </div>
      {/* Formulario */}
      <div className="grid grid-cols-2 gap-4">
        <label className="input w-full aspect-square flex flex-col items-center justify-center p-4">
          <span className="label">S</span>
          <input
            type="number"
            placeholder="cantidad"
            className="w-full text-center"
          />
        </label>
        <label className="input w-full aspect-square flex flex-col items-center justify-center p-4">
          <span className="label">S</span>
          <input
            type="number"
            placeholder="cantidad"
            className="w-full text-center"
          />
        </label>
      </div>

      <button className="w-full btn btn-lg btn-primary absolute bottom-0 focus:outline-none focus:ring-0">
        <Plus />
        Agregar inventario
      </button>
    </div>
  );
}
