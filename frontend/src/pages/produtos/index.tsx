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
  const handleDeleteProduct = async (productId: string) => {
    try {
      await api.delete(`/produtos/${productId}`)

    } catch (error) {
      if (error instanceof AxiosError) return console.warn(error?.response?.data)
    }
  }

  return (
    <div className="min-h-screen w-full bg-zinc-950 px-6 py-10 text-zinc-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Produtos</h1>
          <button
            onClick={() => router.push('/produtos/novo')}
            className="rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-700"
          >
            Novo produto
          </button>
        </div>

        <div className="overflow-hidden rounded-lg border border-zinc-800">
          <table className="min-w-full table-fixed border-collapse text-left text-sm">
            <thead className="bg-zinc-900 text-zinc-300">
              <tr>
                <th className="w-16 px-4 py-3 font-medium">Id</th>
                <th className="w-44 px-4 py-3 font-medium">Nome</th>
                <th className="w-2/5 px-4 py-3 font-medium">Descrição</th>
                <th className="w-24 px-4 py-3 font-medium">Quantidade</th>
                <th className="w-24 px-4 py-3 font-medium">Preço</th>
                <th className="w-28 px-4 py-3 font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.id} className="border-t border-zinc-800 hover:bg-zinc-900/70">
                  <td className="px-4 py-3">{produto.id}</td>
                  <td className="px-4 py-3">{produto.nome}</td>
                  <td className="px-4 py-3">{produto.descricao}</td>
                  <td className="px-4 py-3">{produto.quantidade}</td>
                  <td className="px-4 py-3">{produto.preco}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleGetProduct(produto.id)}>
                        <Eye className="text-zinc-400 hover:text-zinc-100" />
                      </button>
                      <button onClick={handleEditProduct}>
                        <Pencil className="text-zinc-400 hover:text-zinc-100" />
                      </button>
                      <button onClick={handleDeleteProduct}>
                        <Trash className="text-zinc-400 hover:text-zinc-100" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}