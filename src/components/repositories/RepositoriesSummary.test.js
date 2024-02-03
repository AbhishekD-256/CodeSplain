import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("Check whether language of project is printed", () => {
  const repository = {
    stargazers_count: 4,
    forks: 100,
    open_issues: 3,
    language: "Java",
  };

  render(<RepositoriesSummary repository={repository} />);
  const elem = screen.getByText("Java");
  expect(elem).toBeInTheDocument();
});
