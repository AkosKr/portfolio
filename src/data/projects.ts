export type TechType = {
  title: string,
  iconPath: string,
}

export type ProjectType = {
  typeOfProject: string,
  nameOfProject: string,
  description: string,
  devPart: string,
  startDate: string,
  timeToFinish: string,
  githubLink: string,
  liveDemoLink: string,
  features: string[],
  backgroundImagePath: string,
  otherImagePath: string[],
  tech: TechType[], 
}

export const projects: ProjectType[] = [
  {
    typeOfProject: "Chatbot",
    nameOfProject: "B.o.B.",
    description:
      "B.o.B. is a smart chatbot that helps you understand your documents. Simply upload a file, and B.o.B. will read it and answer any questions you have about its content — making it easy to find the information you need, fast and effortlessly",
    devPart: "Frontend",
    startDate: "July 2024",
    timeToFinish: "6 months",
    githubLink: "",
    liveDemoLink: "",
    features: [
      "You can upload a file to the chatbot",
      "The chatbot will read and understand the file",
      "You can ask questions about what's inside the file",
      "It gives you clear answers based on the file's content",
      "Works like a smart assistant that helps you quickly find information from documents",
    ],
    backgroundImagePath: "/ChatbotProject.png",
    otherImagePath: [
      "",
    ],
    tech: [
      {
        title: "HTML",
        iconPath: "/icon/html.png",
      },
      {
        title: "React",
        iconPath: "/icon/react.png",
      },
      {
        title: "Typescript",
        iconPath: "/icon/typescript.png",
      },
    ],
  },
];
