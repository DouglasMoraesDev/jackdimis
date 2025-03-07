// Função para enviar a mensagem via WhatsApp
function sendVoucher(client) {
    const clientPhone = client.phone;  // Número de telefone do cliente
    // Mensagem personalizada
    const voucherMessage = encodeURIComponent(
        ` Parabéns, ${client.fullName}!\n\n` +
        `Você acaba de ganhar um *VOUCHER EXCLUSIVO* do *Jack&Dimi’s Burguer*!`
    );
    const whatsappUrl = `https://wa.me/${clientPhone}?text=${voucherMessage}`;

    // Envia a mensagem pelo WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Após o envio, zera os pontos do cliente
    resetClientPoints(client);
}

// Função para zerar os pontos do cliente após o envio do voucher
function resetClientPoints(client) {
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    const clientIndex = clients.findIndex(c => c.fullName === client.fullName);  // Corrigido para usar fullName

    if (clientIndex > -1) {
        clients[clientIndex].points = 0;  // Zera os pontos
        localStorage.setItem('clients', JSON.stringify(clients));  // Atualiza o localStorage
        displayClients();  // Recarrega a lista de clientes
    }
}
