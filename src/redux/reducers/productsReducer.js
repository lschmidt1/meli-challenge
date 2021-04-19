import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_FAIL,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
} from "../actions/productsActions";

const initialState = {
  /* PRODUCT SEARCH */
  searchResults: [],
  searchCategories: [],
  productDetails: [],
  productsLoading: false,
  productsError: false,
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.items,
        searchCategories: action.categories,
        productsError: false,
      };

    case GET_SEARCH_RESULTS_FAIL:
      return {
        ...state,
        searchResults: [],
        searchCategories: [],
        productsError: true,
      };

    case SET_LOADING_TRUE:
      return { ...state, productsLoading: true };

    case SET_LOADING_FALSE:
      return { ...state, productsLoading: false };

    default:
      return state;
  }
}
