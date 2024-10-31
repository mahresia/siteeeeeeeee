
// Função para exibir a mensagem de boas-vindas apenas uma vez
window.onload = function() {
    // Verifica se o usuário já optou por não ver a mensagem
    if (!localStorage.getItem("hideWelcomeMessage")) {
        // Mostra o alerta de boas-vindas com a opção de "Não mostrar novamente"
        let showAlert = confirm("Bem-vindo ao site de Nossa Senhora Aparecida!\n\nClique em 'OK' para continuar ou 'Cancelar' se não quiser ver essa mensagem novamente.");
        
        // Se o usuário clicar em "Cancelar", salva no localStorage para não mostrar mais a mensagem
        if (!showAlert) {
            localStorage.setItem("hideWelcomeMessage", "true");
        }
    }
};

// Função para capturar os dados do formulário de contato
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    alert("Obrigado por entrar em contato, " + name + "! Recebemos sua mensagem.");
});
