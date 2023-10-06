import ButtonSettings from "./ButtonSettings";

function GridItem({ heading, buttons, current, setterFn, onClick }) {
  return (
    <div className="grid-item">
      <h4 className="grid-item-heading">{heading}</h4>
      <div
        className="btn-options-start"
        style={{ gridTemplateColumns: `repeat(${buttons.length}, 1fr)` }}
      >
        {buttons.map((button) => (
          <ButtonSettings
            key={button}
            current={current}
            setterFn={setterFn}
            onClick={onClick}
          >
            {button}
          </ButtonSettings>
        ))}
      </div>
    </div>
  );
}

export default GridItem;
