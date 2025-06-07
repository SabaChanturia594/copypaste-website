import styles from '../styles/Login.module.css';

export default function Login() {
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
