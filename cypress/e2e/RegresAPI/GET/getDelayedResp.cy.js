describe("RegresAPI", () => {
    const data = [
      {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
      },
      {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
      },
      {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg",
      },
      {
        id: 4,
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg",
      },
      {
        id: 5,
        email: "charles.morris@reqres.in",
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://reqres.in/img/faces/5-image.jpg",
      },
      {
        id: 6,
        email: "tracey.ramos@reqres.in",
        first_name: "Tracey",
        last_name: "Ramos",
        avatar: "https://reqres.in/img/faces/6-image.jpg",
      },
    ];
  
    data.forEach((user) => {
      it(`Get Delayed Response - ID: ${user.id}`, () => {
        cy.request({
          method: "GET",
          url: `https://reqres.in/api/users/${user.id}?delay=3`,
        }).then((response) => {
          expect(response.status).to.eq(200);
  
          const resData = response.body.data;
          expect(resData.id).to.eq(user.id);
          expect(resData.email).to.eq(user.email);
          expect(resData.first_name).to.eq(user.first_name);
          expect(resData.last_name).to.eq(user.last_name);
          expect(resData.avatar).to.eq(user.avatar);
        });
      });
    });
  });
  