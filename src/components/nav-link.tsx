import { Link, LinkProps, useLocation } from "react-router";

export type NavLinkProps = LinkProps;

export default function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation();

  return (
    <div
      data-current={pathname === props.to}
      className="flex items-center h-10 rounded-[10px] px-4 data-[current=true]:bg-shape"
    >
      <Link
        data-current={pathname === props.to}
        className="
      flex items-center gap-2 text-body-sm text-gray-300 hover:text-orange-base 
      data-[current=true]:text-action-sm data-[current=true]:text-orange-base
      "
        {...props}
      />
    </div>
  );
}
