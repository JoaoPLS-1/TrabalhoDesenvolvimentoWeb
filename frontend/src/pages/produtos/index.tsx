import { api } from "@/api/axiosInstance";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AxiosError } from "axios";
import { Eye, Pencil, PlusCircle, Trash } from "lucide-react";
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

<<<<<<< HEAD
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
=======
  const handleEditProduct = (productId: string) => { router.push(`/produtos/${productId}`) }

  const handleDeleteProduct = async (productId: string) => {

    try {
      const response = await api.delete(`/produtos/${productId}`)
      console.log('DELETAR', response)
      const removeProductFromState = produtos.filter(prod => prod.id !== productId)
      setProdutos(removeProductFromState)
    } catch (error) {
      if (error instanceof AxiosError) return console.warn(error?.response?.data)

      console.log(error)
    }
  }
  const handleAddNewProduct = () => {
    router.push('/produtos/novo')
  }

  const DeleteProduct = ({ nome, id }: { nome: string, id: string }) => {

    return (
      <Dialog>
        <DialogTrigger><Trash className="text-zinc-400 hover:text-zinc-100" /></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Você tem certeza?</DialogTitle>
            <DialogDescription>
              Esta ação não pode ser desfeita. Isso excluirá permanentemente o produto <b>{nome}</b>.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="items-left">
            <DialogClose>
              <Button variant={"link"}>Não</Button>
            </DialogClose>
            <DialogClose>
              <Button onClick={() => handleDeleteProduct(id)}>Sim</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <>
      {/* TODO: link para a página de cadastro (/produtos/novo) */}
      <div className="flex h-screen items-center justify-center">
        <div className="max-w-4xl h-screen flex flex-col items-center justify-center gap-8">
          <div className="flex w-full items-center justify-end">
            <button className="flex gap-2 border border-zinc-300 px-4 py-2 rounded-md hover:bg-zinc-200 hover:text-zinc-900  hover:border-zinc-400" onClick={handleAddNewProduct}>Adicionar novo produto <PlusCircle /></button>
          </div>
          <table>
            <thead className="p-2 border-b-2 border-zinc-300">
              <tr>
                <th className="px-4">Id</th>
                <th className="px-4">Nome</th>
                <th className="px-4">Descrição</th>
                <th className="px-4">Quantidade</th>
                <th className="px-4">Preço</th>
                <th className="px-4">Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map(produto => {
                const priceAdjusted = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(produto.preco)
                return (
                  <tr key={produto.id}>
                    <td className="px-4">{produto.id}</td>
                    <td className="px-4">{produto.nome}</td>
                    <td className="px-4">{produto.descricao}</td>
                    <td className="px-4 text-center">{produto.quantidade}</td>
                    <td className="px-4">{priceAdjusted}</td>
                    <td>
                      <div className="flex gap-2 items-center justify-end">
                        <button onClick={() => handleEditProduct(produto.id)}><Pencil className="text-zinc-400 hover:text-zinc-100" /></button>
                        <DeleteProduct id={produto.id} nome={produto.nome} />
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
>>>>>>> cebfbb4bc86eeee4a278d44d2654a625ff3a1d12

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