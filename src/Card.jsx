import styles from "./Card.module.css";

const Card = (props) => {
  const handleClick = () => {
    if (props.onButtonClick) {
      props.onButtonClick(props.title, props.characternames);
    }
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{props.title}</h1>

      <div className={styles.imageContainer}>
        <img className={styles.image} src={props.img} alt={props.title} />
      </div>

      <p className={styles.desc}>{props.desc}</p>

      <div className={styles.charactersContainer}>
        {props.characternames.map((char, index) => (
          <span key={index} className={styles.character}>
            {char}
          </span>
        ))}
      </div>

      <button className={styles.button} onClick={handleClick}>
        წიგნის მონაცემები
      </button>
    </div>
  );
};

export default Card;
