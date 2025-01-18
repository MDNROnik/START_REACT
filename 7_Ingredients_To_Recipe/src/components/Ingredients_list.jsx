import React from 'react'
// interface Props{
//     fun : (value: string)=>void;
// }


const Ingredients_list = ({funfuntion}) => {
  function submit(event){
    event.preventDefault();
    const data =new FormData( event.currentTarget );
    console.log(Object.fromEntries(data));
    
    const ingre = data.get("ingre");
    funfuntion(ingre);
    event.currentTarget.reset();
  }
  
  return (
    <>
    <form onSubmit={submit}>
        <div className=" mb-3 d-flex gap-3 p-4">
            <input type="text" className="form-control" id="name" placeholder="Enter your Ingredient" aria-label='Add Ingredient' name="ingre"/>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </div>
    </form>
    </>
  )
}

export default Ingredients_list