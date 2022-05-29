import { createContext, useState , useEffect} from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([])
  const [isLoading , setIsLoading] = useState(true)
  const [feedbackEdit , setFeedbackEdit] = useState({
      item: {},
      edit: false
  })

  useEffect(() => {
     fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch(
      `/feedback?_sort=id&_order=desc`
      )

    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

  const addFeedback = async  (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newFeedback)
    })

    const newData = await response.json()

    setFeedback([newData, ...feedback]);
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are u sure u want to delete it")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
      console.log(feedback);
      const newArray = feedback.filter((item) => item.id !== id);
      console.log(newArray);
      setFeedback(newArray);
    }
  };

  const updateFeedback = async (id , updItem) => {
     const response = await fetch(`/feedback/${id}`, {
       method: "PUT",
       headers: {
         "Content-type": "application/json",
       },
       body: JSON.stringify(updItem),
     });

     const newData = await response.json();

    setFeedback(feedback.map((item) => ( item.id === id ? { ...item, ...newData } : item ) ))
  }

  const editFeedback = (item) => {
      setFeedbackEdit({
          item,
          edit: true
      })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
