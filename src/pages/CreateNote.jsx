import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"

const CreateNote = () => {
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn"> <IoIosArrowBack /> </Link>
        <button className="btn lg primar">Save</button>
      </header>
      <form className="create-note__form">
        <input type="text" placeholder="Title" />
        <textarea rows="28" placeholder="Notes Details..."></textarea>
      </form>
    </section>
  )
}

export default CreateNote