import BotonRegresar from "@/app/components/ui/BotonRegresar";
import Image from "next/image";
import Link from "next/link";

export default function RegistroStock() {
  return (
    <div className="space-y-5">
      <div className="relative flex flex-row items-center justify-center w-full">
        <div className="absolute left-0">
          <BotonRegresar />
        </div>
        <span className="font-medium text-xl">Registrar entrada stock</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 15 }).map((_, index) => (
          <Link href={"/registrar/registroStock/id"} key={index}>
            <div className="card bg-base-100  shadow-sm border border-base-300 py-2">
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
          </Link>
        ))}
      </div>
    </div>
  );
}
