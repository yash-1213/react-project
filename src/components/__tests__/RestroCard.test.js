import { render, screen } from "@testing-library/react";
import RestroCard from "../RestroCard";
import MOCK_DATA from "../mocks/RestroCardMock.json";
import "@testing-library/jest-dom";

it("Should render Restro card component with props Data", () => {
  render(<RestroCard resData={MOCK_DATA} />);
  const restroName = screen.getByText("Pizza Paradise");
  expect(restroName).toBeInTheDocument();
});
