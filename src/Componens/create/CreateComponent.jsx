import { useRef } from "react"; 
import { isEmpety, successMessage, errorMessage } from '../../Helper/ValidationHelper'
import {FoodIteamCreate} from '../../ApiCall/ApiCall'; 
import { ToastContainer } from "react-toastify";


function CreateComponent() {


    // use useRef -----------------
  const   FoodName=useRef() ;
  const   FoodCode=useRef() ; 
  const   FoodImage=useRef() ;
  const   FoodCatagory=useRef();
  const   FoodQuantity=useRef() ; 
  const  FoodPrice=useRef() ;


// use SAVE  button  ---------------------

const SAVE=async()=>{

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

   FoodIteamCreate(Food_Name,Food_Code,Food_Image,Food_Catagory,Food_Quantity,Food_Price)
  .then((Result)=>{
if(Result===true){
  successMessage('Food Data Create Successfully ');
  
}
else{
  successMessage('Food Data Create Faild ')
}
    
  })

}

catch(err){

console.log(`Food Data not create Reason is ${err}`);
errorMessage(`Food Data are not create Reason is ${err}`); 


}

    }


};



/// now only this is for use Navigate 





  return (
    <>
    


   <div className="container p-4">

    {/*  ------  */}
   <div className="container">
        <div className="row">
            {/* -----------------  */}
            <div className="col-md-4 p-4" >
            <label>Product Name</label>
            <br />
            <input type="text" className="form-control" ref={FoodName} />
            </div>
 
            <div className="col-md-4 p-4" >
            <label>Product Code</label>
            <br />
            <input type="text" className="form-control" ref={FoodCode} />
            </div>

            <div className="col-md-4 p-4" >
            <label>Product Image</label>
            <br />
            <input type="file" className="form-control"   ref={FoodImage}/>

            
            </div>


            <div className="col-md-4 p-4" >
            <label>Product Catagory</label>
            <br />
            <input type="text" className="form-control"  ref={FoodCatagory} />
            </div>


            <div className="col-md-4 p-4" >
            <label>Product Quantity</label>
            <br />
            <input type="text" className="form-control" ref={FoodQuantity} />
            </div>


            <div className="col-md-4 p-4" >
            <label>Product Price</label>
            <br />
            <input type="text" className="form-control" ref={FoodPrice}  />
            </div>



        </div>

        {/* ---------------  */}

        <div className="row">
          <button className="btn btn-success col-md-4"  onClick={SAVE}>
            Save
          </button>
        </div>
    </div>
    
    
    
    
    
    
    

   </div>

   <ToastContainer/>
    
    </>
  )
}

export default CreateComponent