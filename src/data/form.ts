const form = {
  name: "Example Form 1",
  description: "Hey this is a form to collect blah blah",
  sections: [
    {
      id: "Section 1 ID",
      title: "Section 1",
      subtitle: "Section 1 Subtitle",
      prompts: [
        {
          id: "Question 1 ID",
          prompt: "What is your level of education",
          type: "radio",
          required: true,
          options: [
            {
              id: "Option 1 ID",
              option: "High School",
            },
          ],
        },
        {
          id: "Question 2 ID",
          prompt: "What is name",
          type: "text",
          required: true,
        },
        {
          id: "Question 3 ID",
          prompt: "Write a Bio",
          type: "textarea",
          required: true,
        },
        {
          id: "Question 3 ID",
          prompt: "Date of birth",
          type: "date",
          required: true,
        },
      ],
    },
  ],
};

export default form;
