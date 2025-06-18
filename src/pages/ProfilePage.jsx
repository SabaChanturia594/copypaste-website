import { Link } from 'react-router-dom';
import styles from '../styles/ProfilePage.module.css';
import dashIcon from '../assets/svgs/dashIcon';


export default function ProfilePage() {
  return (
    <div className={`${styles.ProfilePage} py-5`}>
      <div className={`${styles.sidebar} py-5`}>  
        <div>
          <dashIcon></dashIcon>
          <Link to="#">Dashboard</Link>
        </div>
        
        <div>
          <img src={property} alt="" />
          <Link to="#">Property</Link>
        </div>

        <div>
          <img src={agent} alt="" />
          <Link to="#">Agent</Link>
        </div>

        <div>
          <img src={review} alt="" />
          <Link to="#">Review</Link>
        </div>

        <div>
          <img src={message} alt="" />
          <Link to="#">Message</Link>
        </div>

        <div>
          <img src={settings} alt="" />
          <Link to="#">Settings</Link>
        </div>

        <div>
          <img src={help} alt="" />
          <Link to="#">Help</Link>
        </div>

        <div>
          <img src={logout} alt="" />
          <Link to="#"> Log Out</Link>
        </div> 
      </div>
      {/*MY PROFILE*/}
      <div className={`${styles.myprofile} py-5`}>
        <h2>My Profile</h2>
        <div className={`${styles.profile_banner} py-5`}>
          <img src={cover} alt="cover" />
          <div className={`${styles.profile_info} py-5`}>
            <img src={profilephoto} alt="Profile" />
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
