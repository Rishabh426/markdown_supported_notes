import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { Routes, Route, Navigate } from "react-router-dom"
import { Newnotes } from "./Newnotes"

function App() {

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/new" element={<Newnotes />}></Route>
        <Route path="/:id">
          <Route index element= {<h1>SHOW</h1>}/>
          <Route path="edit" element={<h1>EDIT</h1>}/>
        </Route>
        <Route path="*" element= {<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </Container>
  )
}

export default App
