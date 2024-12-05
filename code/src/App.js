import { LargeAuthorsListItems } from "./components/authors/LargeListItems";
import { SmallAuthorsListItems } from "./components/authors/SmallListItems";
import { RegularList } from "./components/lists/RegularList";
import { authors } from "./data/authors";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName="author"
        ItemComponent={SmallAuthorsListItems}
      />
      <RegularList
        items={authors}
        sourceName="author"
        ItemComponent={LargeAuthorsListItems}
      />
    </>
  );
}

export default App;
