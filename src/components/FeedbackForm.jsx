import {useState, useContext , useEffect} from 'react'
import Card from "./styleComponents/Card"
import Button from './styleComponents/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const [text ,setText] = useState('')
  const [btnDisabled ,setBtnDisabled] = useState(true)
  const [rating , SetRating] = useState(4);
  const [message ,setMessage] = useState('')

  const {addFeedback , feedbackEdit , updateFeedback } = useContext(FeedbackContext)

  useEffect(() => {
    if(feedbackEdit.edit === true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      SetRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])
  
  const handleTextChange = (e) => {
    if(text === ''){
        setBtnDisabled(true)
        setMessage(null)
    }else if(text !== '' && text.trim().length <= 10){
        setBtnDisabled(true)
        setMessage('Message Should be atleast 10 characters')
    }else {
        setBtnDisabled(false)
        setMessage(null)
    }

      setText(e.target.value)
  }

  const handleSubmit =(e)=> {
    e.preventDefault()
    if(text.trim().length > 10){
      const newFeedback = {
        text,
        rating
      }

      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }
   

      setText('')
    }
  }

   return (
    <Card>
      <form onSubmit={handleSubmit}>
          <h2>How would you like to rate us?</h2>
          <RatingSelect select={(rating) => SetRating(rating)} />
          <div className="input-group">
             <input onChange={handleTextChange} type="text" placeholder="Write a Review" value={text}/>
             <Button type="submit" isDisabled={btnDisabled}>Send</Button>
          </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
