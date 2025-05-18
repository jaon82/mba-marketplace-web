import * as React from "react";

import { cn } from "@/lib/utils";
import { ViewIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import FormError from "../form-error";

interface InputProps extends React.ComponentProps<"input"> {
  icon?: IconSvgElement;
  error?: string;
  prefix?: string;
}

function Input({
  icon: Icon,
  className,
  type,
  error,
  prefix,
  ...props
}: InputProps) {
  const [inputType, setInputType] = React.useState(type);

  const handleToggleViewPassword = () => {
    setInputType((oldInputType) => {
      return oldInputType === "password" ? "text" : "password";
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className={cn(
          "peer group flex w-full min-w-0 bg-transparent outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "gap-2 h-12 px-1 py-3 border-gray-100 border-b-[1px] text-body-md text-gray-200",
          "active-empty:text-orange-base active:caret-orange-base active:svg-orange-base",
          "has-[input:not(:placeholder-shown)]:text-gray-400",
          className
        )}
      >
        {Icon && (
          <HugeiconsIcon
            icon={Icon}
            size={24}
            className="group-active:text-orange-base group-has-[input:not(:placeholder-shown)]:text-orange-base"
          />
        )}
        {prefix && (
          <span className="group-active:text-orange-base group-has-[input:not(:placeholder-shown)]:text-orange-base">
            {prefix}
          </span>
        )}
        <input
          type={inputType}
          data-slot="input"
          className={cn(
            "flex w-full min-w-0 bg-transparent outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        />
        {type === "password" && (
          <HugeiconsIcon
            icon={ViewIcon}
            size={24}
            className="cursor-pointer"
            onClick={handleToggleViewPassword}
          />
        )}
      </div>
      {error && <FormError error={error} />}
    </div>
  );
}

export { Input };
