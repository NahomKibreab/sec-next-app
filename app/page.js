import { Title } from "@/componets/title";
import Image from "next/image";
import About from "./about/page";
import style from "./style.module.css";

export default function Page() {
  return (
    <div>
      <h1 className={style.title}>Home Page</h1>
      <div>
        <h1>Tile</h1>
        <div>
          <Image
            src="https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
            width={300}
            height={410}
            alt="Image"
          />
          <Title text="Testing Title" />
          <About testing={{ hello: "world", hi: "there" }} />
        </div>
      </div>
    </div>
  );
}
