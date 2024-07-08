import imgSeven from '../../images/7.png'

function ImageTextSlide() {
  return (
 <>
 
 
 
 <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={imgSeven}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">About Our Brands ! </h1>
      <p className="py-6 px-1">
       
Introducing our exceptional culinary student, a true talent in the world of gastronomy. With a refined palate and an innate understanding of flavors, they consistently create innovative and delicious dishes that delight the senses. Their dedication to mastering culinary techniques is evident in their meticulous approach to every recipe and their willingness to experiment with new ingredients. Beyond their technical skills, they possess a profound appreciation for the cultural and historical aspects of food, enriching their creations with stories and traditions from around the globe. Their passion for culinary arts is matched only by their commitment to sustainability and local sourcing, ensuring that their dishes are not only exquisite but also environmentally conscious. 
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
 
 
 
 
 
 
 
 </>
  )
}

export default ImageTextSlide