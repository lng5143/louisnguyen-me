import FooterLink from "./footer-link";

export default function Footer() {
    return (
        <div className="bg-blue-100 flex px-32 py-8 gap-64">
            <div className="flex flex-col gap-4">
                <FooterLink iconSrc="/x-logo.svg" href="https://x.com/louis_lamnguyen" text="Join me on X / Twitter" />
                <button className="bg-blue-800 text-slate-200 rounded-md py-2 px-4 w-fit"><a href="https://buymeacoffee.com/louisng" target="_blank" rel="noopener noreferrer">Buy me a coffee</a></button>
            </div>
            <div className="flex flex-col gap-4">
                <FooterLink iconSrc="/nootropicslist.png" href="https://nootropicslist.me" text="NootropicsList"></FooterLink>
            </div>
        </div>
    )
}