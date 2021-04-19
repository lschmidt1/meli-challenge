import axios from '../../axiosConfig/axios/api'

/* REDUCER CONSTS */
export const GET_SEARCH_RESULTS = "GET_SEARCH_RESULTS";
export const GET_SEARCH_RESULTS_FAIL = "GET_SEARCH_RESULTS_FAIL";
export const SET_LOADING_TRUE = "SET_LOADING_TRUE";
export const SET_LOADING_FALSE = "SET_LOADING_FALSE";

/* DISPATCH FUNCTIONS */
export const getSearchResultsFn = (items, categories) => ({
  type: GET_SEARCH_RESULTS,
  items,
  categories
});
export const getSearchResultsFailFn = (error) => ({
  type: GET_SEARCH_RESULTS_FAIL,
  error,
});
export const setLoadingTrueFn = () => ({
  type: SET_LOADING_TRUE,
});
export const setLoadingFalseFn = () => ({
  type: SET_LOADING_FALSE,
});

/* ACTION FUNCTIONS */
export function getSearchResults(searchValue) {
  return (dispatch) => {
    dispatch(setLoadingTrueFn());
    return axios
      .get(`/api/items?q=${searchValue}`)
      .then((res) => {
        dispatch(setLoadingFalseFn());
        dispatch(getSearchResultsFn(res.data.items, res.data.categories));
        /*  setCategories(res.data.categories); */
      })
      .catch((err) => {
        dispatch(setLoadingFalseFn());
        dispatch(getSearchResultsFailFn(err));
      });
  };
}
