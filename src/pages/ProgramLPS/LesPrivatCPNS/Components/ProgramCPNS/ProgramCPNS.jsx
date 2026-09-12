import "./ProgramCPNS.css";

const programItems = [
  {
    id: 1,
    number: "01",
    title: "Les Privat Offline",
    subtitle: "Guru Les Privat Datang ke Rumah Siswa",
    description:
      "Layanan Les Privat CPNS Offline menjangkau seluruh wilayah di Jabodetabek, yakni Jakarta, Bogor, Depok, Tangerang, Tangsel, Bekasi, BSD, dan sekitarnya. Sistemnya adalah les privat CPNS ke rumah, guru akan datang ke rumah siswa sesuai dengan jadwal yang sudah disepakati bersama. Lokasi belajar selain di rumah, juga bisa di asrama, kantor, apartemen ataupun lokasi lain yang kondusif untuk kegiatan belajar mengajar.",
  },
  {
    id: 2,
    number: "02",
    title: "Les Privat Online",
    subtitle:
      "Guru dan Siswa Belajar Bersama menggunakan Aplikasi Zoom atau Google Meet",
    description:
      "Layanan Les Privat CPNS Online diperuntukan bagi siswa yang tidak berkenan melaksanakan privat secara offline maupun siswa yang berada di luar wilayah Jabodetabek. Aplikasi yang dapat digunakan dalam proses kegiatan belajar mengajar antara guru dengan siswa meliputi Zoom, Google Meet, Skype, WhatsApp atau aplikasi pendukung video call lainnya yang sudah disepakati bersama.",
  },
];

const ProgramCPNS = () => {
  return (
    <section className="program-container-cpns">
      <div className="program-image-glass-cpns" data-aos="flip-up">
        <span className="program-image-specular-cpns" aria-hidden="true" />

        <img
          loading="lazy"
          src="/images/simak-ui/program-cpns.webp"
          alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
          className="program-image-cpns"
        />
      </div>

      <article className="program-content-glass-cpns">
        <span className="program-content-specular-cpns" aria-hidden="true" />

        <span className="program-content-refraction-cpns" aria-hidden="true" />

        <div className="program-header-cpns">
          <h2 className="main-title-cpns">Program Les Privat CPNS</h2>
        </div>

        <div className="program-list-cpns">
          {programItems.map((item) => (
            <article key={item.id} className="program-section-cpns">
              <span
                className="program-section-specular-cpns"
                aria-hidden="true"
              />

              <div className="program-section-top-cpns">
                <span className="program-section-number-cpns">
                  {item.number}
                </span>

                <div className="program-section-heading-cpns">
                  <h3 className="section-title-cpns-v2">{item.title}</h3>

                  <p className="program-section-subtitle-cpns">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <p className="section-description-cpns">{item.description}</p>

              <span className="program-section-orb-cpns" aria-hidden="true" />
            </article>
          ))}
        </div>
      </article>
    </section>
  );
};

export default ProgramCPNS;
