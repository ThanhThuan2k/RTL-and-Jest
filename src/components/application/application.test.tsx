import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
    test("render correctly", () => {
       render(<Application />);

       const pageHeading = screen.getByRole("heading", {
            name: "Job application form",
            level: 1,
       });
       expect(pageHeading).toBeInTheDocument();

       const sectionHeading = screen.getByRole("heading", {
            name: "Section 1",
            level: 2
       });
       expect(sectionHeading).toBeInTheDocument();

       const nameElement = screen.getByRole("textbox", {
            name: "Name",
       });
       expect(nameElement).toBeInTheDocument();

       const bioTextArea = screen.getByRole("textbox", {
            name: "Bio"
       });
       expect(bioTextArea).toBeInTheDocument();

       const jobLocation = screen.getByRole("combobox");
       expect(jobLocation).toBeInTheDocument();

       const termsCheckbox = screen.getByRole("checkbox");
       expect(termsCheckbox).toBeInTheDocument();

       const submitBtn = screen.getByRole("button");
       expect(submitBtn).toBeInTheDocument();
    });
})