import { getMetricsViewsPerDay } from "@/api/get-metrics-views-per-day";
import { Calendar04Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "./custom-tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Graph() {
  const { data: metricsViewsPerDay } = useQuery({
    queryKey: ["metrics-views-per-day"],
    queryFn: getMetricsViewsPerDay,
  });

  const formatDate = (value: string) => {
    const date = new Date(value);
    const dateFormatted = date.toLocaleDateString("pt-BR", {
      day: "2-digit",
    });
    return dateFormatted;
  };

  return (
    <Card className="flex-1 ">
      <CardHeader className="flex justify-between">
        <CardTitle>Visitantes</CardTitle>
        <CardDescription className="flex gap-2 items-center">
          <HugeiconsIcon
            icon={Calendar04Icon}
            size={20}
            className="text-blue-dark"
          />
          <span>
            {dayjs(metricsViewsPerDay?.viewsPerDay[0].date).format(
              "DD [de] MMMM"
            )}{" "}
            -{" "}
            {dayjs(
              metricsViewsPerDay?.viewsPerDay[
                metricsViewsPerDay?.viewsPerDay.length - 1
              ].date
            ).format("DD [de] MMMM")}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={300}
            height={100}
            data={metricsViewsPerDay?.viewsPerDay}
          >
            <CartesianGrid strokeDasharray="1 0 8" vertical={false} />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{
                color: "#949494",
                fontSize: "0.75rem",
              }}
              tickFormatter={formatDate}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                color: "#949494",
                fontSize: "0.625rem",
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#5EC5FD"
              strokeWidth={2}
              dot={{
                stroke: "#fff",
                strokeWidth: 2,
                fill: "#5EC5FD",
                r: 5,
              }}
              activeDot={{
                stroke: "#5EC5FD",
                strokeWidth: 1,
                fill: "#5EC5FD",
                r: 5,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
