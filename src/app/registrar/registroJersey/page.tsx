import BotonRegresar from "@/app/components/ui/BotonRegresar";
import { Plus } from "lucide-react";

export default function RegistroJersey() {
  return (
    <div className="space-y-5 h-1/2">
      <div className="relative flex flex-row items-center justify-center w-full">
        <div className="absolute left-0">
          <BotonRegresar />
        </div>
        <span className="font-medium text-xl">Registro Jersey</span>
      </div>
      <div className="flex flex-row w-full justify-center h-1/3">
      <label className="flex aspect-square flex-col items-center gap-3 rounded-3xl border-2 border-primary justify-center   ">
        <input type="file" multiple accept="image/*" className="hidden" />
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-neutral">
          <Plus size={30} strokeWidth={2.5} />
        </div>
      </label>
      </div>
      {/* Formulario */}
      <div className="w-full flex flex-col gap-4 text-lg">
        <fieldset className="w-full">
          <label className="label" htmlFor="nombre">
            {" "}
            Nombre{" "}
          </label>
          <input
            type="text"
            id="nombre"
            className="input w-full text-lg focus:outline-none focus:ring-0"
            placeholder="Nombre"
          />
        </fieldset>
        <fieldset className="w-full">
          <label className="label" htmlFor="equipo">
            {" "}
            Equipo{" "}
          </label>
          <input
            type="text"
            id="equipo"
            className="input w-full text-lg focus:outline-none focus:ring-0"
            placeholder="Equipo"
          />
        </fieldset>
        <div className="flex flex-row gap-4 w-full items-end">
          <fieldset className="w-1/2">
            <label className="label" htmlFor="temporada">
              {" "}
              Temporada{" "}
            </label>
            <input
              type="text"
              id="temporada"
              className="input w-full text-lg focus:outline-none focus:ring-0"
              placeholder="Temporada"
            />
          </fieldset>
          <fieldset className="w-1/2">
            <label htmlFor="tipo">Tipo</label>
            <select className="select text-lg" defaultValue="Local">
              <option disabled selected>
                Temporada
              </option>
              <option>Local</option>
              <option>Visitante</option>
            </select>
          </fieldset>
        </div>
        <div className="flex flex-row gap-4">
          <fieldset className="w-1/2 text-lg">
            <label className="label" htmlFor="costo">
              Costo
            </label>
            <div className="join items-stretch">
              <span className="join-item border text-lg border-gray-300 bg-base-200 px-3 flex items-center">
                $
              </span>
              <input
                type="number"
                className="input input-bordered text-lg join-item focus:outline-none focus:ring-0"
                placeholder="costo"
                min={0}
              />
            </div>
          </fieldset>
          <fieldset className="w-1/2 text-lg">
            <label className="label" htmlFor="precio">
              Precio
            </label>
            <div className="join items-stretch">
              <span className="join-item border border-gray-300 bg-base-200 px-3 flex items-center">
                $
              </span>
              <input
                type="number"
                className="input input-bordered join-item focus:outline-none focus:ring-0"
                placeholder="precio"
                min={0}
              />
            </div>
          </fieldset>
        </div>
        <div className="flex flex-row gap-4">
            <fieldset className="w-full text-lg flex flex-col">
            <label className="label " htmlFor="precio">
              Stock por talla
            </label>
            <div className="grid grid-cols-3 gap-2">
            <div className="join items-stretch">
              <span className="join-item border text-lg border-gray-300 bg-base-200 px-3 flex items-center">
                S
              </span>
              <input
                type="number"
                className="input input-bordered text-lg join-item focus:outline-none focus:ring-0"
                placeholder="stock"
                min={0}
                defaultValue={0}
              />
            </div>
            <div className="join items-stretch">
              <span className="join-item border text-lg border-gray-300 bg-base-200 px-3 flex items-center">
                M
              </span>
              <input
                type="number"
                className="input input-bordered text-lg join-item focus:outline-none focus:ring-0"
                placeholder="stock"
                min={0}
                defaultValue={0}
              />
            </div>
            <div className="join items-stretch">
              <span className="join-item border text-lg border-gray-300 bg-base-200 px-3 flex items-center">
                G
              </span>
              <input
                type="number"
                className="input input-bordered text-lg join-item focus:outline-none focus:ring-0"
                placeholder="stock"
                min={0}
                defaultValue={0}
              />
            </div>
            <div className="join items-stretch">
              <span className="join-item border text-lg border-gray-300 bg-base-200 px-3 flex items-center">
                XL
              </span>
              <input
                type="number"
                className="input input-bordered text-lg join-item focus:outline-none focus:ring-0"
                placeholder="stock"
                min={0}
                defaultValue={0}
              />
            </div>
            <div className="join items-stretch">
              <span className="join-item border text-lg border-gray-300 bg-base-200 px-3 flex items-center">
                2XL
              </span>
              <input
                type="number"
                className="input input-bordered text-lg join-item focus:outline-none focus:ring-0"
                placeholder="stock"
                min={0}
                defaultValue={0}
              />
            </div>
            </div>
          </fieldset>
        </div>
        <button className="btn btn-primary btn-md w-full text-base-300 text-xl mt-4">
           Guardar Jersey 
        </button>
      </div>
    </div>
  );
}
