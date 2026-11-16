type ListaProps = {
  itens: string[];
};

function Lista(props: ListaProps) {
  return (
    <div>
      <h2>Conteúdos estudados</h2>

      <ul>
        {props.itens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;