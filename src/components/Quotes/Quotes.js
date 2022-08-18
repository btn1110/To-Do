const Quotes = ({ quotes }) => {
  return (
    <section>
      <div>
        <p>{quotes.content}</p>
      </div>
      <span>{quotes.author}</span>
    </section>
  );
};

export default Quotes;
