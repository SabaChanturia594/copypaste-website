import { useLocation } from 'react-router-dom';
import styles from '../styles/Contact.module.css';

const TEXT = {
  ka: {
    title: 'კონტაქტი',
    subtitle: 'შესაკვეთათ მოგვწერეთ Mail_ზე ან WhatsApp_ზე',
    phone: 'ტელეფონი',
    whatsapp: 'WhatsApp',
    facebook: 'Facebook',
    email: 'ელ-ფოსტა',
    address: 'მისამართი',
    hours: 'სამუშაო საათები',
    cta: 'მოგვწერე ახლავე',
    mapTitle: 'ჩვენი მდებარეობა რუკაზე',
    waPrefill: 'გამარჯობა! მინდა შეკვეთა/კონსულტაცია. 😊',
    mailSubject: 'Copy Paste • შეკვეთა / კითხვა',

  },
  en: {
    title: 'Contact',
    subtitle: 'To order, contact us via Email or WhatsApp.',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    facebook: 'Facebook',
    email: 'Email',
    address: 'Address',
    hours: 'Working hours',
    cta: 'Message us now',
    mapTitle: 'Find us on the map',
    waPrefill: 'Hi! I’d like to place an order / ask a question. 😊',
    mailSubject: 'Copy Paste • Order / Question',
    
  },
};

function Icon({ name }) {
  if (name === 'phone')
    return (
      <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.6 10.8c1.5 3.2 3.4 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2c1.3.5 2.7.8 4.2.8c.7 0 1.3.6 1.3 1.3V21c0 .7-.6 1.3-1.3 1.3C10.6 22.3 1.7 13.4 1.7 2.3C1.7 1.6 2.3 1 3 1h3.8c.7 0 1.3.6 1.3 1.3c0 1.5.3 2.9.8 4.2c.1.4 0 .9-.2 1.2L6.6 10.8z"
        />
      </svg>
    );

  if (name === 'whatsapp')
    return (
      <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.5 3.5A11 11 0 0 0 2.7 16.9L2 22l5.2-1.7A11 11 0 0 0 20.5 3.5Zm-8.6 17a9 9 0 0 1-4.6-1.3l-.3-.2-3.1 1 1-3-.2-.3a9 9 0 1 1 7.2 3.8Zm5.3-6.7c-.3-.1-1.7-.8-2-1c-.3-.1-.5-.1-.7.2l-.8 1c-.2.3-.4.3-.7.2c-.3-.1-1.2-.4-2.3-1.4c-.9-.8-1.5-1.8-1.6-2.1c-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6c.1-.2 0-.4 0-.5c-.1-.1-.7-1.7-1-2.3c-.3-.6-.6-.5-.7-.5h-.6c-.2 0-.5.1-.7.3c-.2.2-1 1-1 2.4c0 1.4 1 2.8 1.1 3c.2.2 2 3 4.8 4.2c.7.3 1.2.5 1.6.6c.7.2 1.3.2 1.8.1c.5-.1 1.7-.7 1.9-1.4c.2-.7.2-1.3.2-1.4c0-.1-.2-.2-.5-.3Z"
        />
      </svg>
    );

  if (name === 'facebook')
    return (
      <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
        <path
          fill="currentColor"
          d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.7c0-2.4 1.4-3.8 3.6-3.8c1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12H16l-.4 3h-2.1v7A10 10 0 0 0 22 12Z"
        />
      </svg>
    );

  if (name === 'email')
    return (
      <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
        <path
          fill="currentColor"
          d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
        />
      </svg>
    );

  if (name === 'pin')
    return (
      <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
        />
      </svg>
    );

  if (name === 'clock')
    return (
      <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 11h4v-2h-3V7h-2v6Z"
        />
      </svg>
    );

  return null;
}

