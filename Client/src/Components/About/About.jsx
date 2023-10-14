import React from 'react'
import Lottie from 'lottie-react'
import Section from '../../pages/About-Animation/animation1.json'

function About() {
  return (
   <section  id = "About"className='About-Me-Container'>
    <main className='About-Me-Animation'>
        <Lottie animationData={Section}></Lottie>

    </main>
    <aside className='About-Me-Intro'>
        <h1 className=' About-Heading'>Aspiring Devoloper</h1>
        <p className='About-Paragraph'>I'm a passionate full stack developer with a love for turning creative ideas into functional, user-friendly web applications. My journey is defined by a dedication to crafting efficient, secure, and visually appealing solutions.</p>
        <p className='About-Paragraph'>Beyond coding, I enjoy fostering collaborative relationships with clients and fellow developers. I believe that great products are born from strong partnerships and open communication.</p>
    </aside>

   </section>
  )
}

export default About
