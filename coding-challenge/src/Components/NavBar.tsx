import i18n from "../libs/i18n";

const NavBar = () => {
  return (
    <div>
      <h1>Dashboard Analysis</h1>
      <span>
        <button onClick={() => i18n.changeLanguage("en-US")}>English</button>
        <button onClick={() => i18n.changeLanguage("de-DE")}>Deutsch</button>
      </span>
    </div>
  );
};

export default NavBar;
