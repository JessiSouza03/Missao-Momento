

// Filtro em JS
$(document).ready(function () {
    $('.filter-item').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'todos') {
            $('.noticia-box').show('1000');
        }
        else {
            $('.noticia-box').not('.' + value).hide('1000');
            $('.noticia-box').filter('.' + value).show('1000');
        }
    });
    // Ativar o botão quando clicar
    $('.filter-item').click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

// Background do header muda quando scroll desce
// N quis pegar com o "document.querySelector("header" antes, tive q usar inline
window.addEventListener("scroll", () => {
    (document.querySelector("header")).classList.toggle("shadow", window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Validação dos campos do formulário
        const name = form.elements['name'].value.trim();
        const email = form.elements['email'].value.trim();
        const message = form.elements['message'].value.trim();

        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }

        // Aqui você pode adicionar código para enviar os dados do formulário para o backend ou para um serviço de e-mail

        // Limpar os campos do formulário após o envio bem-sucedido
        form.elements['name'].value = '';
        form.elements['email'].value = '';
        form.elements['message'].value = '';

        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    });
});

