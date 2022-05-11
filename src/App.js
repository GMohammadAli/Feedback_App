import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'

function App() {
    const [feedback,setFeedback] = useState(FeedbackData)
    
    const deleteFeedback = (id) => {
       if(window.confirm('Are u sure u want to delete it')){
           setFeedback(feedback.filter((item) => item.id !== id ))
       }   
    }

    return (
        <>
        <Header  />
        <div className="container">
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
        </>
    )
}

export default App