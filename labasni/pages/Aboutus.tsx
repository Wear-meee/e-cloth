import styles from "../styles/Home.module.css";
import Navbar from "./Navbar"

export default function Aboutus(){
  return <div>
    <Navbar/>
    <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/Home"><img src="logo.png"id="logo"/></a> SPORTS SHOP
        </h1>

        <p className={styles.description}>
          WE START WOKING ON LABASNI SINCE 2021
        
        </p>

       

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>histroy &rarr;</h2>
            <p>WE ARE IN THE E-COMMERCE SINCE 2020
              AND LABASNI IS OUR THIRD PROJECT 
            </p>
          </a>

         <div className={styles.card}>
            <h2>OUR SERVICE &rarr;</h2>
            <p>WE are presanting the high quallity 
              and the offical product .<br></br>
              we are the first 
            </p>
            </div>

         <div className={styles.card}>
            <h2>OUR BRANDS &rarr;</h2>
            <p>NIKE ,UNDERARMOUR,JORDAN<br></br>PUMA,NBA,MLBS<br></br> FOOT JERESEY FOOT
            </p>
            </div>

          
        </div>
      </main>
  </div>
}