import { api } from "@/api/axiosInstance";
import { useState } from "react";
import { useRouter } from "next/router";
export default function NovoProduto() {
  // TODO: um useState para cada campo do produto (nome, descricao, preco, quantidade)
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: POST /produtos com os dados do formulário

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
    <form onSubmit={handleSubmit}>
      {/* TODO: inputs controlados para nome, descricao, preco e quantidade */}
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

      {/* TODO: botão de submit */}
    </form>

  );

}

