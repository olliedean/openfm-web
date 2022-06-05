import logo from '@/public/logo.png';
import Image from 'next/image';
import NavItem from './NavItem';
import SearchBar from './Search';

export default function Header() {

    return(
        <nav>
            <div className="bg-red-600 border-b-4 border-red-700">
                <div className="max-w-7xl h-full mx-auto flex justify-between items-center items-stretch">
                    <div className="flex items-center">
                        <img
                                src="../../logo.png"
                                alt="logo"
                                className="w-24 invert"
                        />
                    </div>
                    <div className="flex-1 flex ml-10 items-stretch">
                        <NavItem href="/">Music</NavItem>
                        <NavItem href="/">Listen</NavItem>
                        <NavItem href="/">Events</NavItem>
                        <NavItem href="/">Charts</NavItem>
                        <NavItem href="/">Originals</NavItem>
                    </div>
                    { /* flex class messes up text-right class. fix later */ }
                    <div className="flex-1 text-right flex items-center">
                        <SearchBar />
                    </div>
                </div>
            </div>
        </nav>

    )
}