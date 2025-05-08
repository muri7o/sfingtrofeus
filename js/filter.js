document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".filters input[type='checkbox']");
    const produtos = document.querySelectorAll(".produto");

    // Atualiza a visibilidade dos sub-filtros de esporte
    function atualizarSubfiltrosEsporte() {
        const esporteCheckbox = document.getElementById("categoria-esporte");
        const subFilters = document.getElementById("sub-filters-esporte");

        if (esporteCheckbox.checked) {
            subFilters.style.display = "block";
        } else {
            subFilters.style.display = "none";
            // Desmarca os subfiltros de esporte
            document.querySelectorAll("#sub-filters-esporte input[type='checkbox']").forEach(cb => {
                cb.checked = false;
            });
        }
    }

    // Aplica evento para atualizar sub-filtros sempre que categorias forem alteradas
    document.querySelectorAll(".categoria-filter").forEach(cb => {
        cb.addEventListener("change", () => {
            atualizarSubfiltrosEsporte();
            filtrarProdutos();
        });
    });

    // Evento para os outros checkboxes
    checkboxes.forEach(checkbox => {
        if (!checkbox.classList.contains("categoria-filter")) {
            checkbox.addEventListener("change", filtrarProdutos);
        }
    });

    function filtrarProdutos() {
        const filtros = {
            categoria: new Set(),
            esporte: new Set(),
            tipo: new Set(),
            prontaEntrega: false,
            material: new Set()  // Adicionando filtro de material (Vidro e Acrílico)
        };

        // Captura as categorias selecionadas
        document.querySelectorAll(".categoria-filter:checked")
            .forEach(cb => filtros.categoria.add(cb.id.replace("categoria-", "")));

        // Captura os esportes selecionados, se a categoria 'Esporte' estiver marcada
        if (document.getElementById("categoria-esporte").checked) {
            document.querySelectorAll("#sub-filters-esporte input[type='checkbox']:checked")
                .forEach(cb => filtros.esporte.add(cb.id.replace("esporte-", "")));
        }

        // Captura os tipos de produto selecionados (agora com "kit" incluso)
        document.querySelectorAll("#tipo-medalha:checked, #tipo-trofeu:checked, #tipo-kit:checked")
            .forEach(cb => filtros.tipo.add(cb.id.replace("tipo-", "")));

        // Captura os materiais selecionados (Vidro e Acrílico)
        document.querySelectorAll(".material-filter:checked")
            .forEach(cb => filtros.material.add(cb.id.replace("material-", "")));

        // Verifica se o usuário marcou "Somente à Pronta Entrega"
        filtros.prontaEntrega = document.getElementById("pronta-entrega").checked;

        // Se não houver filtros selecionados, exibe todos os produtos
        if (filtros.categoria.size === 0 && filtros.esporte.size === 0 && filtros.tipo.size === 0 && !filtros.prontaEntrega && filtros.material.size === 0) {
            produtos.forEach(produto => produto.style.display = "block");
            return;
        }

        // Filtra os produtos
        produtos.forEach(produto => {
            const categoria = produto.dataset.categoria;
            const esporte = produto.dataset.esporte;
            const tipo = produto.dataset.tipo;
            const prontaEntrega = produto.dataset.prontaEntrega === "true";
            const material = produto.dataset.material;
            const exibirEmTodas = produto.dataset.exibirEmTodas === "true"; // Verifica o atributo

            // Lógica de correspondência dos filtros
            let categoriaMatch = false;

            // Se o produto deve ser exibido em todas as categorias, ignora a categoria nos filtros
            if (exibirEmTodas || filtros.categoria.size === 0 || filtros.categoria.has(categoria)) {
                if (categoria === "esporte" && filtros.esporte.size > 0) {
                    categoriaMatch = filtros.esporte.has(esporte);
                } else {
                    categoriaMatch = true;
                }
            }

            const tipoMatch = filtros.tipo.size === 0 || filtros.tipo.has(tipo);
            const prontaEntregaMatch = !filtros.prontaEntrega || prontaEntrega;
            const materialMatch = filtros.material.size === 0 || filtros.material.has(material);

            if (categoriaMatch && tipoMatch && prontaEntregaMatch && materialMatch) {
                produto.style.display = "block";
            } else {
                produto.style.display = "none";
            }
        });
    }

    // Inicializa a visibilidade correta ao carregar
    atualizarSubfiltrosEsporte();
});
