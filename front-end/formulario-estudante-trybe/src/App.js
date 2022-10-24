import ComponentProvider from "./context/ComponentProvider";
import Form from "./components/Form";
import Answer from "./components/Answer";

function App() {
  return (
    <main>
      <ComponentProvider>
        <Form />
        <Answer />
      </ComponentProvider>
    </main>    
  );
}

export default App;
