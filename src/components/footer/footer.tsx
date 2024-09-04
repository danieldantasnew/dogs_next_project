import Dogs from "../svgs/dogs/dogs";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} flex-row`}>
      <div className="content-space flex-column">
        <Dogs />
        Dogs. Alguns direitos reservados.
      </div>
    </footer>
  );
}
