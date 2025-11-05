import React from "react";
import "./ListSiswaLPS.css";
import { dataSiswa } from "../../helpers/listSiswa";

const ListSiswaLPS = () => {
  return (
    <React.Fragment>
      <div className="parent-table-student">
        <h2 className="main-title-list-student">ALumni LPS Education</h2>
        <p className="child-title-list-student">
          Terbukti membantu siswa lolos Kedokteran dan PTN Favorit, Sekarang
          saatnya untuk Kamu!
        </p>
        <table className="student-table">
          <thead>
            <tr>
              <th className="title-table-name">No</th>
              <th className="title-table-name">NAMA</th>
              <th className="title-table-name">ASAL SEKOLAH</th>
              <th className="title-table-name">JURUSAN/PTN</th>
            </tr>
          </thead>
          <tbody>
            {dataSiswa.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.school}</td>
                <td>{student.major}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="child-title-list-student_bottom">
          Terbukti membantu siswa lolos Kedokteran dan PTN Favorit, Sekarang
          saatnya untuk Kamu!
        </p>
      </div>
    </React.Fragment>
  );
};

export default ListSiswaLPS;
