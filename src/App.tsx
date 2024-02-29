import dadosStack from "./dados.json";

function App() {
  const { categories } = dadosStack;
  const dadosBurguer = categories[0].burguers;
  // console.log(dadosBurguer);
  dadosBurguer?.forEach((todo) => {
    console.log(todo.name);
    console.log(todo.price)
  });

  return (
    <>
      <span>APi reference</span>
    </>
  );
}

export default App;
