function Menu({ isOpen }) {
  console.log(isOpen);
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="menu">
        <button className="btn-orange">Restart</button>
        <button className="btn-light-blue">New Game</button>
        <button className="btn-light-blue">Resume Game</button>
      </div>
    </div>
  );
}

export default Menu;
