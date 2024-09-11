import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          You travel the world.
          <br />
          Travel Tales keeps track of your adventures.
        </h1>
        <h2>
          Embark on a journey across the globe with an interactive world map
          that tracks every city you've explored. Capture your memories by
          pinning each destination, adding personal notes. Relive your
          experiences with a visual timeline of your travels, and showcase how
          far your footsteps have taken you around the world.
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
