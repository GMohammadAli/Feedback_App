import {useState} from 'react'
import Card from "./styleComponents/Card"
import Button from './styleComponents/Button'

function FeedbackForm() {
  const [text ,setText] = useState('')
  const [btnDisabled ,setBtnDisabled] = useState(true)

  const [message ,setMessage] = useState('')

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

   return (
    <Card>
      <form >
          <h2>How would you like to rate us?</h2>
          <div className="input-group">
             <input onChange={handleTextChange} type="text" placeholder="Write a Review" value={text}/>
             <Button type="submit" version='secondary' isDisabled={btnDisabled}>Send</Button>
          </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
