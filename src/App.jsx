import "./App.css";
import logo from "./assets/FinestMart.svg";
import "../tailwind.config";
import cart from "./assets/cart.svg";
import list from "./assets/list.svg";
import nigga from "./assets/nigga.svg";
import second from "./assets/s.png";
import first from "./assets/f.svg";
import dairy from "./img/Dairy.svg";
import fruit from "./img/fruits.svg";
import cond from "./img/condiments.svg";
import prod from "./img/products.svg";
import flour from "./img/flour.svg";
import { useEffect, useState } from "react";
function App() {
  let langs = {
    en: {
      nav: ["Home", "Categories", "Sales", "FAQ", "About", "Contact"],
      theme: ["light", "dark", "orange"],
      heading: [
        `Let your groceries come to you`,
        "Get fresh groceries online without stepping out tomake delicious food with the freshest ingredients",
      ],
      card: ["Fresh Spinach", "$12.00", "Fresh Carrot", "$9.00"],
      card2: [
        "Dairy Products",
        "Vegetables & Fruits",
        "Spices & Seasonings",
        "Honey",
        "Flour",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    ru: {
      nav: [
        "Главная",
        "Категории",
        "Продажи",
        "Часто задаваемые вопросы",
        "О нас",
        "Контакты",
      ],
      theme: ["светлый", "темный", "оранжевый"],
      headding: [
        "Пусть ваши продукты придут к вам",
        `Покупайте свежие продукты в Интернете, не выходя из дома, чтобыприготовить вкусную еду из самых свежих ингредиентов`,
      ],
      cart: ["Свежий шпинат", "12 долларов", "Свежая морковь", "9,00 долларов"],
      cart2: [
        "Молочные продукты",
        "Овощи и фрукты",
        "Специи и приправы",
        "Мед",
        "Мука",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    uz: {
      nav: ["Uy", "Kategoriyalar", "Sotish", "FAQ", "Haqida", "Kontakt"],
      mavzu: ["yorug'lik", "qorong'i", "apelsin"],
      sarlavha: [
        "Oziq-ovqatlaringiz sizga kelsin",
        `Eng yangi ingredientlar bilan mazali taom tayyorlash uchun tashqariga chiqmasdan turib, yangi oziq-ovqat mahsulotlarini onlayn xarid qiling`,
      ],
      card: ["Yangi ismaloq", "$12.00", "Yangi sabzi", "$9.00"],
      card2: [
        "Sutli mahsulotlar",
        "Sabzavotlar va mevalar",
        "Ziravorlar va ziravorlar",
        "Asal",
        "Un",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
  };
  const [theme, setTheme] = useState("light");
  // useEffect(() => {
  if (localStorage.getItem("opt")) {
    let opt = localStorage.getItem("opt");
    const [theme, setTheme] = useState(opt);
  } else {
    const [theme, setTheme] = useState("light");
    localStorage.setItem("opt", theme);
  }
  // });
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  const [lan, setLang] = useState(langs.en);

  let images = [dairy, fruit, cond, prod, flour];
  function themeChange(e) {
    let target = e.target.value;
    if (target == "orange") {
      setTheme("orange");
      localStorage.setItem("opt", "orange");
      document.querySelector("#root").style.background = "rgb(255, 117, 67)";
    }
    if (target == "dark") {
      setTheme("dark");
      localStorage.setItem("opt", "dark");
      document.querySelector("#root").style.background = "rgb(36, 36, 36)";
    }
    if (target == "light") {
      setTheme("light");
      localStorage.setItem("opt", "light");
      document.querySelector("#root").style.background = "white";
    }
  }

  function langChange(e) {
    let target = e.target.value;
    if (target == "eng") {
      setLang(langs.en);
    }
    if (target == "rus") {
      // console.log(langs.ru.nav[0]);
      setLang(langs.ru);
    }
    if (target == "uzb") {
      // setLang(langs.uz);
    }
  }

  return (
    <div className={theme}>
      <header className="flex pt-12 justify-between items-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul className="flex gap-10">
            <li className="text-orange-600">{lan.nav[0]}</li>
            <li>{lan.nav[1]}</li>
            <li>{lan.nav[2]}</li>
            <li>{lan.nav[3]}</li>
            <li>{lan.nav[4]}</li>
            <li>{lan.nav[5]}</li>
          </ul>
        </nav>
        <div className="flex gap-14 items-center">
          <img src={cart} alt="" />
          <select onChange={themeChange} name="" id="mode">
            <option value="light">{lan.theme[0]}</option>
            <option value="dark">{lan.theme[1]}</option>
            <option value="orange">{lan.theme[2]}</option>
          </select>
          <select name="" onChange={langChange} id="lang">
            <option value="eng">eng</option>
            <option value="uzb">uzb</option>
            <option value="rus">rus</option>
          </select>
        </div>
      </header>
      <main className="main-continer">
        <div className="text">
          <h1 className="main-headingg">{lan.heading[0]}</h1>
          <p className="main-p">{lan.heading[1]} </p>
          <div className="input">
            <input type="text" className="search" />
            <button className="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <img src={list} width={300} height={60} alt="" />
        </div>
        <img className="white-man" src={nigga} alt="" />
        <div className="cards">
          <div className="card">
            <img src={first} alt="" />
            <h3>{lan.card[0]}</h3>
            <p>{lan.card[1]}</p>
          </div>
          <div className="card">
            <img src={second} alt="" />
            <h3>{lan.card[2]}</h3>
            <p>{lan.card[3]}</p>
          </div>
        </div>
      </main>
      <footer className="footer-cont">
        <div className="card-footer">
          <img src={images[0]} alt="" />
          <h3>{lan.card2[0]}</h3>
          <p>{lan.card2[5]}</p>
        </div>
        <div className="card-footer">
          <img src={images[1]} alt="" />
          <h3>{lan.card2[1]}</h3>
          <p>{lan.card2[5]}</p>
        </div>
        <div className="card-footer">
          <img src={images[2]} alt="" />
          <h3>{lan.card2[2]}</h3>
          <p>{lan.card2[5]}</p>
        </div>
        <div className="card-footer">
          <img src={images[3]} alt="" />
          <h3>{lan.card2[3]}</h3>
          <p>{lan.card2[5]}</p>
        </div>
        <div className="card-footer">
          <img src={images[4]} alt="" />
          <h3>{lan.card2[4]}</h3>
          <p>{lan.card2[5]}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
