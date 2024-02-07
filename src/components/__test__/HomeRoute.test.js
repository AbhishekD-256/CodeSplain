import { screen, render } from "@testing-library/react";
import HomeRoute from "../../routes/HomeRoute";

test("Check python and Java to be in the Document", () => {
  const label = " most popular java";
  const repository = {
    full_name: "React",
    language: "JavaScript",
    description: "a project for millions",
    owner: "facebook",
    name: "react",
    html_url: "https://github.com/facebook/react",
  };
  render(<HomeRoute label={label} repository={repository} />);
});
