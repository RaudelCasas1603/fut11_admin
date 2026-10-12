import BotonRegresar from "@/app/components/ui/BotonRegresar";

export default function RegistroStock() {
  return (
    <div className="space-y-5">
      <div className="relative flex flex-row items-center justify-center w-full">
        <div className="absolute left-0">
          <BotonRegresar />
        </div>
        <span className="font-medium text-xl">Registro ingreso stock</span>
      </div>
    </div>
  );
}
