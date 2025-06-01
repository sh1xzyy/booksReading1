import { useEffect } from "react"
import BookForm from "../BookForm/BookForm"
import Container from "../Container/Container"
import s from "./ModalAddBookForm.module.css"

const ModalAddBookForm = () => {

  useEffect(() => {
    document.body.setAttribute("data-scroll", "no-scroll")
    return () => document.body.setAttribute("data-scroll", "scroll")
  }, [])

  return (
    <div className={s.modalOverlay}>
        <Container>
			    <BookForm/>
		    </Container>
    </div>
  )
}

export default ModalAddBookForm