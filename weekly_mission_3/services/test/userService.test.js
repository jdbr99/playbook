const UserService = require("../src/userService.js")
describe("UserService factory tests", () => {
    test("1) UserService factory creates succesfully", () => {
        const david = UserService.create(1, "jdbr", "David Bolaños")
        expect(david.id).toBe(1)
        expect(david.getUsername()).toBe("jdbr")
        expect(david.name).toBe("David Bolaños")
        expect(david.getBio()).toBe("Hi! I'm David Bolaños.")
        expect(david.getDateCreated()).not.toBeUndefined()
        expect(david.getLastUpdated()).not.toBeUndefined()
    })

    test("2) getInfo returns correct info", () => {
        const david = UserService.create(1, "jdbr", "David Bolaños")
        const info = UserService.getInfo(david)
        expect(info).toBe(JSON.stringify(david))
    })

    test("3) Correctly updates username", () => {
        const david = UserService.create(1, "jdbr", "David Bolaños")
        UserService.updateUserUsername(david, "jdbr99")
        expect(david.getUsername()).toBe("jdbr99")
    })

    test("4) Correctly lists usernames", () => {
        const david = UserService.create(1, "jdbr", "David Bolaños")
        const david1 = UserService.create(2, "jdbr1", "David Bolaños1")
        const david2 = UserService.create(3, "jdbr2", "David Bolaños2")
        const david3 = UserService.create(4, "jdbr3", "David Bolaños3")
        const list = UserService.getAllUsernames([david, david1, david2, david3])
        expect(list).toContain("jdbr")
        expect(list).toContain("jdbr1")
        expect(list).toContain("jdbr2")
        expect(list).toContain("jdbr3")
    })
})