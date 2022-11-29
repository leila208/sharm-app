let initialState = {
  modalShow: false,
  basket: JSON.parse(window.localStorage.getItem("basket"))
    ? JSON.parse(window.localStorage.getItem("basket"))
    : [],
  fav: JSON.parse(window.localStorage.getItem("fav"))
  ? JSON.parse(window.localStorage.getItem("fav"))
    : [],
};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "ADD":
      return {...state,basket:action.payload}
    case "REMOVE_BASKET":
      return {
        ...state,
        basket: [...state.basket.filter((a) => a.id !== action.payload)],
      };
    case "FAV":
      return {
        ...state,
        fav: [...state.fav, action.payload],
      };
    case "REMOVE_FAV":
      console.log(state.fav, action.payload);
      return {
        ...state,
        fav: [...state.fav.filter((a) => a.id !== action.payload)],
      };
    case "OPEN_MODAL":
      return { ...state, modalShow: true };
    case "CLOSE_MODAL":
      return { ...state, modalShow: false };
    default:
      return state;
  }
  
}

