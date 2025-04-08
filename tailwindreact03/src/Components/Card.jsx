import React from 'react';

const Card = ({linkTxt, heading="heading"}) => { //heading="heading" by default value of compunent
   // console.log("props :", props); 
   console.log(linkTxt);
   
  return (
    <>
    <div className="overflow-hidden bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-5xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pt-4 lg:pr-8">
        <div className="lg:max-w-lg">
          <h2 className="text-base/7 font-semibold text-indigo-600">{linkTxt}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">{heading}</p>
        </div>
      </div>
      <div className='mx-auto block h-20 rounded-full'>
         <img src="https://images.pexels.com/photos/30604536/pexels-photo-30604536/free-photo-of-elegant-woman-in-vintage-dress-on-city-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Card
