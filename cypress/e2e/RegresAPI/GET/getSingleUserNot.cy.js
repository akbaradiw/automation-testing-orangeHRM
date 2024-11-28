describe("RegresAPI", () => {
    it("Get Single User Not Found", () => {
      cy.request({
        method: "GET",
        url: "https://reqres.in/api/users/23",
        failOnStatusCode: false, 
      }).then((response) => {
        expect(response.status).to.eq(404);
  
        expect(response.duration).to.be.lessThan(1000);
  
        expect(response.body).to.be.empty;
      });
    });
  });
  