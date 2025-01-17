import { useState } from 'react'
import Top from './components/Top';
import Ingredients_list from './components/Ingredients_list';

function App() {
  const [count, setCount] = useState([]);
  const fun = (value)=>{
    // console.log(value);
    // console.log(11111111);
    setCount([...count, value]);
  }
  const disPlayList = count.map((item) =>{
    <li key={item}>{item}</li>
  })
  return (
    <>
    <br />
    <div className='card' >
      <div className='card-body'>
        <Top></Top>
        <br />
        <div className="bg-color">
          <Ingredients_list fun={fun}/>
        </div>
        <ul className='list-group list-group-flush'>
          {
            count.map((item)=>(
              <li key={item} className='list-group-item'>{item}</li>
            ))
          }
        </ul>
      </div>
    </div>
      {/* <div className="card" style="width: 18rem;">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> */}
    </>
  )
}

export default App
