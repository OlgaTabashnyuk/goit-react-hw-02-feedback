import PropTypes from 'prop-types'
import styles from '../FeedbackOptions/FeedbackOptions.module.css'
const FeedbackOptions = ({options, onLeaveFeedback}) => {
   return (
   <div className={styles.ButtonList}>
        {options.map((option) => (
            <button 
            className={styles.ButtonItems}
                key={option}
                type="button" 
                value={option}
                onClick={onLeaveFeedback}> 
                {option}
            </button>
        ))}
    </div>
   ) 
}
    
FeedbackOptions.propTypes = {
        options: PropTypes.arrayOf(PropTypes.string),
        onLeaveFeedback: PropTypes.func.isRequired,
   }

 export default FeedbackOptions;
















// const FeedbackOptions = ({ options, onLeaveFeedback }) => (
//    <div>
// {options.map(option =>  (
//         <button
//         key={option}
//         type="button"
//         value={option}
//         onClick={onLeaveFeedback}>
// {option}
//         </button>
//     ))}
// </div>
// );


// FeedbackOptions.propTypes = {
//     options: PropTypes.arrayOf(PropTypes.string),
//     onLeaveFeedback: PropTypes.func.isRequired,
// };

// export default FeedbackOptions;