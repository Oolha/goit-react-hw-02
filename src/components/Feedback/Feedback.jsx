import css from "./Feedback.module.css";
const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <ul className={css.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>
          <b>Total Feedback</b>: {totalFeedback}
        </li>
        <li>
          <b>Positive</b>: {positiveFeedback} %
        </li>
      </ul>
    </>
  );
};
export default Feedback;
