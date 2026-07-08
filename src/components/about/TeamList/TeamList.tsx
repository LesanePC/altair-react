import type { TeamMember } from '../../../types';
import { TeamCard } from '../TeamCard';
import styles from './TeamList.module.css';

interface TeamListProps {
  members: TeamMember[];
}

export const TeamList = ({ members }: TeamListProps) => {
  return (
    <div className={styles.grid}>
      {members.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  );
};
