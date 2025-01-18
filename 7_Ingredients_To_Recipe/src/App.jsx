import { useState } from 'react'
import Top from './components/Top';
import Ingredients_list from './components/Ingredients_list';
import {getRecipeFromMistral} from "./components/Ai.js"
import Markdown from 'react-markdown'

function App() {
  const [count, setCount] = useState([]);
  const [haveRecipe, setHaveRecipe]= useState(false);
  const [newRecipe, setNewRecipe]= useState();
  const fun = (value)=>{
    // console.log(value);
    //console.log(11111111);
    setCount([...count, value]);
  }
  const showRecipe = ()=>{
    setHaveRecipe(!haveRecipe);
  }

  async function getReipe() {
    const recipe =  await getRecipeFromMistral(count);
    // for(let i=0;i<recipe.length;i++){
    //   console.log(recipe[i]);
      
    // }
    console.log(recipe);
    //setHaveRecipe(!haveRecipe);
    setNewRecipe(recipe);
    showRecipe();
  }
  
  return (
    <>
    <br />
    <div className='card' >
      <div className='card-body'>
        <Top></Top>
        <br />
        <div className="bg-color">
          <Ingredients_list funfuntion={fun}/>
        </div>
        
        {
          count.length>0 &&
          <div>

            <h3>IngreDients On Hand</h3>
            <ul className='list-group list-group-flush'>
              {
                count.map((item)=>(
                  <li key={item} className='list-group-item'>{item}</li>
                ))
              }
            </ul>


            <section className='section-design d-flex gap-3 p-4 '>
              <div className='d-flex justify-content-center align-items-center p-2'>
                <div>
                  <h3>Ready For A Recipe ?</h3>
                  <p>Generate A Recipe From Your List Of Ingredients.</p>
                </div>
                <button className='btn btn-warning' onClick={()=>{
                  getReipe()
                }}>Get A Recipe</button>
              </div>
            </section>
          </div>
        }
        {
          haveRecipe ?
          <div>
            <Markdown>
            {newRecipe}
            </Markdown>
            <p></p>
          </div> :
          <div>
            I Don't Have It
          </div>
        }
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
