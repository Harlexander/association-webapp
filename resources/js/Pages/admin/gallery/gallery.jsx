import React from 'react'
import DashboardTitle from '../../../components/Header/DashboardTitle';
import Admin from '@/Layouts/AdminLayout';
import { Card, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { Link, useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';

const Index = ({ categories }) => {
  const { post, setData, data, error } = useForm({
    category : ""
  });

  console.log(categories)

  const addCategory = (e) => {
    e.preventDefault();

    post(route("new.category"), {
      onSuccess: () => toast("New category added!")
    })
  };

  return (
    <Admin>
      <main className='p-5 sm:p-10 space-y-8'>
        <DashboardTitle
          title={"Gallery"}
          subtitle={"Manage Images"}
          />

        <form onSubmit={addCategory} className='flex gap-2'>
          <TextInput value={data.category} onChange={(e) => setData("category", e.target.value)} className="flex-1 rounded" placeHolder="New Category"/>
          <Button className="rounded">Create New Category</Button>
        </form>

        <div className='grid sm:grid-cols-3 gap-3'>
          {
            categories.map(({name, id}) => (
              <Link href={`gallery/${id}`}>
                <Card key={id} className="h-full">
                  <CardHeader>
                    <CardTitle className="capitalize">{name}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))
          }
        </div>

      </main>
    </Admin>
  )
}

export default Index;