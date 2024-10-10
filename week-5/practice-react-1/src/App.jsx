//useState hook
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        {/* <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button> */}

        {/* taking states as input as props */}
        <CustomButton count={count} setCount={setCount}></CustomButton>
       </div>
    </>
  )
}


//props is giving error so using state keyword
function CustomButton(state){
  function  onClickHandle(){
    state.setCount(state.count +1);
  }

  // creating button element , setAttribute, document.appendChild
  return <button  onClick={onClickHandle}>
    Counter {state.count}
  </button>

  // return (React.createElement("button",{onClick:onClickHandle}, `counter ${state.count}`));
}

export default App;
