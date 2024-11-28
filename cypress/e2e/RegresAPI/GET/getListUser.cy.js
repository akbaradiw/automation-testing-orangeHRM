describe('RegresAPI', () => {

    it('Get List User - Page 2', () => {
      cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {

        // Validasi Status Respons
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.lessThan(1000);
  
        expect(response.body).to.have.property('total');
        expect(response.body).to.have.property('total_pages');
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.length(6);
  
        const detailUserData = response.body.data.find(user => user.id === 7);
        expect(detailUserData).to.not.be.undefined;
        expect(detailUserData.email).to.eql('michael.lawson@reqres.in');
        expect(detailUserData.first_name).to.eql('Michael');
        expect(detailUserData.last_name).to.eql('Lawson');
        expect(detailUserData.avatar).to.eql('https://reqres.in/img/faces/7-image.jpg');
      });
    });
  });
  