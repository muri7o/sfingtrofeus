document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".filters input[type='checkbox']");
  const produtos = document.querySelectorAll(".produto");

  checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", filtrarProdutos);
  });

  function filtrarProdutos() {
      const filtros = {
          esporte: new Set(),
          tipo: new Set(),
          prontaEntrega: false
      };

      // Verifica os checkboxes marcados
      document.querySelectorAll("#esporte-volei:checked, #esporte-futebol:checked, #esporte-tenis:checked")
          .forEach(cb => filtros.esporte.add(cb.id.replace("esporte-", "")));

      document.querySelectorAll("#tipo-medalha:checked, #tipo-trofeu:checked")
          .forEach(cb => filtros.tipo.add(cb.id.replace("tipo-", "")));

      filtros.prontaEntrega = document.querySelector("#pronta-entrega").checked;

      // Filtra os produtos
      produtos.forEach(produto => {
          const esporte = produto.dataset.esporte;
          const tipo = produto.dataset.tipo;
          const prontaEntrega = produto.dataset.prontaEntrega === "true";

          const esporteMatch = filtros.esporte.size === 0 || filtros.esporte.has(esporte);
          const tipoMatch = filtros.tipo.size === 0 || filtros.tipo.has(tipo);
          const prontaEntregaMatch = !filtros.prontaEntrega || prontaEntrega;

          // Exibe ou oculta o produto conforme os filtros
          if (esporteMatch && tipoMatch && prontaEntregaMatch) {
              produto.style.display = "block";
          } else {
              produto.style.display = "none";
          }
      });
  }
});

