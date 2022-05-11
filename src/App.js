function App() {
    const title = 'Blog Post'
    const body = 'This is a blog Post'
    const comments = [
      { id: 1, text: "comment one" },
      { id: 2, text: "comment two" },
    ]
    return (
        <>
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p>
        <ul>
            {comments.map((comment,i) => (
                <li key={i}>{comment.text}</li>
            ))}
        </ul>
        </>
    )
}

export default App