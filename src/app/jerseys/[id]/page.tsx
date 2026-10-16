import BotonRegresar from "@/app/components/ui/BotonRegresar";
import { Pencil, Trash, Clock3 } from "lucide-react";
import Image from "next/image";

export default function detallesJersey() {
  return (
    <div className="space-y-5">
      <div className="relative flex flex-row items-center justify-center w-full">
        <div className="absolute left-0">
          <BotonRegresar />
        </div>
        <span className="font-medium text-xl">Chivas Local 2026/27</span>
        <div className="absolute right-0 flex flex-row gap-2">
          <Pencil className="text-primary text-xl" />
          <Trash className="text-error" />
        </div>
      </div>
      <div className="w-full h-1/3 flex flex-col gap-2">
        <Image
          src={"/jersey.jpeg"}
          width={150}
          height={150}
          alt="Jersey"
          className="mx-auto"
        />
        <h4 className="text-lg font-medium">Chivas | Local</h4>
        <span className="text-base text-gris">2026/27</span>
        <div className="flex flex-col gap-2 w-full">
          <span>Tallas disponibles</span>
          <div className="w-full grid grid-cols-3 ">
            <div className="flex flex-row gap-2 w-1/3">
              <span className="text-gris">S</span>
              <span className="font-bold">16</span>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 ">
            <div className="flex flex-row gap-2 w-1/3">
              <span className="text-gris">M</span>
              <span className="font-bold">16</span>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 ">
            <div className="flex flex-row gap-2 w-1/3">
              <span className="text-gris">L</span>
              <span className="font-bold">16</span>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 ">
            <div className="flex flex-row gap-2 w-1/3">
              <span className="text-gris">XL</span>
              <span className="font-bold">2</span>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 ">
            <div className="flex flex-row gap-2 w-1/3">
              <span className="text-gris">2XL</span>
              <span className="font-bold">6</span>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 ">
            <div className="flex flex-row gap-2 w-1/3">
              <span className="text-gris">3XL</span>
              <span className="font-bold">2</span>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 ">
            <div className="flex flex-row gap-2 w-1/3">
              <span className="text-gris">4XL</span>
              <span className="font-bold">4</span>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-md btn-primary flex flex-row gap-2">
        <Clock3 className="text-black" />
        <span>Ver historial de movimientos</span>
      </button>
    </div>
  );
}
