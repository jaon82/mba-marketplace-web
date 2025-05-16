import { getProfile } from "@/api/get-profile";
import { ImageUploadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useQuery } from "@tanstack/react-query";

export default function ProfileAvatar() {
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  return (
    <div className="flex justify-center items-center w-12 h-12 rounded-[10px] cursor-pointer bg-shape text-orange-base">
      {profile?.seller.avatar ? (
        <img
          src={profile.seller.avatar.url}
          className="w-12 h-12 rounded-[10px] object-cover"
          alt="Avatar"
        />
      ) : (
        <HugeiconsIcon icon={ImageUploadIcon} size={20} strokeWidth={1.5} />
      )}
    </div>
  );
}
