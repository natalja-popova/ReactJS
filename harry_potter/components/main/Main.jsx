import style from "./main.module.css";
import Person from "../person/Person";

const Main = ({ data, setData }) => {
  console.log(data);

  const fnOnClick = (personName, personId) => {
    console.log(personName, personId);
    const filteredPersons = data.filter((p) => {
      return p.id !== personId;
    });
    setData(filteredPersons);
  };

  return (
    <div className={style.cardsWrapper}>
      {data.map((p) => {
        const imgSrc =
          p.image.length > 0
            ? p.image
            : "https://img.jakpost.net/c/2017/05/05/2017_05_05_26419_1493955156._large.jpg";

        return (
          <Person
            key={p.id}
            onClick={() => fnOnClick(p.name, p.id)}
            src={imgSrc}
            alt={p.name}
          />
        );
      })}
    </div>
  );
};

export default Main;
