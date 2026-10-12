"use client";
import { ChevronLeft } from "lucide-react";

import React from "react";
import { useRouter } from "next/navigation";

const BotonRegresar: React.FC = () => {
  const router = useRouter();

  return (
    <button
      className="flex flex-row gap-2 w-6 h-6"
      onClick={() => router.back()}
    >
        <ChevronLeft/>
    </button>
  );
};

export default BotonRegresar;
