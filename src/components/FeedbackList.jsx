import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback , handleDelete}) {
  if( !feedback || feedback.length === 0){
      return <h1>No Feedback Yet</h1>
  }

  return <div className="feedback-list">
    {feedback.map((item) => (
    <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
    ))} 
    </div> 
}

export default FeedbackList