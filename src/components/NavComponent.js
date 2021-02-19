export const NavComponent = ({ setRoute }) => {
  const handleRoute = (e) => {
    console.log(e.target.value);
    setRoute(e.target.value);
  };
  return (
    <nav className="navigation container">
      <div className="nav-brand">Week0 React Exercises</div>
      <ul className="list-non-bullet nav-pills">
        <li className="list-item-inline">
          <button className="linkButton" onClick={handleRoute} value="home">
            home
          </button>
        </li>
        <li className="list-item-inline">
          <button className="linkButton" onClick={handleRoute} value="figma">
            figma
          </button>
        </li>
        <li className="list-item-inline">
          <button className="linkButton" onClick={handleRoute} value="toast">
            toast
          </button>
        </li>
      </ul>
    </nav>
  );
};
