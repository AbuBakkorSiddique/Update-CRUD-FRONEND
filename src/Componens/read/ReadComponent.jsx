import { ReadAll ,DeletedData} from '../../ApiCall/ApiCall';
import { useEffect, useState } from 'react';
import { successMessage, errorMessage } from '../../Helper/ValidationHelper';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function ReadComponent() {
  const [data, setData] = useState([]); 


  // Read Function is compleate =-----------------
  useEffect(() => {


    ReadAll()
      .then((result) => {
      
        if (Array.isArray(result.Data)) {
          setData(result.Data); // we set the data in array 
          successMessage('All Data Are Below');
        } else if (Array.isArray(result)) {
          setData(result);
        } else {
          // console.log('Food Read Call Has a problem',result);
          errorMessage('Food Read Call Has Problem');
        }
        
      })
      .catch((err) => {
        console.log(err);
        errorMessage('No Data is coming from the Backend');
      });
  }, []);

// Delete function are call =-----------------

const DeleteIteam=(id)=>{

DeletedData(id)
.then(()=>{
  navigate('/read'); 
  successMessage('Data Delete Successfully ') ; 

})
.catch((err)=>{
  console.log(err) ; 
  errorMessage('Data Delete Faild ')
}) ; 

};



const UpdateItem=(id)=>{

navigate(`/update/${id}`)
}; 

const navigate=useNavigate() ; 

  return (
    <>
       <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card list-card">
                            <div className="card-header pb-0 text-center">
                                <h4>Product List</h4>
                            </div>
                            <div className="card-body">
        <table className='table table-striped'>
          <thead className='bg-success'>
            <tr>
              <th className='text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2 bg-info text-white"'>Product Name</th>
              <th className='text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2 bg-info text-white"'>Product Code</th>
              <th className='text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2 bg-info text-white"'>Product Image</th>
              <th className='text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2 bg-info text-white"'>Product Category</th>
              <th className='text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2 bg-info text-white"'>Product Quantity</th>
              <th className='text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2 bg-info text-white"'>Product Price</th>
              <th className='text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2 bg-info text-white"'>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) =>{
              return(
                <tr key={index}>
                <td>{item.FoodName}</td>
                <td>{item.FoodCode}</td>
                <td>{item.FoodImage}</td>
                <td>{item.FoodCatagory}</td>
                <td>{item.FoodQuantity}</td>
                <td>{item.FoodPrice}</td>
                <td className='d-flex gap-2'>
                  <button className='btn btn-success' onClick={UpdateItem.bind(this,item._id)}  >Update</button>
                  <button className='btn btn-danger'   onClick={DeleteIteam.bind(this,item._id)}>Delete</button>
                </td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      </div>
      </div>
      </div>
      </div>
      












      <ToastContainer />
    </>
  );
}

export default ReadComponent;
