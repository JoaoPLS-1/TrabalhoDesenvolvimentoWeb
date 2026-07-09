import { api } from "@/api/axiosInstance";
import { AxiosError } from "axios";
import { Eye, Pencil, Trash } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Produtos() {
  const router = useRouter()
  // TODO: estado para guardar a lista de produtos vinda da API
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    // TODO: buscar os produtos (GET /produtos) ao carregar a página
    const getProducts = async () => {
      try {
        const response = await api.get('/produtos')
        setProdutos(response.data.data)
      } catch (error) {
        if (error instanceof AxiosError) return console.warn(error?.response?.data)

        console.log(error)
      }
    }
    getProducts()
  }, []);

  const handleGetProduct = (productId: string) => { router.push(`/produtos/${productId}`) }
  const handleEditProduct = () => { }
  const handleDeleteProduct = () => { }

  return (
    <>
      {/* TODO: link para a página de cadastro (/produtos/novo) */}
      <div className="w-full h-screen flex items-center justify-center">
        <table>
          <thead className="p-2">
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map(produto => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.quantidade}</td>
                <td>{produto.preco}</td>
                <td>
                  <div className="flex gap-2">
                    <button onClick={() => handleGetProduct(produto.id)}><Eye className="text-zinc-400 hover:text-zinc-100" /></button>
                    <button onClick={handleEditProduct}><Pencil className="text-zinc-400 hover:text-zinc-100" /></button>
                    <button onClick={handleDeleteProduct}><Trash className="text-zinc-400 hover:text-zinc-100" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
