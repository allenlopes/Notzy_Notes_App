import {AiOutlineFileSearch} from 'react-icons/ai'
import dummyNotes from '../dummy_notes'
import { Link } from 'react-router-dom'
import{BsPlusLg} from 'react-icons/bs'

const Notes = () => {
  return (
    <section>
      <header className="notes__header">
        <h2> My Notes</h2>
        {/* <input type="text" autoFocus placeholder='Keyword...' /> */}
        <button className='btn'> <AiOutlineFileSearch/> </button>
      </header>
      <div className="notes__container">
        {
          dummyNotes.map(note => <NoteItem key={note.id} />)
        }
      </div>
      <Link className='btn add__btn'> <BsPlusLg/> </Link>
    </section>
  )
}

export default Notes