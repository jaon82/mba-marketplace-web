import { AlertCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function FormError({ error }: { error: string }) {
  return (
    <div className="flex items-center gap-2 text-body-xs text-danger">
      <HugeiconsIcon
        icon={AlertCircleIcon}
        size={16}
        className="cursor-pointer"
      />
      {error}
    </div>
  );
}
