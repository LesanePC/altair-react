import { mockTeam } from '../../../api/mockData';
import styles from './Team.module.css';

export const Team = () => {
  return (
    <section className="section team-section">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">Наши специалисты</h2>
          <p className="section__description">
            Команда профессионалов с опытом работы более 10 лет. Гарантия безопасности каждой сделки
          </p>
        </header>

        <div className={styles.team}>
          {mockTeam.map((member) => (
            <article className={styles.teamItem} key={member.id}>
              <div className={styles.teamPhotoWrapper}>
                <img
                  className={styles.teamPhoto}
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                />
              </div>
              <div className={styles.teamInfo}>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamProf}>{member.position}</p>
                <p className={styles.teamExperience}>Стаж: {member.experience}</p>
                <div className={styles.teamCredentials}>
                  <p>{member.credentials}</p>
                  <p>{member.credentialsDate}</p>
                </div>
                <div className={styles.teamContacts}>
                  <a href={`tel:${member.phone}`} className={styles.teamPhone}>
                    {member.phone}
                  </a>
                  <a href={`mailto:${member.email}`} className={styles.teamEmail}>
                    {member.email}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.teamCta}>
          <a href="/about#team" className="btn btn-outline">
            Все специалисты →
          </a>
        </div>
      </div>
    </section>
  );
};
