import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Blog = async () => {
  let data = await fetch('https://jsonplaceholder.typicode.com/posts/')
  let posts = await data.json()
  return (
    <div className={styles.mainContainer}>
      {posts.map((post) => (
        <Link href={`blog/${post.id}`} className={styles.container} key={post.id}>
          <div className={styles.imageContainer}>
            <Image 
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=''
            width={400}
            height={250}
            className={styles.image}/>  
          </div>
          <div className={styles.content}>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.desc}>{post.body}</p>
          </div>
        </Link>
      ))};
    </div>
  )
}

export default Blog