"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DATA, Venta } from "@/app/data/VentasDummy";
export default function Grafica() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={DATA} margin={{ top: 5, bottom: 5 }}>
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="ventas"
          stroke="#ffa31a"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
