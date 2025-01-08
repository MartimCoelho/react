//AddEditHero.tsx
import React, { useState } from 'react';

interface Hero {
    id?: number;
    name: string;
    power: string;
}

interface AddEditHeroProps {
    hero?: Hero;
    onSave: (hero: Hero) => void;
}

const AddEditHero: React.FC<AddEditHeroProps> = ({ hero, onSave }) => {
    const [name, setName] = useState(hero ? hero.name : '');
    const [power, setPower] = useState(hero ? hero.power : '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ id: hero?.id, name, power });
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome do Herói:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="power">Poder:</label>
                <input
                    type="text"
                    id="power"
                    value={power}
                    onChange={(e) => setPower(e.target.value)}
                    required
                />
            </div>
            <button type="submit">{hero ? 'Editar Herói' : 'Adicionar Herói'}</button>
        </form>
    );
};
export default AddEditHero;