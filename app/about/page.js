import style from "../style.module.css";

export default function Page({ testing, params }) {
  return (
    <div>
      <h1 className={style.title}>About</h1>
      <p>{JSON.stringify(testing)}</p>
      <p>{JSON.stringify(params)}</p>
    </div>
  );
}
