import './Buttons.css';

const Buttons = (props) => {
  const startClickHandler = () => {
    if (!props.active) {
      props.start();
    }
  };

  const counterIncrementHandler = () => {
    if (props.active) {
        props.increment();
    }
  };

  const resetClickHandler = () => {
    props.reset();
  };

  return (
    <div className="shell">
      <button className="start" onClick={startClickHandler}>
        Start
      </button>
      <button className="clickMe" onClick={counterIncrementHandler}>
        Click Me
      </button>
      <button className="reset" onClick={resetClickHandler}>
        Reset
      </button>
    </div>
  );
};

export default Buttons;
