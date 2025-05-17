type StatusTag = "available" | "sold" | "cancelled";

interface StatusTagProps {
  status: StatusTag;
}

const statusTagMap: Record<StatusTag, string> = {
  available: "Anunciado",
  sold: "Vendido",
  cancelled: "Desativado",
};

export default function StatusTag({ status }: StatusTagProps) {
  return (
    <div
      data-status={status}
      className="flex items-center px-2 py-1 rounded-full data-[status=available]:bg-blue-dark data-[status=sold]:bg-success data-[status=cancelled]:bg-gray-300 text-label-sm text-white uppercase"
    >
      {statusTagMap[status]}
    </div>
  );
}
