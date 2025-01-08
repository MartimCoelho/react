//Header.tsx
"use clien"
import React from 'react';
import Link from 'next/link';

interface HeaderProps {
    myName: string;
    projectName: string;
}
const Header: React.FC<HeaderProps> = ({ myName, projectName }) => {
    return (
        <header>
            <h1>{projectName}</h1>
            <h3>Desenvolvido por {myName}</h3>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="../dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
