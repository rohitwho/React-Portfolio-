import React from 'react'
import Test from '../../assets/FitZone.png'

function Project({Image,Alt,ProjectName,ProjectInformation,TechUsed,ViewLive,SourceCode,ProjectHeading}) {
  return (
    <section className='Project-Container'>
<figure className='Project-Image'><img src= {Image} alt= {Alt}  loading = "lazy"  />
<figcaption className='Project-Name'>{ProjectName}</figcaption>
</figure>

<article className='Project-Information'>
    <h1 className='Project-H1'>{ProjectHeading}</h1>
   {ProjectInformation}
<div className='Tech-Container'>
    
    <h2 className='Project-Tech'>Tech Used : {TechUsed} </h2>
</div>
    <main className='Project-Actions'>

    <a  target="_blank"  href = {ViewLive} className='Project-Button'>View Live</a>
    <a  target="_blank" href ={SourceCode} className='Project-Button'> Source Code</a>
    

</main>
</article>




    </section>
  )
}

export default Project
