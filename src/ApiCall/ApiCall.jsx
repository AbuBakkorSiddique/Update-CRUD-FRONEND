import axios from 'axios' ; 


// create Food Data   
export function FoodIteamCreate(FoodName,FoodCode,FoodImage,FoodCatagory,FoodQuantity,FoodPrice){
const URL = "https://update-crud-frondend.vercel.app/create" ; 
const reqBODY ={

    FoodName,
    FoodCode,
    FoodImage,
    FoodCatagory,
    FoodQuantity,
    FoodPrice

}

return axios.post(URL,reqBODY)
.then((res)=>{
    if (res.status===200){
        return true ; 
    }
    else{
        return false; 
    }
})
.catch((err)=>{
    console.log(err) ; 
    return false ; 
})

}


// Read Food Data  ALl 

export function ReadAll(){

const URL = "https://update-crud-frondend.vercel.app/read" ; 

return axios.get(URL) 
.then((res)=>{
    if(res.status===200){
        
         return res.data; 
       
    }else{
         console.log('Data Are not Read') ; 
        return false ; 
    }
})
.catch((err)=>{
    console.log(err) ; 
    return false; 
})


}


//Read Data BY  ID 

export function  ReadDatabyID(id){

const URL =`https://update-crud-frondend.vercel.app/read/${id}`; 

return axios.get(URL) 
.then((res)=>{

if(res.status===200){
    console.log('Data are read by ID ') ; 
    return res.data; 
}else{
    console.log('Data are not Read By ID ') ; 
    return false ; 
}


})
.catch((err)=>{
    console.log(err) ; 
    return false ; 
})

}



// update Food Data 


export function UpdateFoodData(id,FoodName,FoodCode,FoodImage,FoodCatagory,FoodQuantity,FoodPrice){

const URL = `https://update-crud-frondend.vercel.app/update/${id}` ; 
const reqBODY ={

    FoodName,
    FoodCode,
    FoodImage,
    FoodCatagory,
    FoodQuantity,
    FoodPrice

}

return axios.post(URL,reqBODY) 
.then((res)=>{


    if(res.status===200){
        console.log('Data are update') ; 
        return true ; 
    }else{
        console.log('Data are Not Updated ') ; 
        return false ; 
    }
})
.catch((err)=>{
    console.log(err) ; 
    return false ; 
})

}



// Delete Food Product 

export function DeletedData(id){
const URL= ` https://update-crud-frondend.vercel.app/delete/${id}`; 


return axios.get(URL) 
.then((res)=>{
    if(res.status===200){
        console.log('Data are Deleted successfully ...... ');
        return true ; 
    }else{
        console.log('Data Delete Faild ') ; 
        return false; 
    }
})
.catch((err)=>{
    console.log(err) ; 
    return false; 
})

}