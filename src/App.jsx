import { useState } from 'react';

export default function App() {
  const [todo, setTodo] = useState("")
  return <div className="bg-yellow-100git init w-full h-screen flex items-center">
    <div className="w-[400px] mx-auto text-center bg-lime-50">
      <h1 className="text-4xl font-bold mb m-4 p-5">TodoList</h1>
      <form>
        <input type="text" />
        <button>Adicionar</button>
      </form>
      <div>
        <ul>
          <li> </li>
        </ul>
      </div>
    </div>
  </div>;
}



