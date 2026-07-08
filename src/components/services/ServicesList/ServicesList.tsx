import type { ServiceItem } from '../../../types';
import { ServiceCard } from '../ServiceCard';
import styles from './ServicesList.module.css';

interface ServicesListProps {
  services: ServiceItem[];
}

export const ServicesList = ({ services }: ServicesListProps) => {
  return (
    <div className={styles.grid}>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};
