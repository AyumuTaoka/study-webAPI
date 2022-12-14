import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 新しいTodoを作成
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
    };
    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <TodoWrapper>
      <h2>TODO リスト</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input type="submit" value="add" onSubmit={() => {}} />
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                value={todo.inputValue}
                onChange={(e) => {
                  handleEdit(todo.id, e.target.value);
                }}
              />
              <button onClick={() => handleDelete(todo.id)}>消去</button>
            </li>
          ))}
        </ul>
      </form>
    </TodoWrapper>
  );
}

const TodoWrapper = styled.div`
  width: 50%;
`;
