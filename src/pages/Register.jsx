import styles from '../styles/Register.module.css';

export default function Register() {
  return (
    <div className={styles.login}>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
