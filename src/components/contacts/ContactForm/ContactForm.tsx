import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './ContactForm.module.css';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required('Введите ваше имя'),
    phone: yup.string().required('Введите номер телефона'),
    email: yup.string().email('Некорректный email').required('Введите email'),
    message: yup.string().required('Введите сообщение'),
  })
  .required();

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Имитация отправки
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Данные формы:', data);
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Ваше имя
        </label>
        <input
          id="name"
          type="text"
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          placeholder="Иван Иванов"
          {...register('name')}
        />
        {errors.name && <span className={styles.error}>{errors.name.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone" className={styles.label}>
          Номер телефона
        </label>
        <input
          id="phone"
          type="tel"
          className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
          placeholder="+7 (___) ___-__-__"
          {...register('phone')}
        />
        {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          id="email"
          type="email"
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          placeholder="ivanov@mail.ru"
          {...register('email')}
        />
        {errors.email && <span className={styles.error}>{errors.email.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Сообщение
        </label>
        <textarea
          id="message"
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          placeholder="Опишите ваш вопрос..."
          rows={5}
          {...register('message')}
        />
        {errors.message && <span className={styles.error}>{errors.message.message}</span>}
      </div>

      <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
        {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
      </button>
    </form>
  );
};
