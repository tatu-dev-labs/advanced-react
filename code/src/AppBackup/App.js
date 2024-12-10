import { Modal } from "./components/Modal";
import { RegularList } from "./components/lists/RegularList";
import { LargeBooksListItems } from "./components/books/LargeListItems";
import { books } from "./data/books";

function App() {
  return (
    <>
      <Modal>
        <RegularList
          items={books}
          sourceName="book"
          ItemComponent={LargeBooksListItems}
        />
      </Modal>
    </>
  );
}

export default App;
