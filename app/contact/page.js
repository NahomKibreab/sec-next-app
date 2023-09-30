import NavBar from "../componets/nav-bar";
import style from "../style.module.css";

export default function Page() {
  return (
    <div>
      <NavBar />
      <h1 className={style.title}>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nihil
        facilis possimus quos corrupti aperiam neque veritatis, doloribus
        eveniet hic maxime quae provident inventore voluptatibus, alias, ipsum
        magnam vitae ducimus.
      </p>
    </div>
  );
}
