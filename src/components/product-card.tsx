import { Link } from "react-router";
import StatusTag from "./status-tag";

export default function ProductCard() {
  return (
    <Link to="/products/edit">
      <div className="flex flex-col gap-1 p-1 rounded-[20px] bg-white">
        <div className="h-[9rem] relative rounded-[1rem] overflow-hidden">
          <div className="absolute top-0 left-0 right-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_CUenXI49kBhIW0BP_1KBDKrPIboZLXGXQ&s"
              height="9rem"
              width="100%"
              className="object-cover"
            />
          </div>
          <div className="absolute top-2 right-2 flex gap-1">
            <StatusTag status="anunciado" />
            <div className="flex items-center px-2 py-1 rounded-full bg-gray-400 text-white uppercase text-label-sm">
              móvel
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-3 pt-3 pb-4">
          <div className="flex flex-row gap-4 justify-between items-center">
            <span className="text-subtitle text-gray-400">Sofá</span>
            <div className="flex gap-1 items-baseline text-gray-500">
              <small className="text-label-md">R$</small>
              <span className="font-dm-sans text-[1.125rem]">1.200,90</span>
            </div>
          </div>
          <div className="text-body-sm text-gray-300">
            Sofá revestido em couro legítimo, com estrutura em madeira maciça e
            pés em metal cromado.
          </div>
        </div>
      </div>
    </Link>
  );
}
