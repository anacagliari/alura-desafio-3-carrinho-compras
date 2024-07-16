let valorCarrinhoTotal;
limpar();

function adicionar() {
    let quantidade = document.getElementById('quantidade').value;
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProdutoUnitario = produto.split('R$')[1];
    let valorProdutoTotal = quantidade * valorProdutoUnitario;
    let listaProdutosCarrinho = document.getElementById('lista-produtos');
    valorCarrinhoTotal = valorCarrinhoTotal + valorProdutoTotal;

    if (quantidade <= 0) {
        alert("Preencher quantidade.")
    } else {
        listaProdutosCarrinho.innerHTML = listaProdutosCarrinho.innerHTML +
            `<section class="carrinho__produtos__produto">
              <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${valorProdutoUnitario}</span>
            </section>`;

        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${valorCarrinhoTotal}`

        document.getElementById('quantidade').value = '';
    }
}

function limpar() {
    valorCarrinhoTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
