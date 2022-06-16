// const searchBar = cy.get('#twotabsearchtextbox')

export default {
    //general element
    noRegionChange: ".a-button-base",
    
    //playstation testing
    searchBar: "#twotabsearchtextbox",

    //price filter testing
    todaysDeal: '[href="/gp/goldbox?ref_=nav_cs_gb"]',
    sortingBtn:".a-button-text",
    priceHighLow: "#sorting_dropdown0_4",
    firstProd: ':nth-child(1) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid="deal-card"] > span.a-size-mini > [data-a-size="m"] > [aria-hidden="false"] > .a-price-whole',
    secondProd: ':nth-child(2) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid="deal-card"] > span.a-size-mini > [data-a-size="m"] > [aria-hidden="false"] > .a-price-whole',
    
}