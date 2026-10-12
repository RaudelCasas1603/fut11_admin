import { CircleDollarSign, Box, Shirt } from "lucide-react";

export default function Registrar() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-8">
      <button className="flex flex-row items-center justify-center gap-4 w-84  rounded-2xl bg-accent font-bold shadow-lg p-4">
        <Shirt className="text-base-100 w-16 h-16" />
        <span className="text-base-100 text-lg text-center tracking-wide">
          REGISTRAR JERSEY
        </span>
      </button>
      <button className="flex flex-row items-center justify-center gap-4 w-84  rounded-2xl bg-accent font-bold shadow-lg p-4">
        <Box className="text-base-100 w-16 h-16" />
        <span className="text-base-100 text-lg text-center tracking-wide">
          REGISTAR INGRESO STOCK
        </span>
      </button>
      <button className="flex flex-row items-center justify-center gap-4 w-84 rounded-2xl bg-accent font-bold shadow-lg p-4">
        <CircleDollarSign className="text-base-100 w-16 h-16" />
        <span className="text-base-100 text-lg text-center tracking-wide">
          REGISTRAR VENTA
        </span>
      </button>
    </div>
  );
}
