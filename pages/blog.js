/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
const blog = (props) => {
  const [blogs, setblogs] = useState(props.allBlogs);
  return <div className={styles.container}>
    <main className={styles.main}>
    {blogs.map((blogitem)=>{
      return <div key={blogitem.slug}>
        <Link href={`/blogpost/${blogitem.slug}`}>
          <h2>{blogitem.title}</h2></Link>
          <p>{blogitem.content.substr(0,100)}...</p>
      </div>

    })}
    </main>
  </div>
};
export async function getServerSideProps(context) {
let data = await  fetch('http://localhost:3000/api/blogs');
let allBlogs = await data.json();
  return {
    props : {allBlogs}
  }
}

export default blog;
