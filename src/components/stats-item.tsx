import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";

interface StatsItemProps {
  icon: IconSvgElement;
  quantity: number;
  label: string;
  grayScale?: boolean;
}

export default function StatsItem({
  icon: Icon,
  label,
  quantity,
  grayScale = false,
}: StatsItemProps) {
  return (
    <div className="flex items-center gap-4 p-3 pr-7 rounded-[20px] bg-white">
      <div className="w-20 h-21.5 flex justify-center items-center bg-blue-light rounded-[12px]">
        <HugeiconsIcon
          icon={Icon}
          size={40}
          className={grayScale ? "text-gray-300" : "text-blue-dark"}
        />
      </div>
      <div>
        <div className="font-dm-sans text-title-lg text-gray-400">
          {quantity}
        </div>
        <div className="text-body-xs text-gray-300 max-w-16">{label}</div>
      </div>
    </div>
  );
}
