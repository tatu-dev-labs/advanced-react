import { LargeAuthorsListItems } from "./components/authors/LargeListItems";
import { SmallAuthorsListItems } from "./components/authors/SmallListItems";
import { LargeBooksListItems } from "./components/books/LargeListItems";
import { SmallBooksListItems } from "./components/books/SmallListItems";
import { NumberedList } from "./components/lists/NumberedList";
import { RegularList } from "./components/lists/RegularList";
import { authors } from "./data/authors";
import { books } from "./data/books";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName="author"
        ItemComponent={SmallAuthorsListItems}
      />
      <hr />
      <RegularList
        items={authors}
        sourceName="author"
        ItemComponent={LargeAuthorsListItems}
      />
      <hr />
      <RegularList
        items={books}
        sourceName="book"
        ItemComponent={SmallBooksListItems}
      />
      <hr />
      <NumberedList
        items={books}
        sourceName="book"
        ItemComponent={LargeBooksListItems}
      />
    </>
  );
}

export default App;
