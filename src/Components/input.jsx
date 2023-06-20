import { useState } from 'react';

const Input = () => {
    let [Nome, setNome] = useState('Seu nome');

    const handleChange = (valor) => {
        setNome(valor.target.value);
    };
    return (
        <div>
            <h2>Insira seu nome</h2>
            <label htmlFor="nome">Seu nome</label>
            <input type="text" name="nome" id="nome" onChange={handleChange} />
        </div>
    );
};

export default Input;
