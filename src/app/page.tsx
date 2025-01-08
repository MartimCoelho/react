//page.tsx
"use client"
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './globals.css';

const Home: React.FC = () => {
    const [data, setData] = useState({
        my_name: 'Martim Ferreira',
        project_name: 'League of Heroes',
    });

    const [loading, setLoading] = useState(true); // Estado de loading

    // Simula um carregamento inicial
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Atualiza o estado de loading após 3 segundos
        }, 3000);
        return () => clearTimeout(timer); // Limpa o timeout se o componente for desmontado
    }, []);

    // Renderiza o loader enquanto o estado de loading é true
    if (loading) {
        return <Loader />;
    }
    return (
        <div className="App">
            <Content />
        </div>
    );
};
export default Home;
