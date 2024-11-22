import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/Components/Button/Button'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
        src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt='lama about' 
        fill
        className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Earum, voluptatum quisquam. Molestias saepe ea accusamus 
            quos sed adipisci accusantium et consequuntur alias repellat, 
            eius facere quisquam debitis non eos expedita?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius eaque 
            aut possimus. Reiciendis doloremque ratione, fugit, deleniti sed 
            aliquid obcaecati ipsum facere, explicabo labore earum laboriosam.
            saepe nesciunt nulla 
            <br/>
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            ducimus distinctio tempore incidunt quaerat at. Error praesentium doloribus
            Provident, ex? Perspiciatis sint tenetur inventore excepturi soluta 
            ducimus distinctio tempore incidunt quaerat at. Error praesentium doloribus
            dolorum amet fugiat dolore? Alias!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias 
            saepe non officia odio, delectus unde nihil eum, beatae harum cumque, 
            sapiente obcaecati rem mollitia. Ipsum cum alias aliquam itaque beatae!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Earum, voluptatum quisquam. Molestias saepe ea accusamus 
            quos sed adipisci accusantium et consequuntur alias repellat, 
            eius facere quisquam debitis non eos expedita?
            <br/>
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Provident, ex? Perspiciatis sint tenetur inventore excepturi soluta 
            ducimus distinctio tempore incidunt quaerat at. Error praesentium doloribus
            dolorum amet fugiat dolore? Alias!
            Creative Illustrations
            <br/>
            <br/> - Dynamics Websites
            <br/>
            <br/> - Fast and Handy
            <br/>
            <br/> - Mobile Apps
          </p>
          <Button url="/contact" text = "Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About