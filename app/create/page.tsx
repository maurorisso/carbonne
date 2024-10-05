import Section from "@/components/Section";
import React from "react";
import CreateCard from "@/components/CreateCard";
import { CreateItem } from "@/types";
import { FileText, Users, Briefcase } from "lucide-react";

const CreatePage = () => {
  const items: CreateItem[] = [
    {
      title: "New Form",
      description: "Create a custom form for your clients",
      icon: <FileText className="h-6 w-6" strokeWidth={1} />,
      href: "/create/form",
    },
    {
      title: "New Client",
      description: "Add a new client to your portfolio",
      icon: <Users className="h-6 w-6" strokeWidth={1} />,
      href: "/create/client",
    },
    {
      title: "New Project",
      description: "Start a new consulting project",
      icon: <Briefcase className="h-6 w-6" strokeWidth={1} />,
      href: "/create/project",
    },
  ];

  return (
    <Section hasBorder={false}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Create New</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Start a new project or form to gather insights from your clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <CreateCard key={index} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CreatePage;
