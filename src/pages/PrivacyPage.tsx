import styles from './PrivacyPage.module.css';

const PrivacyPage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Политика конфиденциальности</h1>
          <p className={styles.subtitle}>
            ООО «Альтаир Недвижимость» — защита ваших персональных данных
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>1. Общие положения</h2>
            <p className={styles.text}>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты
              персональных данных пользователей сайта ООО «Альтаир Недвижимость» (далее — Компания).
            </p>
            <p className={styles.text}>
              Используя наш сайт, вы даете согласие на обработку ваших персональных данных в
              соответствии с условиями настоящей Политики.
            </p>

            <h2 className={styles.sectionTitle}>2. Какие данные мы собираем</h2>
            <p className={styles.text}>Мы можем собирать следующую информацию:</p>
            <ul className={styles.list}>
              <li>Имя и фамилия</li>
              <li>Контактный телефон</li>
              <li>Адрес электронной почты</li>
              <li>Данные, предоставленные при заполнении форм на сайте</li>
            </ul>

            <h2 className={styles.sectionTitle}>3. Как мы используем данные</h2>
            <p className={styles.text}>Собранные данные используются для:</p>
            <ul className={styles.list}>
              <li>Предоставления услуг и консультаций</li>
              <li>Обработки заявок и обращений</li>
              <li>Улучшения качества обслуживания</li>
              <li>Информирования о новых предложениях и акциях</li>
            </ul>

            <h2 className={styles.sectionTitle}>4. Защита данных</h2>
            <p className={styles.text}>
              Мы принимаем все необходимые меры для защиты ваших персональных данных от
              несанкционированного доступа, изменения, раскрытия или уничтожения.
            </p>
            <p className={styles.text}>
              Ваши данные хранятся на защищенных серверах и передаются только уполномоченным
              сотрудникам Компании.
            </p>

            <h2 className={styles.sectionTitle}>5. Ваши права</h2>
            <p className={styles.text}>Вы имеете право:</p>
            <ul className={styles.list}>
              <li>Запросить информацию о ваших персональных данных</li>
              <li>Внести изменения в свои данные</li>
              <li>Отозвать согласие на обработку данных</li>
              <li>Потребовать удаления данных</li>
            </ul>

            <h2 className={styles.sectionTitle}>6. Контакты</h2>
            <p className={styles.text}>
              По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться к
              нам:
            </p>
            <p className={styles.text}>
              <strong>Email:</strong> altair-stars@bk.ru
              <br />
              <strong>Телефон:</strong> +7 (916) 817-47-88
              <br />
              <strong>Адрес:</strong> ул. Николаева, 54, Электросталь, Московская обл., 144012
            </p>

            <div className={styles.footer}>
              <p>Дата обновления: 01.01.2024</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
