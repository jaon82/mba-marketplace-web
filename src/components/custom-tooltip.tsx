import { UserMultipleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import dayjs from "dayjs";

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

export default function CustomTooltip({
  active,
  payload,
  label,
}: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const dateFormatted = dayjs(label).format("DD [de] MMMM");
    return (
      <div className="flex flex-col gap-2 bg-white p-3 rounded-2 shadow-md">
        <p className="text-label-sm text-gray-400 uppercase">{`${dateFormatted}`}</p>
        <p className="flex items-center gap-2 text-body-xs text-gray-300">
          <HugeiconsIcon
            icon={UserMultipleIcon}
            size={16}
            className={"text-gray-300"}
          />
          {`${payload[0].value} visitantes`}
        </p>
      </div>
    );
  }

  return null;
}
