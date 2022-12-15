import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

export default function Todo() {
  // レンダリングが最小限となるようにuseStateで定義している
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // Todoの方を定義している
  type Todo = {
    inputValue: string;
    id: number;
  };

  // 入力フォームの中身が変わった時の挙動を定義
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // addボタンを押したときの挙動を定義
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 新しいTodoを作成
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
    };
    setTodos([newTodo, ...todos]);

    // フォームの初期化
    setInputValue("");
  };

  // Todoリスト内のものを編集する時の挙動を定義
  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  // 消去ボタンを押したときの挙動を定義
  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // DOMを返す
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

// 以下styled-componentによるスタイルの指定
const TodoWrapper = styled.div`
  width: 50%;
`;
