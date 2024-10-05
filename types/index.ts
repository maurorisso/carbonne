export type HeaderLink = {
  title: string;
  href: string;
};

export type CreateItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
};

export type Question = {
  id: string;
  question: string;
  type: "input" | "textarea";
};
