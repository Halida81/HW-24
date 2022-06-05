const initialState = {
  expense: [{ title: "mac", price: "2000", date: "2022-03-12" }], //баштапкы абалы пустой массив болушу керек
};

let nextId = 0;
export const reducerFunc = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        expense: [
          ...state.expense,
          {
            title: action.title,
            price: action.price,
            date: action.date,
            id: nextId++,
          },
        ],
      };
    case "DELETE":
      return {
        ...state,
        expense: state.expense.filter((exp) => exp.id !== action.id),
      };

    default:
      return state;
  }
};
