import { api } from "@/api/axiosInstance";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRouter } from "next/router";
export default function NovoProduto() {
  // TODO: um useState para cada campo do produto (nome, descricao, preco, quantidade)
<<<<<<< HEAD
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: POST /produtos com os dados do formulário

=======
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    // TODO: POST /produtos com os dados do formulário
    const body = {
      nome,
      descricao,
      quantidade: Number(quantidade),
      preco: Number(preco)
    }
    try {
      const createProduct = await api.post(`/produtos`, body)
      console.log('update', createProduct.data)
      router.push('/produtos')
    } catch (error) {
      if (error instanceof AxiosError) return console.warn(error?.response?.data)
    }
>>>>>>> cebfbb4bc86eeee4a278d44d2654a625ff3a1d12
    // TODO: redirecionar para /produtos após sucesso (useRouter)

    try {
      api.post("/produtos", {
        nome,
        descricao,
        preco,
        quantidade,
      });
      router.push("/produtos");
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
    }


  };

  return (
    <form onSubmit={handleSubmit} className="w-full h-screen flex flex-col items-center justify-center">
      {/* TODO: inputs controlados para nome, descricao, preco e quantidade */}
<<<<<<< HEAD
      <div className="flex flex-col gap-2 w-full h-screen">
        <div className="flex flex-col gap-2 w-full h-screen items-center justify-center">
          <h1>CADASTRO NOVO PRODUTO!</h1>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            placeholder="Nome"
            className="border-pink-600 bg-pink-600"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            id="descricao"
            placeholder="Descrição"
            className="border-pink-600 bg-pink-600"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            id="preco"
            placeholder="Preço"
            className="border-pink-600 bg-pink-600 flex"
            value={preco}
            onChange={(e) => setPreco(Number(e.target.value))}
          />
          <label htmlFor="quantidade">Quantidade</label>
          <input
            type="number"
            id="quantidade"
            placeholder="Quantidade"
            className="border-pink-600 bg-pink-600"
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
          />

          <button type="submit" className="bg-pink-600 text-white py-2 px-4 rounded cursor-pointer">
            Cadastrar
          </button>
        </div>

      </div>

=======
      <label htmlFor="">Nome do produto: </label>
      <input className="px-1 py-2 min-w-24 border border-zinc-400 rounded-md mb-5" type="text" name="nome" onChange={(e) => setNome(e.target.value)} value={nome} />

      <label htmlFor="">Descrição do produto: </label>
      <input className="px-1 py-2 min-w-24 border border-zinc-400 rounded-md mb-5" type="text" name="descricao" onChange={(e) => setDescricao(e.target.value)} value={descricao} />

      <label htmlFor="">Quantidade do produto: </label>
      <input className="px-1 py-2 min-w-24 border border-zinc-400 rounded-md mb-5" type="text" name="quantidade" onChange={(e) => setQuantidade(e.target.value)} value={quantidade} />

      <label htmlFor="">Preço do produto: </label>
      <input className="px-1 py-2 min-w-24 border border-zinc-400 rounded-md mb-5" type="text" name="preco" onChange={(e) => setPreco(e.target.value)} value={preco} />
>>>>>>> cebfbb4bc86eeee4a278d44d2654a625ff3a1d12
      {/* TODO: botão de submit */}
      <button className="p-4 min-w-18 border border-zinc-300 bg-sky-700 text-white rounded-sm">Cadastrar</button>
    </form>

  );
<<<<<<< HEAD

}

=======
}
>>>>>>> cebfbb4bc86eeee4a278d44d2654a625ff3a1d12
