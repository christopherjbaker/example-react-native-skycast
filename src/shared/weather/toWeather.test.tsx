import toWeather from "./toWeather"

describe("Weather > toWeather", () => {
  it("works", () => {
    expect(toWeather(0)).toEqual("Clear")
  })
})
