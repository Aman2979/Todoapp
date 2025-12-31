import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import Footer from "./components/Footer";
import LoadItems from "./components/LoadItems";
import TodoItems from "./components/TodoItems";
import { TodoItemsProvider } from "./store/TodoItemsContext";

function App() {
  return (
    <TodoItemsProvider>
      <center>
        <AppName />
        <AddTodo />
        <LoadItems />
        <TodoItems />
      </center>
      <Footer />
    </TodoItemsProvider>
  );
}

export default App;
