import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={`font-family ${style.header}`}>
      <h1>To-Do List</h1>
    </header>
  );
};

export default Header;
