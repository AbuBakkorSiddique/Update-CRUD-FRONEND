import MasterLayout from "../MasterLayout/Master_Layout/MasterLayout";
import Carosule from "../MasterLayout/slidebar/Carosule";
import Features from "../MasterLayout/Features section/Features";
import ImageTextSlide from "../MasterLayout/comments+image slide/ImageTextSlide";

MasterLayout

function HomePage() {
  return (
   <>
  <MasterLayout >
    <Carosule />
   <div className="container-fluid d-flex justify-content-center p-3 bg-base-200">
  <Features /> 
    
   </div>
   <div className="">
    <ImageTextSlide />
   </div>









  </MasterLayout>
   
   
   
   
   
   
   
   </>
  )
}

export default HomePage