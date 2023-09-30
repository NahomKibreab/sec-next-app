import NavBar from "../componets/nav-bar";
import style from "../style.module.css";

export default function Page() {
  return (
    <div>
      <NavBar />
      <h1 className={style.title}>About</h1>
    </div>
  );
}
