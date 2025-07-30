// import "./Footer.css";

// const Footer = () => {
//   const contacts = [
//     {
//       name: "Kak Vina",
//       phone: "6281311778441",
//     },
//     {
//       name: "Kak Ranti",
//       phone: "6282134093567",
//     },
//     {
//       name: "Kak Rizki",
//       phone: "6282258689993",
//     },
//   ];

//   const createWhatsAppLink = (phone, name) => {
//     const message = `
// Halo Kak ${name} dari ${"https://apps.lesprivatmasukptn.com/"}, saya ingin tanya program belajar untuk:
// Kelas: [Isi Kelas]
// Mapel: [Isi Mapel]
// Kurikulum: [Isi Kurikulum]
// Wilayah: [Isi Wilayah]
// `.trim(); // Placeholder untuk pesan yang diinginkan

//     return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
//       message
//     )}`;
//   };
//   return (
//     <footer className="footer-container-matrix">
//       <div className="footer-content-matrix">
//         <div className="grid-container-footer-matrix">
//           <div className="office-info-footer">
//             <img
//               loading="eager"
//               src="/images/logoLPS.png"
//               alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
//               className="footer-matrix-image"
//             />
//             <div className="section-title-footer-matrix">Office:</div>
//             <p className="address-footer-matrix">
//               Pesona Khayangan Blok CP No. 4, Depok, Jawa Barat (Lingkungan
//               Pendidikan UI)
//             </p>
//             <div className="section-subtitle-footer-matrix">
//               Telepon Kantor:
//             </div>
//             <ul className="phone-list-footer-matrix">
//               <li>021-2761-2993</li>
//             </ul>
//             <ul className="office-hours-footer-matrix">
//               <li>08.30 - 17.00 WIB Senin s.d Jumat</li>
//               <li>08.30 - 13.00 WIB Sabtu</li>
//             </ul>
//             <div className="section-subtitle-footer-matrix">
//               Layanan 24 Jam:
//             </div>
//             <ul className="phone-list-footer-matrix">
//               {contacts.map((contact) => (
//                 <li key={contact.phone}>
//                   <a
//                     href={createWhatsAppLink(contact.phone, contact.name)}
//                     target="_blank"
//                     rel="noopener noreferrer">
//                     {contact.phone} ({contact.name})
//                   </a>
//                 </li>
//               ))}
//             </ul>
//             <ul className="office-hours-footer-matrix">
//               <li>Privat Masuk PTN</li>
//               <li>Privat Mahasiswa</li>
//               <li>Privat Bahasa</li>
//             </ul>
//           </div>

//           <div className="member-of-footer-matrix">
//             <div className="section-title-footer-matrix">Member of:</div>
//             <img
//               loading="lazy"
//               src="/images/footer/hilpi.jpg"
//               alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit. "
//               className="member-logo-footer-matrix"
//               width="300"
//               height="177"
//             />
//             <div className="section-title-footer-matrix">
//               Our Student`s School:
//             </div>
//             <img
//               loading="lazy"
//               src="/images/footer/asal_sekolah_siswa.webp"
//               alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
//               className="member-logo-footer-matrix"
//               width="575"
//               height="942"
//             />
//           </div>

//           <div className="students-info-footer-matrix">
//             <div className="section-title-footer-matrix">
//               Our Students are From:
//             </div>
//             <img
//               loading="lazy"
//               src="/images/footer/negara.png"
//               alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
//               className="students-flag-footer-matrix"
//               width="600"
//               height="180"
//             />
//           </div>
//         </div>

//         <p className="footer-copyright-matrix">
//           Copyright 2024 - MATRIX - ONLINE & OFFLINE - Les Privat Online
//           Indonesia dan Les Privat Profesional Datang ke Rumah di Jabodetabek
//         </p>
//         <p className="footer-location-matrix">
//           Pusat Les Privat Nasional & Internasional Jabodetabek (Jakarta, Bogor,
//           Depok, Tangerang, Tangsel, Bekasi)
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
