import './App.css'

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const data = {name, email}
    fetch('http://localhost:5000/users',{
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    }).then(res => res.json()).then(response => {
      console.log(response)
    })
  }

  return (
    <>
      <h1>Vite + React</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" id="" />
      </form>
    </>
  )
}

export default App
