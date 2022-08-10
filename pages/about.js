import React from 'react'
import styles from '../styles/About.module.css'
const about = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.center}>About Hunting Coder</h1>
        <h2>Introduction</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab, obcaecati animi nesciunt, assumenda similique qui quae velit beatae, repellat odit nisi. Et ratione iste nesciunt adipisci enim dolore nemo, ea distinctio</p>
        <h2>Services Offered</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facilis praesentium blanditiis enim tempore officiis accusamus autem provident id qui architecto ducimus</p>
        <p>Services we offer :</p>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
          <li>Service 4</li>
          <li>Service 5</li>
        </ul>
        <h2>Contact Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quia culpa, magni deleniti ipsam, excepturi esse quod eos cumque unde repellendus, ut reiciendis delectus vel.</p>
    </div>  
  )
}
export default about