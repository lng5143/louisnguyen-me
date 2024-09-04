import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import Link from "next/link";
import NavItem from "./nav-item";

export default function NavBar() {
    return (
        <div className="flex items-center">
            <Link className="flex-grow" href="/">
                <div className="flex gap-3 items-center">
                    <Avatar>
                        <AvatarImage src="/profile-pic.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h1 className="text-xxl font-bold">Louis Nguyen</h1>
                </div>
            </Link>
            <div className="hover:underline">
                <NavItem href="/projects" name="Projects" />
            </div>
        </div>
    )
}