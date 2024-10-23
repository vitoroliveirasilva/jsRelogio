# Relógio Digital

Este projeto exibe um relógio digital dinâmico em uma página HTML, com a estilização de um card centralizado e atualizações do horário em tempo real, utilizando JavaScript.

## Interface

![image](https://github.com/user-attachments/assets/e6b48c4b-9e5a-41e2-bd42-1e04c2533419)

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
/projeto-relogio
│
├── src/
│   ├── css/
│   │   │
│   │   ├── icon/
│   │   │   └── icon_logo.svg
│   │   └── style.css
│   └── js/
│       └── script.js
├── index.html
└── README.md
```

### Arquivos principais:

1. **index.html**: Estrutura HTML da página que contém o card onde o relógio será exibido.
2. **style.css**: Arquivo de estilo que define a aparência do card, fontes e cores.
3. **script.js**: Contém o código JavaScript responsável pela exibição e atualização do horário no relógio.
4. **icon_logo.svg**: Ícone da aba do navegador.

## Funcionalidades

- O relógio exibe o horário atual formatado no padrão `HH:MM:SS`.
- O relógio é atualizado dinamicamente a cada segundo.
- O layout é responsivo, adaptando-se para diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização do card e da página.
- **JavaScript**: Manipulação dinâmica do DOM para atualizar o horário em tempo real.

## Detalhamento dos Arquivos

### HTML

- Define a estrutura da página com um card centralizado.
- O relógio é exibido dentro de uma tag `<h1>` com o `id="relogio"`, que é atualizado dinamicamente via JavaScript.
- CSS e JavaScript  externo e o script JavaScript.

### CSS

- Define variáveis de cores e estilos globais para manter a consistência visual.
- Utiliza flexbox para centralizar o card na tela.
- Adapta o tamanho do card e da fonte do relógio para dispositivos móveis.

### JavaScript

- Usa `setInterval` para atualizar o horário no relógio a cada segundo.
- A função `getTime()` obtém o horário atual e formata as horas, minutos e segundos.
- A função `setRelogio()` atualiza o conteúdo do elemento com o `id="relogio"`.

## Como Executar o Projeto

1. Clone o repositório ou baixe o código.
2. Abra o arquivo `index.html` em seu navegador.
3. O relógio será exibido no centro da página, mostrando o horário em tempo real.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
