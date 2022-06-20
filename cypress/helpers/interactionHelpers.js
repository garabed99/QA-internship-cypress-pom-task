// import { replace } from "cypress/types/lodash";
import constants from "../constants/constants";
import selectors from "../support/selectors/selectors";
export default {
  //general////////
  visitPage: () => {
    cy.visit(constants.BASE_URL);
  },
  regionChange: () => {
    cy.get(selectors.noRegionChange).click();
  },

  //playstation////////
  searchPS: () => {
    cy.get(selectors.searchBar)
      .click()
      .type(constants.SEARCH_PRODUCT + "{enter}");
  },

  getLength: () => {
    cy.get(
      'div[class*="s-result-list"] div[data-component-type="s-search-result"]'
    ).then(($el) => {
      const itemCount = cy.$$($el).length;
      cy.log(itemCount);
    });
  },

  //price filter////////
  visitTodaysDeal: () => {
    cy.get(selectors.todaysDeal).click();
  },

  sortPriceHighLow: () => {
    cy.get(selectors.sortingBtn).click();
    cy.get(selectors.priceHighLow).click();
  },

  product1: () => {
    cy.get(selectors.firstProduct)
      .invoke("text")
      .then(cy.log)
      // .then((num) => replace(/,/g, ""))
      .then(parseFloat)
      .then(cy.log)
      .as("price1");
  },

  product2: () => {
    cy.get(selectors.secondProduct)
      .invoke("text")
      .then(cy.log)
      // .then((num) => replace(/,/g, ""))
      .then(parseFloat)
      .then(cy.log)
      .as("price2");
  },

  //career page////////
  visitCareersPage: () => {
    cy.get(selectors.careersBtn).click();
  },

  searchCareer: () => {
    cy.xpath(selectors.careerSearchBar)
      .click({ force: true })
      .type("web developer{enter}");
  },

  selectUS: () => {
    cy.xpath(selectors.selectCountryUS).click();
  },

  sortCareerPosts: () => {
    cy.xpath(selectors.sortByBtn).click();
    cy.get(selectors.mostRecent).click();
  },
};
