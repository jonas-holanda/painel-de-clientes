import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCliente } from '../../services/cliente-requests';
import './index.css';
import './index-responsive.css';

function AddCliente() {

    const navigate = useNavigate();
    const [cliente, setCliente] = useState({
        nome: '',
        idade: '',
        email: ''
    });


    const handleChange = (event) => {

        const { name, value } = event.target;
        setCliente((clienteAnterior) => {
            return {
                ...clienteAnterior,
                [name]: value
            }
        }
        );
    }

    const salvaCliente = async (event) => {
        event.preventDefault();
        console.log(cliente);
        await addCliente(cliente);
        navigate('/cliente/view');
    }

    return (
        <>
            <main className="container">
                <h1><span className="iconify-inline" data-icon="fluent:people-add-32-regular"></span>ADICIONAR CLIENTE</h1>
                <section className="container-add_clientes">
                    <form onSubmit={salvaCliente}>
                        <div className="form_group">
                            <label htmlFor='nome_add'><span className="iconify-inline" data-icon="icon-park-outline:people"></span>NOME</label>
                            <input
                                type="text"
                                id='nome_add'
                                name='nome'
                                required
                                value={cliente.nome}
                                onChange={handleChange} />
                        </div>
                        <div className="form_group">
                            <label htmlFor='idade_add'><span className="iconify-inline" data-icon="fluent:clipboard-number-123-28-regular"></span>IDADE</label>
                            <input
                                type="number"
                                id='idade_add'
                                required
                                min={0}
                                max={150}
                                name='idade'
                                value={cliente.idade}
                                onChange={handleChange} />
                        </div>
                        <div className="form_group">
                            <label htmlFor='email_add'><span className="iconify-inline" data-icon="line-md:email"></span>EMAIL</label>
                            <input
                                id='email_add'
                                type="email"
                                name='email'
                                required
                                value={cliente.email}
                                onChange={handleChange} />
                        </div>
                        <div className="form_group">
                            <button type='submit'>ADICIONAR</button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}

export default AddCliente;