import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import LoadItems from "./components/LoadItems";
import TodoItems from "./components/TodoItems";
import Footer from "./components/Footer";
import { TodoItemsProvider } from "./store/TodoItemsContext";

function App() {
  return (
    <TodoItemsProvider>
      {/* Page Wrapper */}
      <div className="min-h-screen flex flex-col">

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center">
          <AppName />
          <AddTodo />
          <LoadItems />
          <TodoItems />
        </main>

        {/* Footer always at bottom */}
        <Footer />

      </div>
    </TodoItemsProvider>
  );
}

export default App;
