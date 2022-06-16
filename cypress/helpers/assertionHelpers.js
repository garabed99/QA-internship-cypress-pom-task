import constants from "../constants/constants";
import selectors from "../support/selectors/selectors";
export default {
  //playstation////////
  searchPS: () => {
    cy.get(selectors.searchBar).click().type("playstation{enter}");
  },

  //price filter////////
  comparePrices: (prod1, prod2) => {
    cy.get("@price1").then((price1) => {
      cy.get("@price2").then((price2) => {
        expect(price2).to.lessThan(price1);
      });
    });
  },

  //career page////////
  checkTimePosted: () => {
    cy.xpath(selectors.lastPostUpdate).contains(constants.CHECK_TIME);
  },
};
