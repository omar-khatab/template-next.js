import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const BlogPost = async ({params}) => {
  let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  let post = await data.json()
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              {post.title}
            </h1>
            <p className={styles.desc}>
              {post.body}
            </p>
            <div className={styles.author}>
              <Image 
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=''
              width={50}
              height={50}
              className={styles.avatar}/>
              <span className={styles.userName}>John Doe</span>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Image 
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=''
            fill
            className={styles.image}/>
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Esse et quaerat ad? Quaerat reiciendis soluta 
            harum excepturi corporis! Id natus eveniet 
            molestiae excepturi consequuntur odit tempora 
            libero dolorem eligendi sint!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dicta laborum doloribus, tenetur odio, vitae aspernatur 
            nobis qui sapiente magnam quam quibusdam quia sequi ullam 
            eveniet voluptas necessitatibus, perspiciatis sint facere!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Nihil pariatur delectus in officiis 
            commodi nesciunt laboriosam mollitia dolor maiores, 
            consequatur eius quam, voluptates porro eum vitae? 
            Optio fuga eveniet fugit?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempore dicta odio consequatur sit ut, voluptate 
            reprehenderit corporis perspiciatis blanditiis vero 
            maxime illo laudantium sunt saepe ullam facilis. Dolore, 
            ad est.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Nihil pariatur delectus in officiis 
            commodi nesciunt laboriosam mollitia dolor maiores, 
            consequatur eius quam, voluptates porro eum vitae? 
            Optio fuga eveniet fugit?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Nihil pariatur delectus in officiis 
            commodi nesciunt laboriosam mollitia dolor maiores, 
            consequatur eius quam, voluptates porro eum vitae? 
            Optio fuga eveniet fugit? Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Nisi ut quam rerum aspernatur eaque fugiat 
            dolorem, libero voluptas fuga praesentium voluptatum ab odio 
            cumque iure? At reiciendis ut eligendi saepe?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Odit rem consequatur doloremque nisi porro. Eos neque enim 
            sequi itaque, facilis at. Officiis consequuntur 
            facere eius iste quae, dolorum magnam cum.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogPost