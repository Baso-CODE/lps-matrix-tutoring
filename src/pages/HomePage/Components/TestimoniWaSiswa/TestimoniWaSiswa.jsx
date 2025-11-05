import { Link, useLocation } from "react-router-dom";

import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";
import PropTypes from "prop-types";
import "./TestimoniWaSiswa.css";
import { formatDescriptionWithHighlight } from "../../../../helpers/formatDescriptionWithHighlight";

const defaultTestimonialData = {
  title: "Testimonials LPS Education",
  description:
    "Prioritas utama LPS Education adalah memastikan kepuasan dan keberhasilan setiap siswa. Untuk membuktikannya, kami hadirkan testimoni-testimoni langsung via WhatsApp. Di sini, Anda akan menemukan bukti nyata bagaimana metode belajar kami yang teruji efektif, didukung oleh bimbingan intensif dari tutor-tutor berkualitas, telah mengubah perjalanan akademis mereka. Bersama Tim Pengajar terbaik dari UI, ITB, UGM, Unpad, IPB, serta Perguruan Tinggi lainnya, kami berdedikasi membimbing para siswa hingga berhasil masuk Sekolah Favorit, PTN Impian, Peningkatan Nilai Akademik, maupun Sukses pada Ujian yang diikuti.",
  imageDesktop: "/images/TESTIMONI.webp",
  imageMobile: "/images/TESTIMONI-HP.webp",
};

const TestimoniWaSiswa = ({
  title,
  description,
  imageDesktop,
  imageMobile,
  cityProp,
}) => {
  const finalTitle = title || defaultTestimonialData.title;
  const finalDescription = description || defaultTestimonialData.description;
  const finalImageDesktop = imageDesktop || defaultTestimonialData.imageDesktop;
  const finalImageMobile = imageMobile || defaultTestimonialData.imageMobile;

  const contactData = useAppSelector(selectContactCsData);

  const location = useLocation();
  const path = location.pathname;

  let city = cityProp || "";
  if (!city && path.includes("/di/")) {
    city = path.split("/di/")[1];
    city = city.charAt(0).toUpperCase() + city.slice(1);
  }

  // Tentukan alt text dinamis
  const altText = `Testimoni Orang Tua${
    city ? " di " + city : ""
  } bersama LPS Education. Program Bimbel & Les Privat UTBK, SIMAK UI, UTUL UGM, TKA, CPNS, Pascasarjana, Mahasiswa, dan OSN.`;

  return (
    <div className="container-testimoni-wa">
      <h2 className="title-testimoni-wa-siswa-single-image">{finalTitle}</h2>
      <p className="additional-description-about__testimoni-siswa">
        {formatDescriptionWithHighlight(finalDescription)}{" "}
      </p>
      <Link to={contactData?.link_cta || "#"}>
        <img
          loading="lazy"
          className="desktop-image-testimoni"
          src={finalImageDesktop}
          alt={altText}
        />
        <img
          loading="lazy"
          src={finalImageMobile}
          className="mobile-image-testimoni"
          alt={altText}
        />
      </Link>
    </div>
  );
};
TestimoniWaSiswa.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageDesktop: PropTypes.string,
  imageMobile: PropTypes.string,
  cityProp: PropTypes.string,
};

export default TestimoniWaSiswa;
