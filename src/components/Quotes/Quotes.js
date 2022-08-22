import style from "./Quotes.module.css";

const Quotes = ({ quotes }) => {
  return (
    <section className={`font-family ${style.quotes}`}>
      <div>
        <p>{quotes.content}</p>
      </div>
      <span>{quotes.author}</span>
    </section>
  );
};

export default Quotes;
