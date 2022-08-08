import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return <div className={styles.container}>
    <main className={styles.main}>
      <h1>Title of the Page {slug}</h1>
      <hr /> 
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa pariatur quia nemo maxime? Animi accusamus possimus, facilis exercitationem repellat enim distinctio quidem tempore laboriosam necessitatibus, quaerat laudantium eveniet. Deserunt aliquid quod incidunt dolorem explicabo itaque fuga expedita dolor accusamus eligendi omnis voluptatem, suscipit quibusdam?
      </div>
    </main>
  </div>;
}

export default Slug