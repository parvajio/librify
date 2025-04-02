"use client";

import { searchSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
  } from "@/components/ui/form";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";

const SearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("search") || "";

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: currentSearch,
    },
  });

  const onSubmit = (values: z.infer<typeof searchSchema>) => {
    const params = new URLSearchParams(searchParams);
    params.set("search", values.search);
    params.set("page", "1");
    router.push(`/library?${params.toString()}`);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-2xl">
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex">
                  <Input 
                    placeholder="Search books by title, author, or genre..." 
                    {...field} 
                    className="form-input rounded-r-none"
                  />
                  <Button type="submit" className="min-h-14 rounded-l-none">
                    <SearchIcon></SearchIcon>
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchForm;
