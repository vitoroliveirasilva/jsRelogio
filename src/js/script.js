// Seleciona o elemento do relogio na página
const relogioEl = document.getElementById('relogio');

// Executa as operações ao carregar a página
window.onload = function() {

    // Função para formatar o tempo em string no formato HH:MM:SS
    const getTime = () => {
        
        // Formata a unidade de tempo para que sempre tenha dois dígitos e seja uma string
        const formatTime = (time) => {
            return time.toString().padStart(2, '0')
        }

        // Obtem o horário atual
        const now = new Date();

        // Obtem as unidades de tempo e formata eles a partir do horário atual obtido
        const horas = formatTime(now.getHours());
        const minutos = formatTime(now.getMinutes());
        const segundos = formatTime(now.getSeconds());

        // Retorna o tempo formatado em uma string
        return `${horas}:${minutos}:${segundos}`;
    }

    // Função para atualizar a exibição do relogio
    const setRelogio = () => {
        // Atualiza o texto do relogio
        relogioEl.innerText = getTime();
    }

    // Inicia o intervalo
    setInterval(() => {
        // Atualiza a exibição do relogio
        setRelogio();
    }, 100); // Atualiza o horário a cada 1 segundo

};