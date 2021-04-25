import styles from "../Statistics/Statistics.module.css"

const Statistics = ({good, neutral, bad, total, positivePersentage}) => (
  <ul className={styles.statistics}>
    <li className={styles.statistics__item}>Good: {good}</li>
    <li className={styles.statistics__item}>Neutral: {neutral}</li>
    <li className={styles.statistics__item}>Bad: {bad}</li>
    <li className={styles.statistics__item}>Total: {total}</li>
    <li className={styles.statistics__item}>Positive feedback: {positivePersentage}%</li>

  </ul>
   

);
  

export default Statistics;
  





























// const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
//   <>
//     <ul>
//       <li>Good: {good}</li>
//       <li>Neutral: {neutral}</li>
//       <li>Bad: {bad}</li>
//       <li>Total: {total}</li>
//       <li>Positive feedback: {positivePercentage}%</li>
//     </ul>
  

// </>
// )
 
// Statistics.propTypes = {
//     good: PropTypes.number,
//     neutral: PropTypes.number,
//     bad: PropTypes.number,
//     total:  PropTypes.number,
//     percentage:  PropTypes.number, 
// }
 
// export default Statistics;

