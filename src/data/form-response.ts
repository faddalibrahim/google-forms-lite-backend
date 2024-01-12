const formResponse = {
  id: "Form 1 ID",
  sections: [
    {
      id: "Section 1 ID",
      title: "Section 1",
      subtitle: "Section 1 Subtitle",
      questions: [
        {
          id: "Question 1 ID",
          question: "What is your level of education",
          type: "radio",
          options: [
            {
              id: "Option 1 ID",
              option: "High School",
            },
          ],
          answer: "Option 1 ID",
        },
        {
          id: "Question 2 ID",
          question: "What is name",
          type: "text",
          answer: "Hello world",
        },
        {
          id: "Question 3 ID",
          question: "Write a Bio",
          type: "textarea",
          answer: "This is a bio",
        },
        {
          id: "Question 3 ID",
          question: "Date of birth",
          type: "date",
          answer: "21/05/31",
        },
      ],
    },
  ],
};

export default formResponse;
