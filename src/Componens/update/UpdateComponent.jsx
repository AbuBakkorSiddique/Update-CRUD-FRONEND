import { useEffect, useRef, useState } from 'react';
import { ReadDatabyID ,UpdateFoodData} from '../../ApiCall/ApiCall';
import {isEmpety, successMessage, errorMessage } from '../../Helper/ValidationHelper';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';





function UpdateComponent() {

// set Data by usestate  which data are coming 

const [Iddata,setIddata] = useState([]) ; 

///get id by useParams 

const {id}=useParams() ; 

// now read the data by useeffect 

useEffect(()=>{
  ReadDatabyID(id)
  .then((result)=>{
   

setIddata(result.Data) ; 
console.log(result.Data)

  })

  .catch((err)=>{

console.log(err) ; 

  })

},[id]);


/// use Ref 

    // use useRef -----------------
    const   FoodName=useRef() ;
    const   FoodCode=useRef() ; 
    const   FoodImage=useRef() ;
    const   FoodCatagory=useRef();
    const   FoodQuantity=useRef() ; 
    const  FoodPrice=useRef() ;



    /// now use validatin + submit data 
    
const UpdateItem=async()=>{

  const Food_Name= FoodName.current.value; 
  const Food_Code= FoodCode.current.value;
  const Food_Image=FoodImage.current.value;
  const Food_Catagory=FoodCatagory.current.value;
  const Food_Quantity=FoodQuantity.current.value ; 
  const Food_Price = FoodPrice.current.value ; 
  
 

  if(isEmpety(Food_Name)){
      errorMessage('Food Name Require'); 
  }else if(isEmpety(Food_Code)){
    errorMessage('Food Code Require '); 
  }else if(isEmpety(Food_Image)){
    errorMessage('Food  Image Require'); 
  }else if(isEmpety(Food_Catagory)){
    errorMessage('Food Catagory Require') ; 
  }else if(isEmpety(Food_Quantity)){
    errorMessage('Food Quantity Require ');
  }else if(isEmpety(Food_Price)){
    errorMessage('Food Price Require ')
  }

  // elase 

  else{

try{

  UpdateFoodData(Food_Name,Food_Code,Food_Image,Food_Catagory,Food_Quantity,Food_Price)
.then((Result)=>{
if(Result===true){
successMessage('Food Data  Update  Successfully ');
navigate('/update') ; 

}
else{
successMessage('Food Data Update Faild ')
}
  
})

}

catch(err){

console.log(`Food Data not Update  Reason is ${err}`);
errorMessage(`Food Data are not Update Reason is ${err}`); 


}

  }


};



// usr useNavigator 

const navigate=useNavigate() ; 


  return (
  <>
  
  
  <div className='container'>
  <div className="container">
    <div className="row">
      <div className='col-md-4 p-4'>
         <label>Product Name</label>
         <br/>
        <input type='text'
                defaultValue={Iddata ? Iddata['FoodName'] : ''}
                className='form-control'
                ref={FoodName}
         />  
      </div>



      <div className='col-md-4 p-4'>
         <label>Product Code </label>
         <br/>
        <input type='text'
                defaultValue={Iddata ? Iddata['FoodCode'] : ''}
                className='form-control'
                ref={FoodCode}
         />
      </div>


      <div className='col-md-4 p-4'>
         <label>Product Iamge </label>
         <br/>
        <input type='file'
                defaultValue={Iddata ? Iddata['FoodImage'] : ''}
                className='form-control'
                ref={FoodImage}
         />
      </div>


      <div className='col-md-4 p-4'>
         <label>Product Catagory</label>
         <br/>
        <input type='text'
                defaultValue={Iddata ? Iddata['FoodCatagory'] : ''}
                className='form-control'
                ref={FoodCatagory}
         />
      </div>


      <div className='col-md-4 p-4'>
         <label>Product Quantity</label>
         <br/>
        <input type='text'
                defaultValue={Iddata ? Iddata['FoodQuantity'] : ''}
                className='form-control'
                ref={FoodQuantity}
         />
      </div>




      <div className='col-md-4 p-4'>
         <label>Product Price </label>
         <br/>
        <input type='text'
                defaultValue={Iddata ? Iddata['FoodPrice'] : ''}
                className='form-control'
                ref={FoodPrice}
         />
      </div>

    </div>

    <div className="row">
      <div className="col-md-4 p-4">
         <button onClick={UpdateItem} className='btn btn-success'> Update Information </button>
      </div>
    </div>


    

  </div>










  </div>
  
  
  
  
  
  
  {/*  tostContainer  add--------------------------- */}
  <ToastContainer/>
  </>
  )
}

export default UpdateComponent