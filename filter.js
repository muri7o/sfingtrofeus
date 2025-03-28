document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".filters input[type='checkbox']");
    const produtos = document.querySelectorAll(".produto");

    // Exibir opções de esporte quando o checkbox 'Esporte' for marcado
    document.getElementById("categoria-esporte").addEventListener("change", function () {
        const subFilters = document.getElementById("sub-filters-esporte");
        if (this.checked) {
            subFilters.style.display = "block"; // Exibe as opções de esporte
        } else {
            subFilters.style.display = "none"; // Esconde as opções de esporte
            
            // Desmarca todos os checkboxes de esportes quando a categoria esporte for desmarcada
            document.querySelectorAll("#sub-filters-esporte input[type='checkbox']").forEach(cb => {
                cb.checked = false;
            });
        }
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", filtrarProdutos);
    });

    function filtrarProdutos() {
        const filtros = {
            categoria: new Set(),
            esporte: new Set(),
            tipo: new Set(),
            prontaEntrega: false
        };

        // Captura as categorias selecionadas
        document.querySelectorAll(".categoria-filter:checked")
            .forEach(cb => filtros.categoria.add(cb.id.replace("categoria-", "")));

        // Captura os esportes selecionados, se a categoria 'Esporte' estiver marcada
        if (document.getElementById("categoria-esporte").checked) {
            document.querySelectorAll("#sub-filters-esporte input[type='checkbox']:checked")
                .forEach(cb => filtros.esporte.add(cb.id.replace("esporte-", "")));
        }

        // Captura os tipos de produto selecionados
        document.querySelectorAll("#tipo-medalha:checked, #tipo-trofeu:checked")
            .forEach(cb => filtros.tipo.add(cb.id.replace("tipo-", "")));

        // Verifica se o usuário marcou "Somente à Pronta Entrega"
        filtros.prontaEntrega = document.getElementById("pronta-entrega").checked;

        // Se não houver filtros selecionados, exibe todos os produtos
        if (filtros.categoria.size === 0 && filtros.esporte.size === 0 && filtros.tipo.size === 0 && !filtros.prontaEntrega) {
            produtos.forEach(produto => produto.style.display = "block");
            return;
        }

        // Filtra os produtos
        produtos.forEach(produto => {
            const categoria = produto.dataset.categoria;  // Categoria do produto
            const esporte = produto.dataset.esporte;      // Esporte do produto
            const tipo = produto.dataset.tipo;            // Tipo do produto
            const prontaEntrega = produto.dataset.prontaEntrega === "true"; // Pronta entrega

            // Lógica de correspondência dos filtros
            let categoriaMatch = false;
            
            // Verifica se não há categoria selecionada ou se a categoria do produto corresponde
            if (filtros.categoria.size === 0) {
                categoriaMatch = true;
            } else if (filtros.categoria.has(categoria)) {
                // Caso específico para a categoria "esporte"
                if (categoria === "esporte") {
                    // Se não houver esportes específicos selecionados, exibe todos os produtos de esporte
                    // Se houver esportes específicos selecionados, verifica se o produto corresponde
                    categoriaMatch = filtros.esporte.size === 0 || filtros.esporte.has(esporte);
                } else {
                    // Para as outras categorias (empresarial, tradicionalista)
                    categoriaMatch = true;
                }
            }

            const tipoMatch = filtros.tipo.size === 0 || filtros.tipo.has(tipo);
            const prontaEntregaMatch = !filtros.prontaEntrega || prontaEntrega;

            // Exibe ou oculta o produto conforme os filtros
            if (categoriaMatch && tipoMatch && prontaEntregaMatch) {
                produto.style.display = "block";
            } else {
                produto.style.display = "none";
            }
        });
    }
});