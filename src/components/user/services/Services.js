import React from "react";
import { Helmet } from "react-helmet";

// import styles
import "./Services.css";

function Services() {
  return (
    <div>
      {/* helmet - start */}
      <Helmet>
        <title>Jelajahi Layanan Kami - Pelayanan Kami</title>
        <meta
          name="description"
          content="Pemasangan AC, isi freon, tukar tambah AC baru/bekas, service AC, wiring panel, penarikan kabel baru, perbaikan listrik yang korslet, desain kelistrikan hunian, service closet, service urinoir, instalasi air, STP dan WTP, service mesin pompa air, service kipas angin, service mesin cuci, service Kulkas, jual beli AC baru dan bekas, jual beli sparepart AC, jual beli Peralatan rumah tangga, sewa AC standing, sewa sound system, sewa peralatan untuk acara pernikahan atau ulang tahun."
        />
      </Helmet>
      {/* helmet - end */}

      {/* sercive component - start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            {/* card - air conditioner - start */}
            <div
              className="col-lg-4 col-md-6 service-item-top wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="overflow-hidden">
                <img
                  className="img-fluid w-100 h-100"
                  src="https://image.makewebeasy.net/makeweb/m_750x0/K7bdX3mHU/DefaultData/UPGRADE_UMKM_ANDA_SEKARANG_.png?v=202012190947"
                  alt=""
                />
              </div>
              <div className="flex-column bg-light p-4">
                <h5 className="text-center mb-3">AC (Air Conditioner)</h5>
                <div>
                  <p>
                    Service AC profesional, perbaiki AC Anda dengan cepat dan
                    mudah.
                  </p>

                  {/* list - start */}
                  <div className="mt-1 ps-4">
                    <ul>
                      <li>Pemasangan AC</li>
                      <li>Isi Freon</li>
                      <li>Tukar tambah AC baru/bekas</li>
                      <li>Service AC</li>
                      <br />
                    </ul>
                  </div>
                  {/* list - end */}
                </div>
              </div>
            </div>
            {/* card - air conditioner - end */}

            {/* card - electircal repair - start */}
            <div
              className="col-lg-4 col-md-6 service-item-top wow fadeInUp"
              data-wow-delay="0.3s"
            >
              {/* images - start */}
              <div className="overflow-hidden">
                <img
                  className="img-fluid w-100 h-100"
                  src="https://image.makewebeasy.net/makeweb/m_750x0/K7bdX3mHU/DefaultData/4.png?v=202012190947"
                  alt=""
                />
              </div>
              {/* images - end */}
              <div className="flex-column align-items-center justify-content-between bg-light p-4">
                <h5 className="mb-3 text-center">Kelistrikan</h5>
                <div>
                  <p>
                    Solusi kelistrikan, percayakan pada ahli kami. Hemat waktu
                    dan tenaga!
                  </p>

                  {/* list - start */}
                  <div className="mt-1 ps-4">
                    <ul>
                      <li>Wiring panel</li>
                      <li>Penarikan Kabel baru</li>
                      <li>Desain kelistrikan hunian</li>
                      <li>Perbaikan listrik yang korslet</li>
                      <br />
                    </ul>
                  </div>
                </div>
                {/* list - end */}
              </div>
            </div>
            {/* card - electircal repair - start */}

            {/* card - building construction repair - start */}
            <div
              className="col-lg-4 col-md-6 service-item-top wow fadeInUp"
              data-wow-delay="0.3s"
            >
              {/* images - start */}
              <div className="overflow-hidden">
                <img
                  className="img-fluid w-100 h-100"
                  src="https://image.makewebeasy.net/makeweb/m_750x0/K7bdX3mHU/DefaultData/5.png?v=202012190947"
                  alt=""
                />
              </div>
              {/* images - end */}
              <div className="flex-column align-items-center justify-content-between bg-light p-4">
                <h5 className="mb-3 text-center">Konstruksi Bangunan</h5>
                <div>
                  <p>
                    Butuh konstruksi bangunan? Tidak perlu khawatir, kami
                    ahlinya!
                  </p>

                  {/* list - start */}
                  <div className="mt-1 ps-4">
                    <ul>
                      <li>Pembuatan pagar</li>
                      <li>Pemasangan kanopi</li>
                      <li>Renovasi</li>
                      <li>Konsultasi bangun rumah</li>
                      <li>Pembuatan gambar 3D</li>
                    </ul>
                  </div>
                </div>
                {/* list - end */}
              </div>
            </div>
            {/* card - building construction repair - start */}

            {/* card - plumbing repair - start */}
            <div
              className="col-lg-4 col-md-6 service-item-top wow fadeInUp"
              data-wow-delay="0.3s"
            >
              {/* images - start */}
              <div className="overflow-hidden">
                <img
                  className="img-fluid w-100 h-100"
                  src="https://image.makewebeasy.net/makeweb/m_750x0/K7bdX3mHU/DefaultData/6.png?v=202012190947"
                  alt=""
                />
              </div>
              {/* images - end */}
              <div className="flex-column align-items-center justify-content-between bg-light p-4">
                <h5 className="mb-3 text-center">Perbaikan Pipa Air</h5>
                <div>
                  <p>
                    Perbaikan pipa air cepat dan handal. Hubungi kami sekarang!
                  </p>

                  {/* list - start */}
                  <div className="mt-1 ps-4">
                    <ul>
                      <li>Closet</li>
                      <li>Urinoir</li>
                      <li>Instalasi air</li>
                      <li>STP dan WTP</li>
                      <br />
                    </ul>
                  </div>
                </div>
                {/* list - end */}
              </div>
            </div>
            {/* card - plumbing repair - start */}

            {/* card - machine repair - start */}
            <div
              className="col-lg-4 col-md-6 service-item-top wow fadeInUp"
              data-wow-delay="0.3s"
            >
              {/* images - start */}
              <div className="overflow-hidden">
                <img
                  className="img-fluid w-100 h-100"
                  src="https://image.makewebeasy.net/makeweb/m_750x0/K7bdX3mHU/DefaultData/7.png?v=202012190947"
                  alt=""
                />
              </div>
              {/* images - end */}
              <div className="flex-column align-items-center justify-content-between bg-light p-4">
                <h5 className="mb-3 text-center">Perbaikan Mesin</h5>
                <div>
                  <p>Perbaikan mesin cepat dan handal dalam 24 jam.</p>

                  {/* list - start */}
                  <div className="mt-1 ps-4">
                    <ul>
                      <li>Mesin pompa air</li>
                      <li>Kipas angin</li>
                      <li>Mesin cuci</li>
                      <li>Kulkas</li>
                      <br />
                      <br />
                    </ul>
                  </div>
                </div>
                {/* list - end */}
              </div>
            </div>
            {/* card - machine repair - start */}

            {/* card - selling - start */}
            <div
              className="col-lg-4 col-md-6 service-item-top wow fadeInUp"
              data-wow-delay="0.3s"
            >
              {/* images - start */}
              <div className="overflow-hidden">
                <img
                  className="img-fluid w-100 h-100"
                  src="https://image.makewebeasy.net/makeweb/m_750x0/K7bdX3mHU/DefaultData/8.png?v=202012190947"
                  alt=""
                />
              </div>
              {/* images - end */}
              <div className="flex-column align-items-center justify-content-between bg-light p-4">
                <h5 className="mb-3 text-center">Menjual</h5>
                <div>
                  <p>Kami menjual berbagai macam keperluan Anda!</p>

                  {/* list - start */}
                  <div className="mt-1 ps-4">
                    <ul>
                      <li>AC baru dan bekas</li>
                      <li>Sparepart AC</li>
                      <li>Komponen listrik</li>
                      <li>Peralatan rumah tangga</li>
                      <li>dan lain-lain</li>
                      <br />
                    </ul>
                  </div>
                </div>
                {/* list - end */}
              </div>
            </div>
            {/* card - selling - start */}

            {/* card - rent - start */}
            <div
              className="col-lg-4 col-md-6 service-item-top wow fadeInUp"
              data-wow-delay="0.3s"
            >
              {/* images - start */}
              <div className="overflow-hidden">
                <img
                  className="img-fluid w-100 h-100"
                  src="https://image.makewebeasy.net/makeweb/m_750x0/K7bdX3mHU/DefaultData/9.png?v=202012190947"
                  alt=""
                />
              </div>
              {/* images - end */}
              <div className="flex-column align-items-center justify-content-between bg-light p-4">
                <h5 className="mb-3 text-center">Menyewakan</h5>
                <div>
                  <p>Kami menyewakan berbagai peralatan untuk acara.</p>

                  {/* list - start */}
                  <div className="mt-1 ps-4">
                    <ul>
                      <li>AC standing</li>
                      <li>Sound system</li>
                      <li>Peralatan untuk acara pernikahan atau ulang tahun</li>
                      <br />
                    </ul>
                  </div>
                </div>
                {/* list - end */}
              </div>
            </div>
            {/* card - rent - start */}
          </div>
        </div>
      </div>
      {/* sercive component - end */}
    </div>
  );
}

export default Services;
