// Função para abrir o modal de informações do livro
function abrirModal(titulo, autor, imagem) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-titulo').innerText = titulo;
    document.getElementById('modal-autor').innerText = 'Autor: ' + autor;
    document.getElementById('modal-img').src = imagem;
}

// Função para fechar o modal
function fecharModal(modalId = 'modal') {
    document.getElementById(modalId).style.display = 'none';
}

// Função para reservar o livro (aqui você pode adicionar a lógica de reserva)
function reservarLivro() {
    alert('Livro reservado com sucesso!');
}

// Função para abrir o modal de login
function abrirLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

// Funções para abrir diferentes modais de opção de login
function abrirOpcao(modalId) {
    fecharModal('loginModal'); // Fecha o modal de login
    document.getElementById(modalId).style.display = 'block'; // Abre o modal selecionado
}

// Função para criar conta (aqui você pode adicionar a lógica de criação de conta)
function criarConta() {
    alert('Conta criada com sucesso!');
    fecharModal('criarContaModal'); // Fecha o modal após criar a conta
}

// Função para fazer login (aqui você pode adicionar a lógica de login)
function login() {
    alert('Login realizado com sucesso!');
    fecharModal('jaTenhoContaModal'); // Fecha o modal após login
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        fecharModal();
    }
}

// Fechar modais ao pressionar a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        fecharModal();
    }
});

let estrelasSelecionadas = 0;

// Função para avaliar o livro
function avaliar(n) {
    estrelasSelecionadas = n;
    const estrelas = document.querySelectorAll('.estrela');
    const resultado = document.getElementById('resultado-avaliacao');

    // Limpa as estrelas selecionadas anteriores
    estrelas.forEach((estrela, index) => {
        if (index < n) {
            estrela.classList.add('selecionada');
        } else {
            estrela.classList.remove('selecionada');
        }
    });

    // Exibe a avaliação
    resultado.innerText = `Você avaliou este livro com ${n} estrelas.`;
}
