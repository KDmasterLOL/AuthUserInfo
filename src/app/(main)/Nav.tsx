import Link from "next/link";

export default function Nav({ className = "" }: { className?: string }) {
  const NavItem = ({ children, active = false }: { children: React.ReactNode, active?: boolean }) =>
    <li className={"p-4 py-3 rounded-t " + (active ? "bg-blue" : "")}>
      <Link href="#" >{children}</Link>
    </li>
  return <nav className={className}>
    <ul className="flex">
      <NavItem>Home</NavItem>
      <NavItem active={true}>My info</NavItem>
      <NavItem>People</NavItem>
      <NavItem>Hiring</NavItem>
      <NavItem>Reports</NavItem>
      <NavItem>Files</NavItem>
    </ul>
  </nav>
} 
