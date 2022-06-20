/// <reference types="cypress" />

import interactionHelpers from "../../helpers/interactionHelpers";
import assertionHelpers from "../../helpers/assertionHelpers";
import selectors from "../../support/selectors/selectors";

describe("testing Amazon page", () => {
  beforeEach(() => {
    interactionHelpers.visitPage();
  });

  it("checks accuracy of searching for PlayStation", () => {
    interactionHelpers.regionChange();
    interactionHelpers.searchPS();
    interactionHelpers.getLength();
    assertionHelpers.checkSearchAccuracy();
  });

  it("checks if price filter for today's deals works", () => {
    interactionHelpers.regionChange();
    interactionHelpers.visitTodaysDeal();
    interactionHelpers.sortPriceHighLow();
    const prod1 = selectors.firstProduct;
    const prod2 = selectors.secondProduct;
    assertionHelpers.comparePrices(prod1, prod2);
  });

  it("checks web developer career in US", () => {
    interactionHelpers.regionChange();
    interactionHelpers.visitCareersPage();
    interactionHelpers.searchCareer();
    interactionHelpers.selectUS();
    interactionHelpers.sortCareerPosts();
    assertionHelpers.checkTimePosted();
  });
});
