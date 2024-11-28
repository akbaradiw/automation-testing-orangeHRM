describe("RegresAPI", () => {
    const data = {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    };
  
    it("Get Single User", () => {
      cy.request("GET", `https://reqres.in/api/users/${data.id}`).then(
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
  
