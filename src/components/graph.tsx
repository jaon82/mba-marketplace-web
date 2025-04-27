import { Calendar04Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Graph() {
  return (
    <Card className="flex-1 bg-white rounded-[20px] border-0">
      <CardHeader className="flex justify-between">
        <CardTitle className="font-dm-sans text-title-sm text-gray-500">
          Visitantes
        </CardTitle>
        <CardDescription className="flex gap-2 items-center text-label-sm text-gray-300 uppercase">
          <HugeiconsIcon
            icon={Calendar04Icon}
            size={20}
            className="text-blue-dark"
          />
          <span>26 de junho - 25 de julho</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Gráfico</p>
      </CardContent>
    </Card>
  );
}
