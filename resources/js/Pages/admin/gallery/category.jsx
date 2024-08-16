import React, { useState } from 'react'
import DashboardTitle from '../../../components/Header/DashboardTitle';
import Admin from '@/Layouts/AdminLayout';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from "@/Components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog"
import { router, useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';

const Index = ({ images, category: { name, id }}) => {
    const removeImage = (id) => {
        router.delete(route("delete.image"), { data : { id }})
    }

  return (
    <Admin>
      <main className='p-5 sm:p-10 space-y-8'>
        <DashboardTitle
          title={name}
          subtitle={"Manage Images"}
          />
        <NewImage id={id}/>

        <div className='grid sm:grid-cols-3'>
            {
                images.map(({image_path, caption, id}) => (
                    <Card key={id}>
                    <CardHeader>
                      <CardTitle><img src={image_path} alt="img" className='h-52 object-contain'/></CardTitle>
                      {/* <CardDescription>{caption}</CardDescription> */}
                      <CardFooter><Button onClick={() => removeImage(id)} variant={"destructive"}>Delete</Button></CardFooter>
                    </CardHeader>
                  </Card>
                ))
            }
        </div>

      </main>
    </Admin>
  )
}

export default Index;

export function NewImage({id}) {
    const { data, setData, post, reset } = useForm({
      image: null,
      id: id
    });
  
    const [preview, setPreview] = useState(null);
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setPreview(URL.createObjectURL(file));
        setData('image', file);
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Check if an image is selected
      if (!data.image) {
        toast.error("Please select an image.");
        return;
      }
  
      // Submit the form
      post(route("new.image"), {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onSuccess: () => {
          toast.success("Image uploaded successfully!");
          reset(); // Reset the form after success
          setPreview(null); // Clear preview
        },
        onError: (errors) => {
          console.error('Error:', errors);
          toast.error("An error occurred while uploading the image.");
        },
      });
    };
  
    return (
      <>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add Image</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Upload Image</DialogTitle>
              <DialogDescription>
                Choose an image file to upload. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-4 py-4">
              {preview && (
                <div className="flex flex-wrap gap-1">
                  <img src={preview} alt="Selected preview" className="w-full object-cover" />
                </div>
              )}
              <div className="relative">
                <input
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  className="h-full w-full opacity-0 absolute"
                  accept="image/*" // Optional: restrict file types
                />
                <button
                  type="button"
                  className="bg-pry py-2 font-figtree px-6 rounded-xl text-white"
                  onClick={() => document.querySelector('input[type="file"]').click()} // Trigger file input click
                >
                  Select Image
                </button>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </>
    );
  }
