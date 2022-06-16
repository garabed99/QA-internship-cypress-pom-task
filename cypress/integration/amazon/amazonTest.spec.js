/// <reference types="cypress" />

import interactionHelpers from "../../helpers/interactionHelpers";

import * as assertion from "../../helpers/assertionHelpers";

describe("testing Amazon page", () => {
  beforeEach(() => {
    interactionHelpers.visitPage();
  });
  it("searches for playstation game", () => {
    // cy.get(
    //   'div[class*="s-result-list"] div[data-component-type="s-search-result"]'
    // );
    interactionHelpers.searchPS();
    // cy.get("#twotabsearchtextbox").click().type("playstation{enter}");
    cy.get(
      '[data-asin="B09DN1FJ26"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .s-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium'
    ).click();

    cy.get("#platformInformation_feature_div").contains("PlayStation 4");
    // interactionHelpers.acceptCookie();
  });

  // it("check if price filter for today's deals works", () => {
  //   cy.get(".a-button-base").click();
  //   cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]').click();
  //   cy.get(".a-button-text").click();
  //   cy.get("#sorting_dropdown0_4").click();
  //   cy.get(
  //     ':nth-child(1) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid="deal-card"] > span.a-size-mini > [data-a-size="m"] > [aria-hidden="false"] > .a-price-whole'
  //   )
  //     .invoke("text")
  //     .then(cy.log)
  //     .then(parseInt)
  //     .as("price1");

  //   cy.get(
  //     ':nth-child(2) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid="deal-card"] > span.a-size-mini > [data-a-size="m"] > [aria-hidden="false"] > .a-price-whole'
  //   )
  //     .invoke("text")
  //     .then(cy.log)
  //     .then(parseInt)
  //     .as("price2");

  //   cy.get("@price1").then((price1) => {
  //     cy.get("@price2").then((price2) => {
  //       expect(price2).to.lessThan(price1);
  //     });
  //   });
  // });

  // it("should check web developer career in US", () => {
  //   cy.get(".a-button-base").click();
  //   cy.get(":nth-child(1) > ul > .nav_first > .nav_a").click();
  //   cy.xpath('//*[@id="home-search"]/div/form/div[1]/div[1]/div')
  //     .click({ force: true })
  //     .type("web developer{enter}");
  //   cy.xpath(
  //     '//*[@id="desktopFilter_normalized_country_code"]/div/div/div/div[2]/fieldset/div/button[1]'
  //   ).click();
  //   cy.xpath(
  //     '//*[@id="main-content"]/div[4]/div/div/div[2]/content/div/div/div[2]/div[1]/div/div/button'
  //   ).click();
  //   cy.get("#recent").click();
  //   cy.xpath(
  //     '//*[@id="main-content"]/div[4]/div/div/div[2]/content/div/div/div[2]/div[2]/div/div[1]/a/div/div[1]/div[2]/p'
  //   ).contains("hours ago");
  // });
});
