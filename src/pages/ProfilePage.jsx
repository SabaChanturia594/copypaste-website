import { Link } from 'react-router-dom';
import styles from '../styles/ProfilePage.module.css';
import DashIcon from "../assets/svgs/dashIcon"

export default function ProfilePage() {
  return (
    <div className={`${styles.ProfilePage} `}>
      <div className={`${styles.sidebar} `}>

        
        <Link className={styles.item}><DashIcon color="#499BFC"/>Projects</Link>

        <Link className={styles.item}><DashIcon color="#499BFC"/>Reviews</Link>

        <Link className={styles.item}><DashIcon color="#499BFC"/>Sales</Link>

        <Link className={styles.item}><DashIcon color="#499BFC"/>Stats</Link>

        {/* <Link className={styles.item}>Message</Link>

        <Link>Settings</Link>

        <Link>Help</Link>

        <Link> Log Out</Link> */}
      </div>

      {/*MY PROFILE*/}
      <div className={`${styles.myprofile} py-5`}>
        <h2>My Profile</h2>
        <div className={`${styles.profile_banner} py-5`}>
          <div className={`${styles.profile_info} py-5`}>
            <div>
              <h2>Saba <span>Tchanturia</span></h2>
              <p>Agent</p>
            </div>
            <button >Edit Profile</button>
          </div>
        </div>
        <div>
          <h2> sdadsasad</h2>
        </div>
      </div>


      
    </div>
  );
}
