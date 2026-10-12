import { Search, SlidersHorizontal, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Jerseys() {
  return (
    <div className="space-y-5">
      <h3 className="font-bold text-2xl">Jerseys</h3>
      {/* Seccion de busqueda y filtros */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center gap-2 h-auto">
          <label className="input w-full">
            <Search />
            <input type="search" className="grow" placeholder="Search" />
          </label>
          <button className="btn btn-sm btn-secondary h-10">
            <SlidersHorizontal />
          </button>
        </div>
        <form className="filter">
          <input className="btn btn-square " type="reset" value="×" />
          <input
            className="btn bg-base-200"
            type="radio"
            name="stock"
            aria-label="Stock normal (10)"
          />
          <input
            className="btn bg-base-200"
            type="radio"
            name="stock"
            aria-label="Stock bajo (5)"
          />
        </form>
      </div>

      {/* Lista de jerseys */}
    <Link href={"/jerseys/id"}>
      <ul className="list bg-base-100 rounded-box shadow-md gap-3 ">
        {Array.from({ length: 13 }).map((_, index) => (
        <li  key={index} className="list-row items-center border border-base-300">
          <Image
            src={"/jersey.jpeg"}
            alt="Jersye"
            width={72}
            height={72}
            className="rounded-md"
          />
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <span className="font-medium text-base">Chivas Local </span>
                <span className="text-gray-400 text-base">2026/27 | Local</span>
              </div>
              <div className="flex flex-row items-baseline gap-2">
                <div className="rounded-full h-2 w-2 bg-green-700"></div>
                <div className="flex flex-col gap-0 text-sm">
                  <span className="leading-none">En stock</span>
                  <span className="leading-none">36</span>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row gap-3">
              <div className="bg-base-300/50 rounded-md flex flex-row gap-2 p-1 text-gray-700">
                <span>S</span>
                <span>8</span>
              </div>
              <div className="bg-base-300/50 rounded-md flex flex-row gap-2 p-1 text-gray-700">
                <span>M</span>
                <span>8</span>
              </div>
              <div className="bg-base-300/50 rounded-md flex flex-row gap-2 p-1 text-gray-700">
                <span>L</span>
                <span>8</span>
              </div>
              <div className="bg-base-300/50 rounded-md flex flex-row gap-2 p-1 text-gray-700">
                <span>XL</span>
                <span>8</span>
              </div>
              <div className="bg-base-300/50 rounded-md flex flex-row gap-2 p-1 text-gray-700">
                <span>2XL</span>
                <span>8</span>
              </div>
            </div>
          </div>
          <ChevronRight />
        </li>
        ))}
      </ul>
      </Link>
    </div>
  );
}
