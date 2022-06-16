// const searchBar = cy.get('#twotabsearchtextbox')

export default {
  //general element////////
  noRegionChange: ".a-button-base",

  //playstation testing////////
  searchBar: "#twotabsearchtextbox",

  //price filter testing////////
  todaysDeal: '[href="/gp/goldbox?ref_=nav_cs_gb"]',
  sortingBtn: ".a-button-text",
  priceHighLow: "#sorting_dropdown0_4",
  firstProduct:
    ':nth-child(1) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid="deal-card"] > span.a-size-mini > [data-a-size="m"] > [aria-hidden="false"] > .a-price-whole',
  secondProduct:
    ':nth-child(2) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid="deal-card"] > span.a-size-mini > [data-a-size="m"] > [aria-hidden="false"] > .a-price-whole',

  //career as web developer in US testing////////
  careersBtn: ":nth-child(1) > ul > .nav_first > .nav_a",
  careerSearchBar: '//*[@id="home-search"]/div/form/div[1]/div[1]/div',
  selectCountryUS:
    '//*[@id="desktopFilter_normalized_country_code"]/div/div/div/div[2]/fieldset/div/button[1]',
  sortByBtn:
    '//*[@id="main-content"]/div[4]/div/div/div[2]/content/div/div/div[2]/div[1]/div/div/button',
  mostRecent: "#recent",
  lastPostUpdate:
    '//*[@id="main-content"]/div[4]/div/div/div[2]/content/div/div/div[2]/div[2]/div/div[1]/a/div/div[1]/div[2]/p',
};
