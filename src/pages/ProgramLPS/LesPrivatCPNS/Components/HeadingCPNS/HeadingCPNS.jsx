import { useEffect, useState } from "react";
import "./HeadingCPNS.css";
import { getJumbotronProgram } from "../../../../../api/jumbotron/getJumbotronProgram";

const HeadingCPNS = () => {
  const [jumbotron, setJumbotron] = useState(null);

  useEffect(() => {
    const fetchJumbotron = async () => {
      try {
        const result = await getJumbotronProgram("cpns");
        setJumbotron(result.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    fetchJumbotron();
  }, []);
  return (
    <div className="heading-cpns-container">
      <img
        loading="lazy"
        src={jumbotron?.link_image || "/images/program/CPNS.webp"}
        alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
        className="heading-image"
      />
      <h1 className="heading-title-cpns">
        Guru Les Privat CPNS Terbaik dan Berkompeten – LPS Matrix
      </h1>
      <p className="heading-description-cpns">
        Menjadi PNS adalah impian dari jutaan peserta Tes CPNS. Setiap tahun,
        peminatnya semakin bertambah banyak. Oleh karena itu, para peserta
        diharapkan memiliki kompetensi yang mumpuni untuk bisa tembus tes CPNS,
        utamanya pada tahap ujian akademik SKD CPNS TWK, TIU dan TKP.
      </p>
      <p className="heading-description-bottom-cpns">
        Bagi Anda yang sedang mencari{" "}
        <span className="color-d2b04c-description">
          les privat CPNS offline
        </span>{" "}
        (guru les privat ke rumah) maupun les privat online persiapan SKD CPNS
        maka Anda saat ini berada di halaman yang tepat.{" "}
        <span className="color-d2b04c-description">LPS Matrix</span> memiliki
        ribuan guru les privat yang tersebar di Jabodetabek. Kami membuka dua
        program, yaitu program offline (les privat ke rumah) dan les privat
        online (belajar secara online menggunakan Zoom).
      </p>
      <p className="heading-description-bottom-cpns">
        Guru privat CPNS kami adalah tutor – tutor terbaik di bidangnya yang
        sudah memenuhi standar dan berkompeten dalam mengajari materi soal –
        soal CPNS, mulai dari TWK, TIU dan TKP. Layanan privat yang diberikan
        berupa pembekalan materi dan latihan soal sebelum menghadapi tes
        sehingga Anda akan lebih siap dalam menghadapi tes CPNS.
      </p>
      <p className="heading-description-bottom-cpns">
        <span className="color-d2b04c-description"> LPS Matrix</span> adalah
        lembaga penyedia layanan guru les privat ke rumah area Jabodetabek dan
        les privat Online untuk seluruh Indonesia. Selain program{" "}
        <span className="color-d2b04c-description">les privat CPNS</span> , kami
        memiliki banyak program unggulan lainnya seperti Les Privat Persiapan
        Masuk PTN, Kedinasan, Akpol, Akmil, Olimpiade dan Akademik Sekolah.
      </p>
      <p className="heading-description-bottom-cpns">
        Kami senantiasa memberikan layanan privat terbaik dengan pengajar
        berkompeten yang siap membantu menggali kebutuhan siswa serta arahan
        belajar yang tepat agar hasil sesuai target yang diinginkan siswa.
      </p>
    </div>
  );
};

export default HeadingCPNS;
