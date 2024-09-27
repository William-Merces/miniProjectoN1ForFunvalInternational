// Seleciona os elementos do DOM
const form = document.getElementById('subscription-form');
const emailInput = document.getElementById('email');
const formWrapper = document.querySelector('.form-wrapper');
const successMessage = document.querySelector('.success-message');
const subscriberEmail = document.getElementById('subscriber-email');
const dismissBtn = document.getElementById('dismiss-btn');
const container = document.querySelector('.container');
const thankYouPage = document.querySelector('.thank-you-page');
const thankYouEmail = document.getElementById('thank-you-email');
const dismissThankYouBtn = document.getElementById('dismiss-thank-you-btn');

// Adiciona evento de submit ao formulário
form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const email = emailInput.value;
    
    if (validateEmail(email)) {
        // Se o email for válido, mostra a página de agradecimento
        container.style.display = 'none';
        thankYouPage.classList.remove('hidden');
        thankYouPage.classList.add('visible');
        thankYouEmail.textContent = email;
    } else {
        // Se o email for inválido, adiciona classe de erro
        emailInput.classList.add('error');
    }
});

// Adiciona evento para remover a classe de erro quando o usuário começar a digitar
emailInput.addEventListener('input', function() {
    emailInput.classList.remove('error');
});

// Adiciona evento ao botão de dispensar da mensagem de sucesso
dismissBtn.addEventListener('click', function () {
    successMessage.classList.add('hidden');
    formWrapper.classList.remove('hidden');
    form.reset();
});

// Adiciona evento ao botão de dispensar da página de agradecimento
dismissThankYouBtn.addEventListener('click', function () {
    thankYouPage.classList.add('hidden');
    thankYouPage.classList.remove('visible');
    container.style.display = 'flex';
    form.reset();
});

// Função para validar o email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// Adiciona evento para remover a classe de erro quando o usuário começar a digitar
emailInput.addEventListener('input', function() {
    emailInput.classList.remove('error');
});

// Adiciona evento ao botão de dispensar da mensagem de sucesso
dismissBtn.addEventListener('click', function () {
    successMessage.classList.add('hidden');
    formWrapper.classList.remove('hidden');
    form.reset();
});

// Adiciona evento ao botão de dispensar da página de agradecimento
dismissThankYouBtn.addEventListener('click', function () {
    thankYouPage.classList.add('hidden');
    thankYouPage.classList.remove('visible');
    formWrapper.classList.remove('hidden');
    form.reset();
});

// Função para validar o email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}