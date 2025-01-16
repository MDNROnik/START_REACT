import {useForm } from "react-hook-form";

interface Props{
    fun : (des: string, amount:number, option:string)=>void;
}




const Form = ({fun}: Props) => {
  const { register , handleSubmit} = useForm();
  return (
    <form onSubmit={handleSubmit((data)=>{
        console.log(data); 
        fun(data.des, data.amount, data.option);
    })}>
      <div className="md-3">
        <label htmlFor="des" className="form-label">
          Description
        </label>
        <input
          {...register('des')}
          id="des"
          type="text"
          className="form-control"
        />
      </div>
      <div className="md-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input {...register('amount')} id="amount" type="number" className="form-control" />
      </div>
      <div className="md-3 mt-3">
        <label htmlFor="option" className="form-label"></label>
        <select id="option" {...register('option')} className="form-select" aria-label="Default select example">
          <option selected>Open this for select Items</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className="mb-3">
        <button className="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
