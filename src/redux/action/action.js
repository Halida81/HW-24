export const addExpense = ({ title, price, date }) => ({
  type: "ADD",
  title: title, //title:title, окшош болуп калса title, жазып койсок болот
  price,
  date: date,
});

export const deleteExpense = (id) => ({
  type: "DELETE",
  id: id,
});
