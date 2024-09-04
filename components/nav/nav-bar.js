import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import Link from "next/link";
import NavItem from "./nav-item";

export default function NavBar() {
    return (
        <div className="flex items-center gap-5 px-32 pt-16">
            <Link className="flex-grow" href="/">
                <div className="flex gap-3 items-center">
                    <Avatar>
                        <AvatarImage src="/profile-pic.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h1 className="text-xl font-bold">Louis Nguyen</h1>
                </div>
            </Link>
            <button className="bg-blue-800 text-slate-200 rounded-md py-2 px-4 w-fit"><a href="https://buymeacoffee.com/louisng" target="_blank" rel="noopener noreferrer">Buy me a coffee</a></button>
            <div className="hover:underline">
                <NavItem href="/projects" name="Projects" />
            </div>
        </div>
    )
}