export default function Contact() {
  const { pathname } = useLocation();
  const lang = pathname.startsWith('/en') ? 'en' : 'ka';
  const t = TEXT[lang];

  // ✅ შენი რეალური მონაცემები
  const phone = '+995 555 96 68 15';
  const phoneClean = phone.replace(/\D/g, ''); // 995599966815
  const email = 'CopyPasteTbilisi@gmail.com';
  const address = 'თბილისი, ჭავჭავაძის 26';
  const facebookUrl = 'https://www.facebook.com/profile.php?id=61584105217639';

  // ✅ WhatsApp auto-open + prefilled message
  const waText = encodeURIComponent(t.waPrefill);
  const whatsappUrl = `https://wa.me/${phoneClean}?text=${waText}`;

  // ✅ Email draft (mailto) + subject/body
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    t.mailSubject
  )}&body=${encodeURIComponent(t.mailBody)}`;

  // ✅ Google Maps embed (API key არ გჭირდება)
  const mapQuery = encodeURIComponent('ჭავჭავაძის 26, თბილისი');
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <h1 className={styles.title}>{t.title}</h1>
            <p className={styles.subtitle}>{t.subtitle}</p>

            <div className={styles.quickRow}>
              <span className={styles.pill}>{t.hint}</span>
              <span className={styles.pill}>Copy Paste • Tbilisi</span>
            </div>
          </div>

          <a className={styles.primaryCta} href={whatsappUrl} target="_blank" rel="noreferrer">
            {t.cta} →
          </a>
        </div>
      </section>

      <section className={styles.grid}>
        {/* 📞 Call */}
        <a className={`${styles.card} ${styles.cardAccent}`} href={`tel:${phoneClean}`}>
          <div className={styles.cardTop}>
            <Icon name="phone" />
            <div className={styles.cardTitle}>{t.phone}</div>
          </div>
          <div className={styles.cardValue}>{phone}</div>
          <div className={styles.cardHint}>{lang === 'ka' ? 'დარეკვა →' : 'Call →'}</div>
        </a>

        {/* 💬 WhatsApp chat */}
        <a className={styles.card} href={whatsappUrl} target="_blank" rel="noreferrer">
          <div className={styles.cardTop}>
            <Icon name="whatsapp" />
            <div className={styles.cardTitle}>{t.whatsapp}</div>
          </div>
          <div className={styles.cardValue}>{phone}</div>
          <div className={styles.cardHint}>{lang === 'ka' ? 'ჩატის გახსნა →' : 'Open chat →'}</div>
        </a>

        {/* f Facebook */}
        <a className={styles.card} href={facebookUrl} target="_blank" rel="noreferrer">
          <div className={styles.cardTop}>
            <Icon name="facebook" />
            <div className={styles.cardTitle}>{t.facebook}</div>
          </div>
          <div className={styles.cardValue}>Copy Paste</div>
          <div className={styles.cardHint}>{lang === 'ka' ? 'გვერდზე გადასვლა →' : 'Open page →'}</div>
        </a>

        {/* ✉️ Email draft */}
        <a className={styles.card} href={mailtoUrl}>
          <div className={styles.cardTop}>
            <Icon name="email" />
            <div className={styles.cardTitle}>{t.email}</div>
          </div>
          <div className={styles.cardValue}>{email}</div>
          <div className={styles.cardHint}>{lang === 'ka' ? 'Draft გახსნა →' : 'Open draft →'}</div>
        </a>

        {/* 📍 Address + Map */}
        <div className={`${styles.card} ${styles.cardWide}`}>
          <div className={styles.cardTop}>
            <Icon name="pin" />
            <div className={styles.cardTitle}>{t.address}</div>
          </div>
          <div className={styles.cardValue}>{address}</div>

          <div className={styles.mapWrap} aria-label={t.mapTitle}>
            <iframe
              title={t.mapTitle}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className={styles.cardHint}>
            {lang === 'ka' ? 'რუკის ნახვა' : 'Open map'}
          </div>
        </div>

        {/* 🕒 Hours */}
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <Icon name="clock" />
            <div className={styles.cardTitle}>{t.hours}</div>
          </div>
          <div className={styles.cardValue}>11:00 - 20:00</div>
          <div className={styles.cardHint}>—</div>
        </div>
      </section>
    </main>
  );
}
