import Link from 'next/link';

export default function NavItem({ children, ...props }) {
    return (
        <div className="mr-9 flex h-full">
        <Link href={props.href}>
            <a
                className="uppercase text-xs font-bold h-full text-white"
            >
                <div className="py-5">
                    {children}
                </div>
            </a>
        </Link>
        </div>
    );
}