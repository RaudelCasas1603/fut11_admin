import {Bell} from "lucide-react"
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <Image
            src="/logos/FUT11-NGRO_COMPLETO.svg"
            alt="Logo"
            width={72}
            height={72}
            loading="eager"
          />
          Fut11 Administrador</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
         <Bell />
        </button>
      </div>
    </div>
  );
}
