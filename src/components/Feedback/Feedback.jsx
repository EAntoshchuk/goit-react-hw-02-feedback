import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export default function Feedback() {
//   {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   },
//   }
  return (
    <div className={css.Feedback}>
      <h2 className={css.title}>Please leave feedback</h2>
      <div className={css.buttons}>
        <button type="button" className={css.btn}>
          Good
        </button>
        <button type="button" className={css.btn}>
          Neutral
        </button>

        <button type="button" className={css.btn}>
          Bad
        </button>
      </div>
      <h2>Statistics</h2>
      <ul className={css.stats}>
        <li className={css.stats_item}>
          <p className={css.quantity}>Good: {this.state.good}</p>
        </li>
        <li className={css.stats_item}>
          <p className={css.quantity}>Neutral: {this.state.neutral}</p>
        </li>
        <li className={css.stats_item}>
          <p className={css.quantity}>Bad: {this.state.bad}</p>
        </li>
      </ul>
    </div>
  );
}

// Feedback.propTypes = {
//   state: PropTypes.shape({
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//   }),
// };
