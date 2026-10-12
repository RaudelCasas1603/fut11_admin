import BotonRegresar from "@/app/components/ui/BotonRegresar";
import { Plus } from "lucide-react";

export default function RegistroJersey() {
  return (
    <div className="space-y-5">
      <div className="relative flex flex-row items-center justify-center w-full">
        <div className="absolute left-0">
          <BotonRegresar />
        </div>
        <span className="font-medium text-xl">Registro Jersey</span>
      </div>
      <div className="flex justify-center mb-6">
        <label className="btn btn-primary btn-outline btn-square aspect-square w-64">
          <Plus/>
          <input 
            type="file" 
            multiple 
            accept="image/*" 
            className="hidden" 
          />
        </label>
      </div>

    </div>
  );
}
