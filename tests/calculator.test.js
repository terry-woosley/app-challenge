
QUnit.test("TEST area", assert => {
    assert.equal(calculateRadius(5), 78.53981633974483, "good numerical input")
    assert.equal(calculateRadius(-5), 0.0, "bad numerical input")
    assert.equal(calculateRadius("Hello World"), 0.0, "bad type input")
})