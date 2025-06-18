import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h4>LEGAL</h4>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
      <div>
        <h4>LANGUAGE</h4>
        <select>
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="eo">Esperanto</option>
          <option value="fr">Français</option>
          <option value="hu">Magyar</option>
          <option value="geo">Georgians</option>
        </select>
      </div>
    </footer>
  );
}
