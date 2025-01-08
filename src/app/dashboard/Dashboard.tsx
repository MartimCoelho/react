//dashboard
import React from 'react';
import HeroList from '../components/HeroList';
import Link from 'next/link';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <Link href="/dashboard/hero">Adicionar Super-Herói</Link>
            <HeroList />
        </div>
    );
};
export default Dashboard;