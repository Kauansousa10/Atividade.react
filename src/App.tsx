import Header from "./header";
import Footer from "./footer";
import Card from "./card";
import Lista from "./lista";

function App() {
  const assuntos = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  return (
    <>
      <Header />

      <main>
        <Card
          titulo="Bem-vindo ao React!"
          descricao="Minha primeira aplicação utilizando React."
        />

        <Lista itens={assuntos} />
      </main>

      <Footer />
    </>
  );
}

export default App;