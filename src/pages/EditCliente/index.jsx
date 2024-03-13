import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editCliente, getCliente } from '../../services/cliente-requests';

function EditCliente() {


    const { id } = useParams();
    const navigate = useNavigate();
    const [cliente, setCliente] = useState({
        id: '',
        nome: '',
        idade: '',
        email: ''
    });
    useEffect(() => {
        buscaCliente(id);
    }, []);
    const buscaCliente = async (id) => {
        const clienteDados = await (await getCliente(id)).data;
        if (!clienteDados) {
            navigate('/cliente/view');
        } else {
            setCliente(clienteDados);
        }
    }
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

    const editarCliente = async (event) => {
        event.preventDefault();
        console.log(cliente);
        await editCliente(cliente);
        navigate('/cliente/view');
    }

    return (
        <>
            <main className="container">
                <h1><span className="iconify-inline" data-icon="fluent:people-add-32-regular"></span>EDITAR CLIENTE</h1>
                <section className="container-add_clientes">
                    <form onSubmit={editarCliente}>
                        <div className="form_group">
                            <label htmlFor='nome_edit'><span className="iconify-inline" data-icon="icon-park-outline:people"></span>NOME</label>
                            <input
                                type="text"
                                id='nome_edit'
                                name='nome'
                                required
                                value={cliente.nome}
                                onChange={handleChange} />
                        </div>
                        <div className="form_group">
                            <label htmlFor='idade_edit'><span className="iconify-inline" data-icon="fluent:clipboard-number-123-28-regular"></span>IDADE</label>
                            <input
                                type="number"
                                id='idade_edit'
                                required
                                min={0}
                                max={150}
                                name='idade'
                                value={cliente.idade}
                                onChange={handleChange} />
                        </div>
                        <div className="form_group">
                            <label htmlFor='email_edit'><span className="iconify-inline" data-icon="line-md:email"></span>EMAIL</label>
                            <input
                                id='email_edit'
                                type="email"
                                name='email'
                                required
                                value={cliente.email}
                                onChange={handleChange} />
                        </div>
                        <div className="form_group">
                            <button type='submit'>EDITAR</button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}

export default EditCliente;