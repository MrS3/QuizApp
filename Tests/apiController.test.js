const expect = require('expect')
const request = require('supertest')
const {app} = require('../server')
const {User} = require('../Models/User')

beforeEach((done) => {
    User.remove({}).then(() => done())
})

describe('POST /user', () => {
    it('Should create new User', (done) => {
        var user = { 
           name: 'Janek',
           email: 'janek@02.pl'
        }
        
        request(app).post('/user').send(user)
        .expect(200)
        .expect((response) => {
            expect(response.body.email).toBe(user.email)
        })
        .end((error, response) => {
            if (error) {
                return done(error)
            }
            User.find().then((users) => {
                expect(users.length).toBe(1)
                expect(users[0].email).toBe(user.email)
                done()
            }).catch((error) => done(error))
        })
    })
})

