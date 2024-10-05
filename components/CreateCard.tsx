import React from "react";
import { PlusCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { type CreateItem } from "@/types/index";

import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  item: CreateItem;
};

const CreateCard = ({ item }: Props) => {
  const { title, description, icon, href } = item;
  return (
    <Card className="bg-card hover:bg-accent transition-colors duration-200">
      <Link href={href}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {icon}
            <span>{title}</span>
          </CardTitle>
          <CardDescription className="h-6">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">
            <PlusCircle className="mr-2 h-4 w-4" /> Create
          </Button>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CreateCard;
