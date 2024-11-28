describe("RegresAPI", () => {
    const data = {
        "id": 2,
        "name": "fuchsia rose",
        "year": 2001,
        "color": "#C74375",
        "pantone_value": "17-2031",
    };
  
    it("Get Single Resource User", () => {
      cy.request("GET", `https://reqres.in/api/unknown/${data.id}`).then(
        (response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.lessThan(1000);

          const user = response.body.data;
          expect(user.id).to.eq(data.id);
          expect(user.email).to.eq(data.email);
          expect(user.first_name).to.eq(data.first_name);
          expect(user.last_name).to.eq(data.last_name);
          expect(user.avatar).to.eq(data.avatar);
        }
      );
    });
  });
  