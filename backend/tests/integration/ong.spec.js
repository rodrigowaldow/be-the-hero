const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new Ong', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD",
                email: "contato@apad.com",
                whatsapp: "51996512190",
                city: "Santa Cruz do Sul",
                uf: "RS"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});