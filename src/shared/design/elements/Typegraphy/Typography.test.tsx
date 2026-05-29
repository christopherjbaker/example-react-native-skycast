import { render } from "@testing-library/react-native"

import Typography from "./Typography"

describe("Design > Elements > Typography", () => {
  it("renders with the normal styles", () => {
    const { getByText } = render(
      <Typography variant="normal">Hello!</Typography>,
    )

    expect(getByText("Hello!")).toHaveStyle({ fontSize: 16 })
  })
})
