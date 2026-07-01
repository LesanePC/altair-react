import { useState } from 'react';
import styles from './Callback.module.css';

export const Callback = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', service: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className={styles.callbackSection} id="callback">
      <div className="container">
        <div className={styles.callbackInner}>
          <h2 className={styles.callbackTitle}>Нужна консультация?</h2>
          <p className={styles.callbackDescription}>
            Оставьте заявку и мы перезвоним в течение 15 минут
          </p>

          <form className={styles.callbackForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                className={styles.formControl}
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="tel"
                className={styles.formControl}
                name="phone"
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <select
                className={styles.formControl}
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Выберите интересующую услугу</option>
                <option value="buy">Покупка недвижимости</option>
                <option value="sell">Продажа недвижимости</option>
                <option value="rent">Аренда</option>
                <option value="legal">Юридические услуги</option>
                <option value="consultation">Консультация</option>
              </select>
            </div>
            <button type="submit" className={styles.btnPrimary}>
              Отправить заявку
            </button>
            <p className={styles.callbackAgree}>
              Нажимая кнопку, вы соглашаетесь с
              <a href="/privacy"> политикой обработки персональных данных</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
