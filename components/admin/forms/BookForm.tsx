"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { bookSchema } from "@/lib/validation";
import { Textarea } from "@/components/ui/textarea";
import FileUpload from "@/components/FileUpload";
import ColorPicker from "@/components/ColorPicker";
import { Button } from "@/components/ui/button";
import { createBook } from "@/lib/admin/actions/book";
import { toast } from "@/hooks/use-toast";

interface props extends Partial<Book> {
  type?: "create" | "update";
}

const BookForm = ({ type, ...book }: props) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
      description: "",
      author: "",
      genre: "",
      rating: 1,
      totalCopies: 1,
      coverUrl: "",
      coverColor: "",
      videoUrl: "",
      summary: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof bookSchema>) => {
    const result = await createBook(values);

    if(result.success){
      toast({
        title: "Success",
        description: "Book created Successfully"
      })

      router.push(`/admin/books/${result.data.id}`);
    }else{
      toast({
        title: "Error",
        description : result.message,
        variant: 'destructive'
      })
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* title  */}
        <FormField
          control={form.control}
          name={"title"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">Book Title</FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder="Book title"
                  className="book-form_input"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* author  */}
        <FormField
          control={form.control}
          name={"author"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">Author</FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder="Book author"
                  className="book-form_input"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* genre  */}
        <FormField
          control={form.control}
          name={"genre"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">Genre</FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder="Book genre"
                  className="book-form_input"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* rating  */}
        <FormField
          control={form.control}
          name={"rating"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">Rating</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  max={5}
                  placeholder="Book rating"
                  className="book-form_input"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* total copies  */}
        <FormField
          control={form.control}
          name={"totalCopies"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">Total Copies</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  max={10000}
                  placeholder="Book Total Copies"
                  className="book-form_input"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* cover url  */}
        <FormField
          control={form.control}
          name={"coverUrl"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">Book Image</FormLabel>
              <FormControl>
                {/* File Uploade  */}
                <FileUpload
                  type="image"
                  accept="image/*"
                  placeholder="upload a book cover"
                  variant="dark"
                  folder="books/covers"
                  onFileChange={field.onChange}
                ></FileUpload>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* cover color  */}
        <FormField
          control={form.control}
          name={"coverColor"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">Cover Color</FormLabel>
              <FormControl>
                {/* color picker */}
                <ColorPicker
                  onPickerChange={field.onChange}
                  value={field.value}
                ></ColorPicker>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* description  */}
        <FormField
          control={form.control}
          name={"description"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">Descriptio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Book description"
                  {...field}
                  rows={10}
                  className="book-form_input"
                ></Textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* video url  */}
        <FormField
          control={form.control}
          name={"videoUrl"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">Book Trailer</FormLabel>
              <FormControl>
                {/* File Uploade  */}
                <FileUpload
                  type="video"
                  accept="video/*"
                  placeholder="upload a book trailer"
                  variant="dark"
                  folder="books/trailer"
                  onFileChange={field.onChange}
                  value={field.value}
                ></FileUpload>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* summary  */}

        <FormField
          control={form.control}
          name={"summary"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">Book Summary</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Book summary"
                  {...field}
                  rows={5}
                  className="book-form_input"
                ></Textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="book-form_btn text-white">
          Add Book to Library
        </Button>
      </form>
    </Form>
  );
};

export default BookForm;
