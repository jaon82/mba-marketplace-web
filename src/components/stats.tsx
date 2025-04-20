import {
  SaleTag02Icon,
  Store04Icon,
  UserMultipleIcon,
} from "@hugeicons/core-free-icons";
import StatsItem from "./stats-item";

export default function Stats() {
  return (
    <div className="flex flex-col gap-4">
      <StatsItem icon={SaleTag02Icon} label="Produtos vendidos" quantity={24} />
      <StatsItem icon={Store04Icon} label="Produtos anunciados" quantity={56} />
      <StatsItem
        icon={UserMultipleIcon}
        label="Pessoas visitantes"
        quantity={1238}
        grayScale
      />
    </div>
  );
}
