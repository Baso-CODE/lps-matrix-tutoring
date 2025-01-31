import "./ContactButton.css";

const ContactButton = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Konsultasikan Kebutuhan Anda Sekarang!</h2>
      <p className="contact-description">
        Untuk informasi lebih lengkap, silakan hubungi:
      </p>
      <div className="contact-info">
        <p>
          <strong>0822-5868-9993</strong> (CALL/WA)
        </p>
        <p>
          <strong>0813-1177-8441</strong> (CALL/WA)
        </p>
      </div>
      <p className="contact-footer">
        Kami siap membantu agar siswa meraih Potensi Terbaik.
      </p>
    </div>
  );
};

export default ContactButton;
