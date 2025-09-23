import { cursos } from "@/data/cursosData";

export async function generateStaticParams() {
  return cursos.map((curso) => ({
    id: curso.id.toString(),
  }));
}

interface CursoPageProps {
  params: {
    id: string;
  };
}

export default function CursoPage({ params }: CursoPageProps) {
  const curso = cursos.find((c) => c.id.toString() === params.id);

  if (!curso) {
    return <div>Curso não encontrado</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{curso.titulo}</h1>
        <p className="text-lg text-gray-700 mb-8">{curso.descricao}</p>

        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">O que você vai aprender:</h2>
          <ul className="list-disc list-inside space-y-2">
            {curso.conteudo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold text-blue-600">
            R$ {curso.preco}
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
            Inscreva-se Agora
          </button>
        </div>
      </div>
    </div>
  );
}
