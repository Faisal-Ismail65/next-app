/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'
const contact = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [desc, setdesc] = useState();
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(name, email, phone, desc);
    const data = { name, email, phone, desc };
    fetch('http://localhost:3000/api/postcontact', { method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify(data), }).then(response=>response.text()).then(data => {
      console.log('Success:',data);
      alert("Thanks for contacting us");
      setname('');
      setemail('');
      setphone('');
      setdesc('');

    }).catch((error)=>{
      console.error('Error:',error);
    });
  }
  const handleChange = e => {
    // console.log(e,"change");
    if (e.target.name == 'name') {
      setname(e.target.value);
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value);
    }
    else if (e.target.name == 'phone') {
      setphone(e.target.value);
    }
    else if (e.target.name == 'desc') {
      setdesc(e.target.value);
    }
  }
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>Conctact Us</h1>
        <form onSubmit={handleSubmit}>

          <input className={styles.input} value={name} onChange={handleChange} type="text" id='name' name='name' placeholder='Name'required />
          <br />
          <input className={styles.input} value={email} onChange={handleChange} type="email" id='email' name='email' placeholder='email' required />
          <br />
          <input className={styles.input} onChange={handleChange} value={phone} type="text" id='phone' name='phone' placeholder='Phone No' required />
          <br />
          <textarea className={styles.input} onChange={handleChange} value={desc} name="desc" id="desc" cols="21" rows="7" placeholder='Description' required></textarea>
          <br />
          <button className={styles.btn} type='submit'>submit</button>
        </form>
      </main>
    </div>
  )
}

export default contact