"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useQuestionnaire } from "@/context/QuestionnaireProvider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const subCategories = {
  academics: ["Student", "Professor", "Management"],
  personal: ["Student"],
};

export default function SubCategoryPage() {
  const router = useRouter();
  const params = useParams();
  const { setCategory, setSubCategory, reset } = useQuestionnaire();
  const category = Array.isArray(params.category) ? params.category[0] : params.category;

  const validCategories = Object.keys(subCategories);
  if (!validCategories.includes(category)) {
    if (typeof window !== "undefined") {
      router.push("/category");
    }
    return null;
  }
  
  useEffect(() => {
    reset();
    setCategory(category as "academics" | "personal");
  }, [category, setCategory, reset]);


  const handleSelect = (sub: string) => {
    const subCategoryLower = sub.toLowerCase();
    setSubCategory(subCategoryLower as "student" | "professor" | "management");
    router.push(`/q/${category}/${subCategoryLower}/0`);
  };

  const options = subCategories[category as keyof typeof subCategories];
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-transparent">
      <Link href="/category" className="absolute top-8 left-8 flex items-center gap-2 text-primary">
         <ArrowLeft className="h-4 w-4" />
        <span>Back</span>
      </Link>
      <Card className="w-full max-w-md p-8 shadow-lg bg-card/50 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold font-headline">
            {categoryTitle}: Select Your Role
          </h1>
          <p className="text-muted-foreground">This helps us tailor the questions for you.</p>
          <div className="flex flex-col gap-4 mt-8 w-full">
            {options.map((sub) => (
              <Button
                key={sub}
                onClick={() => handleSelect(sub)}
                variant="outline"
                size="lg"
                className="justify-center py-8 text-lg"
              >
                {sub}
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </main>
  );
}
