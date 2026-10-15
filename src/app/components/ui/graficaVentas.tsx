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
    <ResponsiveContainer width="90%" height="100%">
      <LineChart data={DATA} margin={{ top: 5, bottom: 5, left: 5, right:5 }}>
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="ventas"
          stroke="#000"
          activeDot={{ r: 6 }}
          
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
