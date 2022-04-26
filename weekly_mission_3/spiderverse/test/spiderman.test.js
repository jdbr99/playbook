const Spiderman = require("../src/spiderman.js")
describe("Unit tests for Spiderman class", () => {
  test('1) Create Spiderman object', () => {
    const andrew = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
    expect(andrew.name).toBe("Spiderman Sony")
    expect(andrew.age).toBe(31)
    expect(andrew.actor).toBe("Andrew Garfield")
    expect(andrew.studio).toBe("Sony")
  });

  test("2) Get Spiderman's info", () => {
    const andrew = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
    expect(andrew.getInfo()).toBe("Hey, I'm Andrew Garfield from Sony studio")
  })
})