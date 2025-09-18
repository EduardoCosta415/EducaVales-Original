export const cursos = [
  {
    id: 1,
    titulo: "Curso de Exemplo",
    descricao: "Uma descrição legal.",
    preco: "99,99",
    // Make sure 'conteudo' exists and is an array
    conteudo: ["Item 1", "Item 2", "Item 3"], 
  },
  {
    id: 2,
    titulo: "Outro Curso",
    descricao: "Outra descrição.",
    preco: "149,99",
    // Example of a course with 'conteudo' defined
    conteudo: ["Conteúdo A", "Conteúdo B"], 
  },
  {
    id: 3,
    titulo: "Curso com Erro",
    descricao: "Este curso estava faltando 'conteudo'.",
    preco: "199,99",
    // Correcting the data:
    conteudo: [], // Add an empty array if there is no content.
  },

]