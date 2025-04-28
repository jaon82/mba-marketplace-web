interface StatusTagProps {
  status: "anunciado" | "vendido" | "desativado";
}

export default function StatusTag({ status }: StatusTagProps) {
  return (
    <div
      data-status={status}
      className="flex items-center px-2 py-1 rounded-full data-[status=anunciado]:bg-blue-dark data-[status=vendido]:bg-success data-[status=desativado]:bg-gray-300 text-label-sm text-white uppercase"
    >
      {status}
    </div>
  );
}
