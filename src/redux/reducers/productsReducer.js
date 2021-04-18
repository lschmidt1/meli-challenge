import { GET_SEARCH_RESULTS } from "../actions/productsActions";

const initialState = {
  /* PRODUCT SEARCH */
  searchResults: [],
  productDetails: [],
  productsLoading: false,
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload };

    default:
      return state;
  }
}
