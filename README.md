<div align="center">

# Frontend do projeto final do curso de Javascript da Universidade do Trabalho Digital - UTD

</div>

**Ao longo do curso aprendemos sobre Javascript, NodeJs, Express e o ORM Sequelize para podermos criar um CRUD.** 
**Também vimos sobre React, HTML e CSS para o frontend da nossa aplicação, junto com o Axios para fazermos essa ligação com a API do backend.**

**O projeto final proposto pelo professor, foi seguir o passo-a-passo que ele havia nos disponibilizado em dois arquivos em PDF com a estrutura e os códigos para criarmos as aplicações tanto do backend como do frontend.**

**Então nós tinhamos que seguir o passo-a-passo e podendo fazer alterações para melhorar o projeto.**

# Tecnologias Utilizadas

<div align="center">

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![Nodejs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white) ![vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) 

</div>

# Alterações realizadas no sistema
**O projeto inicialmente tinha as páginas funcionais, mas com nenhuma estilização.**

- **Primeiro corrigi um bug que havia no listar clientes, onde ele estava requisitando infinitamente a busca de clientes. Então retirei a busca dos clientes no UseEffect da página de listar, e depois corrigi o excluir para que realizasse a busca de clientes logo após a exclusão de um cliente.**

- **Depois fui para a parte da estilização das páginas.**
- **Separei o CSS para cada página, e coloquei o CSS global no arquivo App.css**
- **Criei o Header e o Footer do projeto, colocando no Header um botão para mudar o tema do site. De claro(o tema padrão), para o dark.**
- **Após o Header e o Footer, eu estizei as páginas Home e NoMatch(O erro 404).**
- **Em seguida fui na página de view Clientes, para estilizar a tabela e os botões. Consegui deixar a tabela bem legal.**
- **E por fim, estilizei os formulários de Adicionar e Editar Cliente.**
- **Também deixei o site responsivo. (A parte do listar clientes não ficou 100% responsivo, pode ter sido a tabela. Mas ficou legal)**


**Link do site: [https://painel-de-clientes.vercel.app/](https://painel-de-clientes.vercel.app/)**

<p align="center">
    <strong>Copyright © <a href="https://github.com/jonas-holanda" target="_blank">Jonas Holanda</a>. All Rights Reserved.</strong>
</p>