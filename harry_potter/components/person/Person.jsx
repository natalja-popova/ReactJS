import styles from "./person.module.css";

const Person = ({ id, alt, src, onClick }) => {
  return (
    <img
      className={styles.card}
      key={id}
      onClick={onClick}
      src={src}
      alt={alt}
    />
  );
};

export default Person;
