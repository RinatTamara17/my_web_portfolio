import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Translator",
      desc:
        "Saat ini saya bekerja di satu perusahaan yaitu Elexmedia Komputindo. Elexmedia Komputindo adalah salah satu penerbit buku, disana saya bekerja sebagai salah satu translator komik beserta novel yang disusun dalam bahasa asing. Saya mulai bekerja di perusahaan ini mulai tahun 2018 sampai sekarang.",
      img:
        "https://static.wikia.nocookie.net/logopedia/images/f/fc/Elex_Media.svg/revision/latest?cb=20190808131407",
    },
    {
      id: "2",
      icon: "./assets/writing.png",
      title: "Corporate Secretary",
      desc:
        "Saya pernah bekerja di perusahaan LandX Jakarta. LandX Jakarta adalah salah satu perusahaan yang bekerja dibidang investasi bisnis dan properti, disana saya bekerja sebagai salah satu Corporate Secretary. Saya mulai bekerja di perusahaan ini mulai  awal tahun 2017 sampai akhir tahun 2017.",
      img:
        "https://media-exp1.licdn.com/dms/image/C510BAQG4NGiTAOTu-A/company-logo_200_200/0/1552707196654?e=2159024400&v=beta&t=3bxjOfhlsMaN2O6b1DDSFMhxawSXrzweJNyX4g4jQhI",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}