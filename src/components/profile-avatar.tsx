import { ImageUploadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function ProfileAvatar() {
  return (
    <div className="flex justify-center items-center w-12 h-12 rounded-[10px] cursor-pointer bg-shape text-orange-base">
      <HugeiconsIcon icon={ImageUploadIcon} size={20} strokeWidth={1.5} />
    </div>
  );
}
