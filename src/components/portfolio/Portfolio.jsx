import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  drakorPortfolio,
  komikPortfolio,
  novelPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "drakor",
      title: "Drakor",
    },
    {
      id: "komik",
      title: "Komik Jepang",
    },
    {
      id: "novel",
      title: "Novel Inggris",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "drakor":
        setData(drakorPortfolio);
        break;
      case "komik":
        setData(komikPortfolio);
        break;
      case "novel":
        setData(novelPortfolio);
        break;
      default:
        setData(drakorPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <p>Saya telah menerjemahkan bahasa yang ada dalam beberapa drama, komik, dan novel.</p>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}