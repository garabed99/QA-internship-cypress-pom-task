import constants from "../constants/constants";
import selectors from "../support/selectors/selectors";
export default {
  //playstation////////
  searchPS: () => {
    cy.get(selectors.searchBar).click().type("playstation{enter}");
  },

  checkSearchAccuracy: () => {
    //list of products
    cy.get(
      'div[class*="s-result-list"] div[data-component-type="s-search-result"] h2 span[class*="a-text-normal"]'
    ).each((item, index) => {
      cy.wrap(item).contains(/PlayStation|PS/i);
    });
  },

  //price filter////////
  comparePrices: (prod1, prod2) => {
    cy.get(prod1)
      .invoke("text")
      .then((price1) => {
        cy.get(prod2)
          .invoke("text")
          .then((price2) => {
            let firstPrice = parseFloat(price1.replace(/,/g, ""));
            let secondPrice = parseFloat(price2.replace(/,/g, ""));
            expect(firstPrice).to.greaterThan(secondPrice);
          });
      });
  },

  //career page////////
  checkTimePosted: () => {
    cy.xpath(selectors.lastPostUpdate).contains(/hours ago|hour ago/i);
  },
};

