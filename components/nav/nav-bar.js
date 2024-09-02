import NavItem from "./nav-item";

export default function NavBar() {
    return (
        <div className="flex">
            <div className="flex-grow">
                <p>Louis Nguyen</p>
            </div>
            <div className="">
                <NavItem href="/projects" name="Projects" />
            </div>
        </div>

    )
}