export const SmallAuthorsListItems = ({ author }) => {
  const { name, age } = author;
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};
