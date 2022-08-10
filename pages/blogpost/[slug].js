/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react'
import styles from '../../styles/Blogpost.module.css'
const Slug = (props) => {
  const [blog, setblog] = useState(props.myBlog)
  return <div className={styles.container}>
    <main className={styles.main}>
      <h1>{blog.title}</h1>
      <hr /> 
      <div>{blog.content}</div>
    </main>
  </div>;
}
export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await  fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myBlog = await data.json();
    return {
      props : {myBlog}
    }
  }
export default Slug