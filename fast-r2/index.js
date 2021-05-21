// 함수형 컴포넌트
function helloWorldButton() {
  const [isClick, setClickState] = React.useState(false);
  const text = isClick ? "Bye world!" : "Hello world!";
  return (
    <button onClick={setClickState()} >
        <div>
            <span>Hello world!</span>
        </div>
    </button>   
  );
}
const rootContainer = document.getElementById("react-root");
ReactDOM.render(React.createElement(helloWorldButton), rootContainer);
