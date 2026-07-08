import { ContactForm } from '../components/contacts/ContactForm';
import { ContactInfo } from '../components/contacts/ContactInfo';
import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={styles.page}>
      {/* Hero-секция */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Контакты</h1>
          <p className={styles.subtitle}>Свяжитесь с нами любым удобным способом</p>
        </div>
      </section>

      {/* Контакты */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.formWrapper}>
              <h2 className={styles.sectionTitle}>Отправить сообщение</h2>
              <ContactForm />
            </div>
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;
