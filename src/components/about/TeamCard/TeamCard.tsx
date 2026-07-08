import type { TeamMember } from '../../../types';
import styles from './TeamCard.module.css';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.photoWrapper}>
        <img src={member.photo} alt={member.name} className={styles.photo} loading="lazy" />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.position}>{member.position}</p>
        <p className={styles.experience}>Стаж: {member.experience}</p>
        <div className={styles.credentials}>
          <p>{member.credentials}</p>
          <p>{member.credentialsDate}</p>
        </div>
        <div className={styles.contacts}>
          <a href={`tel:${member.phone}`} className={styles.phone}>
            {member.phone}
          </a>
          <a href={`mailto:${member.email}`} className={styles.email}>
            {member.email}
          </a>
        </div>
      </div>
    </article>
  );
};
