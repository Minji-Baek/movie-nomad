import styles from "./App.moudule.css"
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev)=> prev + 1);
  const onChange = (event) => {setKeyword(event.target.value)};
  console.log("i run all time");
  useEffect(() => {
    console.log("I run only once")
  }, []); // useEffect(실행되는 함수, 실행되는 조건이 되는 변수들의 배열(빈값일땐 첫 render때만 실행 후 아무런 실행되지 않음))
  useEffect(() => {
    console.log("I run when 'keyword' changes")
  }, [keyword]); //vue의 watch 같음
  useEffect(() => {
    console.log("I run when 'counter' changes")
  }, [counter]); 
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" ></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
