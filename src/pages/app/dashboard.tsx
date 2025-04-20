import Graph from "@/components/graph";
import Stats from "@/components/stats";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="font-dm-sans text-title-md text-gray-500">
          Últimos 30 dias
        </h1>
        <h2 className="text-body-sm text-gray-300">
          Confira as estatísticas da sua loja no último mês
        </h2>
      </div>
      <div className="flex gap-6 justify-between">
        <Stats />
        <Graph />
      </div>
    </>
  );
}
