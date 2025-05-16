import { getMetricsProductsAvailable } from "@/api/get-metrics-products-available";
import { getMetricsProductsSold } from "@/api/get-metrics-products-sold";
import { getMetricsViews } from "@/api/get-metrics-views";
import {
  SaleTag02Icon,
  Store04Icon,
  UserMultipleIcon,
} from "@hugeicons/core-free-icons";
import { useQuery } from "@tanstack/react-query";
import StatsItem from "./stats-item";

export default function Stats() {
  const { data: metricsProductsSold } = useQuery({
    queryKey: ["metrics-products-sold"],
    queryFn: getMetricsProductsSold,
  });

  const { data: metricsProductsAvailable } = useQuery({
    queryKey: ["metrics-products-available"],
    queryFn: getMetricsProductsAvailable,
  });

  const { data: metricsViews } = useQuery({
    queryKey: ["metrics-views"],
    queryFn: getMetricsViews,
  });

  return (
    <div className="flex flex-col gap-4">
      <StatsItem
        icon={SaleTag02Icon}
        label="Produtos vendidos"
        quantity={metricsProductsSold?.amount || 0}
      />
      <StatsItem
        icon={Store04Icon}
        label="Produtos anunciados"
        quantity={metricsProductsAvailable?.amount || 0}
      />
      <StatsItem
        icon={UserMultipleIcon}
        label="Pessoas visitantes"
        quantity={metricsViews?.amount || 0}
        grayScale
      />
    </div>
  );
}
