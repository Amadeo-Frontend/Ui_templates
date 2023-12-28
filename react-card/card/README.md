# Componente de Card React

Este projeto inclui um componente de card estilizado para React, ideal para exibir informações como título, descrição e imagem de uma maneira elegante e responsiva.

## Características

- **Design Elegante:** Fundo escuro e bordas cinzas, ideal para interfaces modernas.
- **Efeito de Hover:** Destaca o card com um efeito de luz ao passar o mouse.
- **Imagem no Topo:** Com uma linha separadora arredondada entre a imagem e o conteúdo.
- **Facilmente Personalizável:** Título e descrição ajustáveis.

## Uso

Para usar o componente `Card` em seu projeto, importe-o e inclua-o da seguinte maneira:

```jsx
import Card from './caminho/para/Card';

function App() {
  return (
    <Card
      title="Título do Card"
      description="Descrição do Card."
      imageUrl="url-da-imagem.jpg"
    />
  );
}

## Personalização

- Você pode personalizar o estilo do componente editando o arquivo styles.css. Modifique cores, fontes, tamanhos e outras propriedades CSS conforme necessário.

## Contribuições

Contribuições são muito bem-vindas! Se você tem alguma ideia para melhorar este projeto, sinta-se à vontade para criar um fork e enviar um pull request.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

