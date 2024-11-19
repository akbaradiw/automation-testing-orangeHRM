describe ("Dummy", ()=>{
    it("Dummy", () => {
        cy.visit("https://id.m.wikipedia.org/wiki/Kristofer_Kolumbus")
    cy.get("h2").contains("kehidupan awal").should("have.text", "Kehidupan awal");
  
}) })