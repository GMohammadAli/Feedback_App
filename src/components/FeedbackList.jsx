import {motion, AnimatePresence} from 'framer-motion'
import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback , handleDelete}) {
  if( !feedback || feedback.length === 0){
      return <h1>No Feedback Yet</h1>
  }

  return <div className="feedback-list">
    <AnimatePresence>
      {feedback.map((item) => (
        <motion.div 
        key={item.id}
        initial = {{ opacity:0 }}
        animate = {{ opacity:1 }}
        exit = {{opacity:0 }}
        >
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        </motion.div>
        ))} 
    </AnimatePresence>
    </div> 
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired 
}



export default FeedbackList