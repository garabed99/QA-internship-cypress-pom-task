/// <reference types="cypress" />

import interactionHelpers from "../../helpers/interactionHelpers";
import assertionHelpers from "../../helpers/assertionHelpers";

describe("testing Amazon page", () => {
  beforeEach(() => {
    interactionHelpers.visitPage();
  });

  it("searches for playstation game", () => {
    //list of products
    // cy.get(
    //   'div[class*="s-result-list"] div[data-component-type="s-search-result"]'
    // );
    interactionHelpers.searchPS();
    interactionHelpers.getLength();
        cy.get(
      'div[class*="s-result-list"] div[data-component-type="s-search-result"]'
    ).each((item, index)=> {
      cy.wrap(item).contains("PlayStation")
    });



    // cy.get(
    //   '[data-asin="B09DN1FJ26"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .s-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium'
    // ).click();

    // cy.get("#platformInformation_feature_div").contains("PlayStation 4");
  });

  // it("check if price filter for today's deals works", () => {
  //   interactionHelpers.regionChange();
  //   interactionHelpers.visitTodaysDeal();
  //   interactionHelpers.sortPriceHighLow();
  //   const prod1 = interactionHelpers.product1();
  //   const prod2 = interactionHelpers.product2();
  //   assertionHelpers.comparePrices(prod1, prod2);
  // });

  // it("should check web developer career in US", () => {
  //   interactionHelpers.regionChange();
  //   interactionHelpers.visitCareersPage();
  //   interactionHelpers.searchCareer();
  //   interactionHelpers.selectUS();
  //   interactionHelpers.sortCareerPosts();
  //   assertionHelpers.checkTimePosted();
  // });
});
