import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import styles from './ContactPages.module.css';

const appointments = [
  {
    title: 'Campus Tour',
    desc: 'A guided 90-minute walking tour of the historic campus, residential houses, and key academic buildings.',
  },
  {
    title: 'Information Session',
    desc: 'A 60-minute overview of admissions requirements, financial aid options, and student life — presented by our admissions officers.',
  },
  {
    title: 'Academic Interview',
    desc: 'An optional 45-minute conversation with a faculty member or senior admissions counsellor for select applicants.',
  },
];

const AdmissionsOffice = () => (
  <main id="main-content">
    <PageHero
      category="Contact Us"
      title="Admissions Office"
      description="Connect directly with our admissions team for personalized guidance through your application journey."
    />

    <section className="section" aria-label="Admissions Office Details">
      <div className="container">
        <div className={styles.officeGrid}>
          {/* Contact Details Block */}
          <div>
            <SectionHeading title="Office Details" subtitle="Contact" />
            <div className={styles.detailBlock}>
              <h3 className={styles.detailTitle}>Address & Contact</h3>
              <ul className={styles.detailList}>
                <li>
                  <strong>Address:</strong><br />
                  Admissions Office, Pendleton Hall<br />
                  404 Academic Parkway<br />
                  Vanguard Square, MA 02138
                </li>
                <li>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+15550192001">+1 (555) 019-2001</a>
                </li>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:admissions@arcade.edu">admissions@arcade.edu</a>
                </li>
                <li>
                  <strong>Office Hours:</strong><br />
                  Monday – Friday: 9:00 AM – 5:00 PM<br />
                  Saturday: 10:00 AM – 2:00 PM (by appointment)<br />
                  Sunday: Closed
                </li>
              </ul>
            </div>

            <div style={{ marginTop: 'var(--spacing-lg)' }}>
              <Button to="/admissions/application-process" variant="primary">
                Start Your Application
              </Button>
            </div>
          </div>

          {/* Appointment Types Block */}
          <div>
            <SectionHeading title="Book an Appointment" subtitle="Visit Us" />
            <p className={styles.paragraph}>
              We welcome prospective students and families year-round. Choose the appointment type that suits your needs.
            </p>
            <div className={styles.appointmentList}>
              {appointments.map((appt, idx) => (
                <div key={idx} className={styles.appointmentItem}>
                  <h4>{appt.title}</h4>
                  <p>{appt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default AdmissionsOffice;
