import './index.css';

import { useEffect } from "react";

function Footer() {

    useEffect(() => {
        getYear();
    }, []);

    const getYear = () => {
        document.querySelector('#year').innerText = (new Date().getFullYear());
    }

    return (
        <>
        <footer className="footer">
            <b>© <span id="year"></span>. Designed by <a href="https://github.com/jonas-holanda" target="_blank" >Jonas Holanda.</a> All Rights Reserved.</b>
        </footer>
        </>
    );
}

export default Footer;