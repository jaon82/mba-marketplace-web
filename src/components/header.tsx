import NavLink from "./nav-link";

import {
  ChartHistogramIcon,
  PackageIcon,
  PlusSignIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router";
import ProfileAvatar from "./profile-avatar";
import { Button } from "./ui/button";
import Logo from "/src/assets/logo.svg";

export default function Header() {
  return (
    <div className="border-b border-shape">
      <div className="flex h-20 justify-between items-center p-5">
        <img src={Logo} className="h-10" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <HugeiconsIcon
              icon={ChartHistogramIcon}
              size={20}
              strokeWidth={1.5}
            />
            Dashboard
          </NavLink>
          <NavLink to="/products">
            <HugeiconsIcon icon={PackageIcon} size={24} strokeWidth={1.5} />
            Produtos
          </NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link to="/products/new">
              <HugeiconsIcon icon={PlusSignIcon} size={20} strokeWidth={1.5} />
              Novo produto
            </Link>
          </Button>
          <ProfileAvatar />
        </div>
      </div>
    </div>
  );
}
