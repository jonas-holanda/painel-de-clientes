import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getClientes, removeCliente } from "../../services/cliente-requests";
// import { useLocation } from 'react-router-dom';
import './index.css';
import './index-responsive.css';

function ViewCliente() {

    // const setActive = () => {
    //     const enderecoAtual = useLocation();

    //     if ((enderecoAtual.pathname === '/cliente/view') || (enderecoAtual.pathname === '/cliente/view/')) {
    //         const home =  document.querySelector('#link-home');
    //         const clientesView =  document.querySelector('#link-clientesView');
    //         const addCliente =  document.querySelector('#link-addCliente');

    //         if (!clientesView.classList.contains('active')) {
    //             clientesView.classList.add('active');
    //         }

    //         if (home.classList.contains('active')) {
    //             home.classList.remove('active');
    //         }

    //         if (addCliente.classList.contains('active')) {
    //             addCliente.classList.remove('active');
    //         }
    //     }
    //     // switch (enderecoAtual.pathname) {
    //     //     case '/':
    //     //         document.querySelector('#link-home').classList.add('active');
    //     //         document.querySelector('#link-clientesView').classList.remove('active');
    //     //         document.querySelector('#link-addCliente').classList.remove('active');
    //     //     break;
    //     //     case '/cliente/view':
    //     //         document.querySelector('#link-clientesView').classList.add('active');
    //     //         document.querySelector('#link-home').classList.remove('active');
    //     //         document.querySelector('#link-addCliente').classList.remove('active');
    //     //     break;
    //     //     case '/cliente/', '/cliente':
    //     //         document.querySelector('#link-addCliente').classList.add('active');
    //     //         document.querySelector('#link-clientesView').classList.remove('active');
    //     //         document.querySelector('#link-home').classList.remove('active');
    //     //     break;
    //     // }
    // }

    const [clientes, setClientes] = useState([]);
    useEffect(() => {
        carregaClientes();
        
    }, []);
    const carregaClientes = async () => {
        const clientesResponse = await getClientes();
        setClientes(await clientesResponse.data);
        // console.log(clientes);
    }
    const deleteCliente = async (id) => {
        await removeCliente(id);
        carregaClientes();
    }

    

    return (
        <>
            <main className="container">
                <h1><span className="iconify-inline" data-icon="fluent:people-list-24-regular"></span>CLIENTES</h1>
                <section className="container-clientes">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOME</th>
                                <th>IDADE</th>
                                <th>EMAIL</th>
                                <th>AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map(cliente => (
                                <tr key={cliente.id}>
                                    <td data-label="Id" >{cliente.id}</td>
                                    <td data-label="Nome" >{cliente.nome}</td>
                                    <td data-label="Idade" >{cliente.idade}</td>
                                    <td data-label="Email">{cliente.email}</td>
                                    <td>
                                    
                                        <Link
                                            to={`../edit/${encodeURIComponent(cliente.id)}`}><button className="btn-edit" title={'Editar Cliente '+cliente.nome}><span className="iconify-inline" data-icon="mingcute:user-edit-fill"></span> Editar</button></Link>
                                        <button onClick={() => deleteCliente(cliente.id)} className="btn-delete" title={'Excluir Cliente '+cliente.nome}><span className="iconify-inline" data-icon="clarity:trash-solid"></span> Excluir</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    );
}

export default ViewCliente;