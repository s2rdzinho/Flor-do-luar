fetch('produtos.json')
  .then(res => res.json())
  .then(produtos => {
    const container = document.getElementById('produtos');

    produtos.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'produto';
      card.innerHTML = `
        <img src="${prod.imagem}" alt="${prod.nome}" />
        <h3>${prod.nome}</h3>
        <p>${prod.descricao}</p>
        <strong>R$ ${prod.preco.toFixed(2)}</strong><br>
        <a target="_blank" href="https://wa.me/55${prod.whatsapp}?text=${encodeURIComponent(prod.msg)}">
          <button>Comprar no WhatsApp</button>
        </a>
      `;
      container.appendChild(card);
    });
  });
