import covid from "./covid.jpg";
import finance from "./finance.jpg";
import harvest from "./bunner.png";
import office from "./office.jpg";
import roads from "./roads.jpg";
import saspeech from "./s_a_speech.jpg";
import line from "./line.png";
import bunnerText from "./bunnerText.png";
import coarms from "./coarms.png";
import mp from "./mp.jpg";
import constr from "./constr.jpg";
import whiteline from "./whiteline.png";
import harvest2 from "./harvest.jpg";
import bursary from "./bursary.jpg";
import CM from "./CM.jpg";
import DCM from "./DCM.jpg";
import lg1 from "./Gallery/lg1.jpg";
import lg2 from "./Gallery/lg2.jpg";
import lg3 from "./Gallery/lg3.jpg";
import lg4 from "./Gallery/lg4.jpg";
import lg5 from "./Gallery/lg5.jpg";
import lg6 from "./Gallery/lg6.jpg";
import lg7 from "./Gallery/lg7.jpg";
import lg8 from "./Gallery/lg8.jpg";
import lg9 from "./Gallery/lg9.jpg";
import lg10 from "./Gallery/lg10.jpg";
import lg11 from "./Gallery/lg11.jpg";
import lg12 from "./Gallery/lg12.jpg";
import lg13 from "./Gallery/lg13.jpg";
import lg14 from "./Gallery/lg14.jpg";

const gallery = [
  lg1,
  lg2,
  lg3,
  lg4,
  lg5,
  lg6,
  lg7,
  lg8,
  lg9,
  lg10,
  lg11,
  lg12,
  lg13,
  lg14,
];

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
      image: saspeech,
      title: "Inaugural education stakeholder's conference",
      location:
        "Salvation Army Hall - The salvation army officers training college",
      date: "4th November 2022",
    },
  },
  {
    news2: {
      image: bursary,
      title: "Launch of the Inaugural Lugari contitiency NG-CDF and Bursaries",
      location: "The Maturu Primary School",
      date: "12th February 2023",
    },
  },
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
  harvest2,
  CM,
  DCM,
  gallery,
};
