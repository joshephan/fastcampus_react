import { useSelector } from "react-redux";

export default function DoneList() {
  const list = useSelector((state) => state.todo.list).filter(
    (item) => item.done
  );
  return (
    <section>
      {list.length > 0 && <h1>완료된 목록</h1>}
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
}
