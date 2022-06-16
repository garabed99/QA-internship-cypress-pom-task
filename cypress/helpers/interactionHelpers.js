import BASE_URL from "../constants/constants";
import selectors from "../support/selectors/selectors";
export default {
  //general
  visitPage: () => {
    cy.visit("https://www.amazon.com");
  },

  //playstation
  searchPS: () => {
    cy.get(selectors.searchBar).click().type("playstation{enter}");
  },

  //price filter
  visitTodaysDeal: () => {
    cy.get(selectors.todaysDeal).click();
  },
  sortPriceHighLow: () => {
    cy.get(selectors.sortingBtn).click();
    cy.get(selectors.priceHighLow).click();
  },
  
};
