import { api } from "@/api/axiosInstance";
import { useEffect, useState } from "react";

export default function Produtos() {
  // TODO: estado para guardar a lista de produtos vinda da API
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    // TODO: buscar os produtos (GET /produtos) ao carregar a página
    const fetchProdutos = async () => {
      try {
        const response = await api.get("/produtos/");
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

  }, []);
  
  return (
    <>
      {/* TODO: link para a página de cadastro (/produtos/novo) */}
      <div className="flex flex-col gap-2 w-full h-screen items-center justify-center">

      <a href="/produtos/novo" className="bg-pink-600 text-white py-2 px-4 rounded cursor-pointer">
        Cadastrar Produto
      </a>
      </div>

      {/* TODO: tabela listando os produtos (nome, preco, quantidade) */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Nome</th>
            <th className="border border-gray-300 px-4 py-2">Preço</th>
            <th className="border border-gray-300 px-4 py-2">Quantidade</th>
            <th className="border border-gray-300 px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto: any) => (
            <tr key={produto.id}>
              <td className="border border-gray-300 px-4 py-2">{produto.id}</td>
              <td className="border border-gray-300 px-4 py-2">{produto.nome}</td>
              <td className="border border-gray-300 px-4 py-2">R$ {produto.preco.toFixed(2)}</td>
              <td className="border border-gray-300 px-4 py-2">{produto.quantidade}</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href={`/produtos/${produto.id}`} className="text-blue-500 hover:text-blue-700">
                  Editar
                </a>
                <button
                  
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
