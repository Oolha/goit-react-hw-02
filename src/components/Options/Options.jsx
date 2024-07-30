import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, onReset }) => {
  return (
    <div>
      <button
        className={css.btn}
        type="button"
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.btn} type="button" onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;