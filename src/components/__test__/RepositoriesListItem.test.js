import { render, screen, act } from "@testing-library/react";
import RepositoriesListItem from "../repositories/RepositoriesListItem";
import { MemoryRouter } from "react-router-dom";

// jest.mock("../tree/FileIcon", () => {
//   return () => "abhishek";
// });

test("github link for project should be present in document", async () => {
  const repository = {
    full_name: "React",
    language: "JavaScript",
    description: "a project for millions",
    owner: "facebook",
    name: "react",
    html_url: "https://github.com/facebook/react",
  };
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
  await act(() => {
    pause();
  });
  const elem = screen.getByRole("link", { name: "github repo" });
  expect(elem).toBeInTheDocument();
});

function pause() {
  return new Promise((resolve) => setTimeout(resolve, 100));
}
