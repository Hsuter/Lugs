import covid from "./covid.jpg";
import finance from "./finance.jpg";
import harvest from "./bunner.png";
import office from "./office.jpg";
import roads from "./roads.jpg";
import sports from "./sports.jpg";
import line from "./line.png";
import bunnerText from "./bunnerText.png";
import coarms from "./coarms.png";
import mp from "./mp.jpg";
import constr from "./constr.jpg";
import whiteline from "./whiteline.png";

const deps = [
  {
    educationDep: {
      image: office,
      name: "Education, Ict and Public communication",
    },
  },
  { financeDep: { image: finance, name: "Finance and economic planning" } },
  { infrDep: { image: roads, name: "Infrastructure" } },
];

const news = [
  {
    news1: {
      image: constr,
      title: "Rehabilitation of various roadsin LC on course",
    },
  },
  {
    news2: {
      image: covid,
      title:
        "Vaccination Action Network (VAN):Driving Vaccine Uptake andPublic Health Impact",
    },
  },
  { news3: { image: sports, title: "Constituency Sports" } },
];

export {
  covid,
  finance,
  harvest,
  roads,
  line,
  bunnerText,
  coarms,
  mp,
  whiteline,
  deps,
  news,
};
