import { Container } from "semantic-ui-react";
import styles from "./Info.module.scss";
import { DateTime } from "luxon";

export function Info(props) {
  const { game } = props;

  return (
    <Container className={styles.info}>
      <div className={styles.summary}>
        <p>{game.summary}</p>
      </div>

      <div className={styles.more}>
        <ul>
          <li>
            <span>Fecha de lanzamiento:</span> {DateTime.fromISO(game.createdAt, { locale: "es" }).toFormat("DDD") }
          </li>
        </ul>
      </div>
    </Container>
  );
}
