import { getProfile } from "@/api/get-profile";
import { signOut } from "@/api/sign-out";
import { ImageUploadIcon, Logout01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export function AccountMenu() {
  const navigate = useNavigate();

  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const { mutateAsync: signOutFn } = useMutation({
    mutationKey: ["logout"],
    mutationFn: signOut,
    onSuccess: () => {
      navigate("/sign-in");
    },
  });

  const handleLogout = async () => {
    await signOutFn();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
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
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56 p-4 bg-white flex flex-col gap-2"
      >
        <DropdownMenuLabel className="flex items-center gap-3">
          <div className="flex justify-center items-center w-12 h-12 rounded-[10px] bg-shape text-orange-base">
            {profile?.seller.avatar ? (
              <img
                src={profile.seller.avatar.url}
                className="w-8 h-8 rounded-[8px] object-cover"
                alt="Avatar"
              />
            ) : (
              <HugeiconsIcon
                icon={ImageUploadIcon}
                size={20}
                strokeWidth={1.5}
              />
            )}
          </div>
          <span className="text-body-sm text-gray-300">
            {profile?.seller.name}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex justify-between items-center text-orange-base text-action-sm focus-visible:outline-none cursor-pointer"
          onClick={handleLogout}
        >
          <span>Sair</span>
          <HugeiconsIcon icon={Logout01Icon} size={20} strokeWidth={1.5} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
