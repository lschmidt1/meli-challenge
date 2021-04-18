import axios from "axios";

/* REDUCER CONSTS */
export const GET_SEARCH_RESULTS = "GET_SEARCH_RESULTS";

/* DISPATCH FUNCTIONS */
export const getSearchResultsFn = (searchResults) => ({
  type: GET_SEARCH_RESULTS,
  payload: searchResults,
});

/* ACTION FUNCTIONS */
export function getSearchResults(searchValue) {
/*   return (dispatch) => {
    if (menu.menuHref !== "" && menu.menuHref) {
      return axios({
        url:
          process.env.REACT_APP_BACKEND_URL +
          `home/users/menuitems/getUserInformation?url=${menu.menuHref}Country=${country}%26PlanYear=${year}%26CustomerId=${customerID}`,
        headers,
        method: "GET",
      })
        .then((response) => dispatch(changeMenu(menu, response.data)))
        .catch((error) => dispatch(changeMenu(menu)));
    }
  }; */
}
