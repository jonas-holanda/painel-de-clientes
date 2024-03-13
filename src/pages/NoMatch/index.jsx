import './index.css';
import './index-responsive.css';

function NoMatch() {
    return (
        <>
            <section className="notFound">
                <div className="notFound-message">
                    <h1>404</h1>
                    <h2>PÁGINA NÃO ENCONTRADA</h2>
                </div>
                <div className="notFound-gif"><img src="/src/assets/images/tenor.gif" /></div>
            </section>
        </>
    );
}

export default NoMatch;