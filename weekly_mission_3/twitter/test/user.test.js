const User = require("../src/user.js")
describe("User model test suite", () => {
    test("1) User contains basic attributes", () => {
        const now = Date.parse("2022-04-28")
        const david = new User(1, "jdbr", "David Bolaños", "Hola, soy David!")
        expect(david.id).toBe(1)
        expect(david.username).toBe("jdbr")
        expect(david.name).toBe("David Bolaños")
        expect(david.bio).toBe("Hola, soy David!")
        expect(david.dateCreated).not.toBeUndefined()
        expect(david.lastUpdated).not.toBeUndefined()
    })

    test("2) getters work correctly", () => {
        const david = new User(1, "jdbr", "David Bolaños", "Hola, soy David!")
        // getUsername`, `getBio`, `getDateCreated`, `getLastUpdated
        expect(david.getUsername()).toBe("jdbr")
        expect(david.getBio()).toBe("Hola, soy David!")
        expect(david.getDateCreated()).not.toBeUndefined()
        expect(david.getLastUpdated()).not.toBeUndefined()
    })

    test("3) setters work correctly", () => {
        // `setUsername` y `setBio`,
        const david = new User(1, "jdbr", "David Bolaños", "Hola, soy David!")
        david.setUsername("jdbr99")
        david.setBio("Hola!")
        expect(david.getUsername()).toBe("jdbr99")
        expect(david.getBio()).toBe("Hola!")
    })
})