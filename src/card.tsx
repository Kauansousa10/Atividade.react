type CardProps = {
  titulo: string;
  descricao: string;
};

function Card(props: CardProps) {
  return (
    <div className="card">
      <h2>{props.titulo}</h2>
      <p>{props.descricao}</p>
    </div>
  );
}

export default Card;