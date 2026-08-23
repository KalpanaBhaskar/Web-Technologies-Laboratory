import { useState } from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import styles from './ContactPages.module.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_FIELDS = { name: '', email: '', subject: '', message: '' };
const INITIAL_ERRORS = { name: '', email: '', subject: '', message: '' };

const contactInfo = [
  {
    title: 'Main Campus',
    text: ['404 Academic Parkway', 'Vanguard Square, MA 02138', 'United States'],
  },
  {
    title: 'General Enquiries',
    text: ['info@arcade.edu', '+1 (555) 019-2000'],
    links: ['mailto:info@arcade.edu', 'tel:+15550192000'],
  },
  {
    title: 'Admissions Office',
    text: ['admissions@arcade.edu', '+1 (555) 019-2001'],
    links: ['mailto:admissions@arcade.edu', 'tel:+15550192001'],
  },
  {
    title: 'Media & Press',
    text: ['press@arcade.edu'],
    links: ['mailto:press@arcade.edu'],
  },
];

const ContactOverview = () => {
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = { ...INITIAL_ERRORS };
    let valid = true;

    if (!fields.name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    }
    if (!fields.email.trim()) {
      newErrors.email = 'Email address is required.';
      valid = false;
    } else if (!EMAIL_REGEX.test(fields.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }
    if (!fields.subject.trim()) {
      newErrors.subject = 'Subject is required.';
      valid = false;
    }
    if (!fields.message.trim()) {
      newErrors.message = 'Message is required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFields(INITIAL_FIELDS);
      setErrors(INITIAL_ERRORS);
    }
  };

  return (
    <main id="main-content">
      <PageHero
        category="Contact Us"
        title="Get in Touch"
        description="We're here to help. Reach out to the right department and we'll get back to you promptly."
      />

      {/* Contact Info Cards */}
      <section className="section" aria-label="Contact Information">
        <div className="container">
          <SectionHeading title="University Contact Details" subtitle="Reach Us" />
          <div className={styles.infoGrid}>
            {contactInfo.map((item, idx) => (
              <div key={idx} className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>{item.title}</h3>
                <p className={styles.infoCardText}>
                  {item.text.map((line, i) => (
                    <span key={i}>
                      {item.links?.[i] ? (
                        <a href={item.links[i]}>{line}</a>
                      ) : (
                        line
                      )}
                      {i < item.text.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section section-bg-warm" aria-label="Contact Form">
        <div className="container">
          <div className={styles.formSection}>
            <SectionHeading title="Send Us a Message" subtitle="Enquiry Form" />

            {submitted ? (
              <div className={styles.successBox} role="alert">
                <h3>Message Sent</h3>
                <p>
                  Thank you for reaching out. A member of our team will respond
                  within 2–3 business days.
                </p>
                <div style={{ marginTop: 'var(--spacing-md)' }}>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Name */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="contact-name" className={styles.label}>
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    value={fields.name}
                    onChange={handleChange}
                    aria-describedby={errors.name ? 'error-name' : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <span id="error-name" className={styles.errorMsg} role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="contact-email" className={styles.label}>
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    value={fields.email}
                    onChange={handleChange}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <span id="error-email" className={styles.errorMsg} role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="contact-subject" className={styles.label}>
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
                    value={fields.subject}
                    onChange={handleChange}
                    aria-describedby={errors.subject ? 'error-subject' : undefined}
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && (
                    <span id="error-subject" className={styles.errorMsg} role="alert">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="contact-message" className={styles.label}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    value={fields.message}
                    onChange={handleChange}
                    aria-describedby={errors.message ? 'error-message' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <span id="error-message" className={styles.errorMsg} role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                <div>
                  <Button type="submit" variant="primary">
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactOverview;
