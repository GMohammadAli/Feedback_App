import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 3,
      text: "loremipsum*3",
    },
    {
      id: 2,
      rating: 1,
      text: "loremipsum*1",
    },
    {
      id: 3,
      rating: 4,
      text: "loremipsum*4",
    },
  ]);

  const [feedbackEdit , setFeedbackEdit] = useState({
      item: {},
      edit: false
  })

  const deleteFeedback = (id) => {
    if (window.confirm("Are u sure u want to delete it")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const updateFeedback = (id , updItem) => {
    setFeedback(feedback.map((item) => ( item.id === id ? { ...item, ...updItem } : item ) ))
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
