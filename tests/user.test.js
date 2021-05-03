const request = require('supertest');
const { response } = require('../app');
const app = require('../app');


/* test("Should get all users", async () => {
    try {
        const response = await request(app).get("/api/users");
        expect(response.statusCode).toBe(200);
        expect(response.body).not.toBeNull();
    } catch (err) {
        throw err
    }

});


test('Should sign up for a user', async () => {
    try {
       await request(app).post('/api/users')
            .send({
                firsName: "newusertestfirst",
                lastName: "newusertestfirst",
                userName: "newusertestfirst",
                email: "newusertestfirst@icloud.com",
                pass: "123456"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            
            .expect(200)
    } catch (err) {
        throw err
    }

    //console.log("burdayım");
}) */



/* test("Should update a single user by id", async () => {
    const response = await request(app).patch("/api/users/605b738942d8a40b545be6d6")
    .send({
        lastName: "Özgören"
    });

    expect(response.statusCode).toBe(200);
});

 */

/* test("Should delete a single user by id", async () => {
    const response = await request(app).delete("/api/users/607407e7639bcd2b2850d623");

    expect(response.statusCode).toBe(200);
})
 */


/* 
test("Should return 404 creating user with invalid body", async () => {
    const response = await request(app).post("/api/users").send({
        firsName: "İs",
        lastName: "İs",
        userName: "İs",
        email: "testuserfourth@icloud.com",
        pass: "123456"
    });
    expect(response.statusCode).toBe(404);
}); 
 */

/* 
test("Should return 404 updating user with invalid id", async () => {
    const response = await request(app).put("/api/users/60631cf007d5361a486c54e7").send({
        firsName: "asdsd"
    });

    expect(response.statusCode).toBe(404);
}); */

/* test("Should return 400 updating user with invalid id", async () => {
    const response = await request(app).put("/api/users/605b738942d").send({
        lastName: "Özg"
    });

    expect(response.statusCode).toBe(400);
}); */

/*
test("Should return 404 getting user with invalid id", async () => {
    const response = await request(app).delete("/api/users/60631cf007d5361a486c54e7");
    expect(response.statusCode).toBe(404);
}); */

/* test("400 Bad Request", async () => {
    const response = await request(app).delete("/api/users/60631cf007d5361a486c");
    expect(response.statusCode).toBe(400);
}); */





























