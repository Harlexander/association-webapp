import React, { useState } from 'react'
import Admin from '@/Layouts/AdminLayout';
import NewsCard from '../../components/Cards/NewsCard'
import DashboardTitle from '../../components/Header/DashboardTitle'
import MyModal from '../../components/Modal/Modal'
import { NewsButton, NewsForm } from '../dashboard/news'
import { useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';

const Index = ({ data:news }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(!isOpen);

  const { data, setData, post, processing, reset, errors } = useForm({
    title: '',
    content: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };

  const handleImageChange = (e) => {
    setData('image', e.target.files[0]);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    if (data.image) {
      formData.append('image', data.image);
    }

    post(route('news.create'), {
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onSuccess: () => {
        reset();
        closeModal();
        toast("News update added!");
      },
      onError: () => {
        // Handle error if needed
      }
    });
  };

  return (
    <Admin>
            <MyModal
              isOpen={isOpen}
              title={"Post News"}
              body={<NewsForm
                handleChange={handleChange}
                formValues={data}
                handleImageChange={handleImageChange}
                errors={errors}
              />}
              button={<NewsButton 
                handleSubmit={handleSubmit}
                isLoading={processing}
              />}
              closeModal={closeModal}
      />
        <main className='p-5 sm:p-10 space-y-8'>
            
            <DashboardTitle
            title={"News and Updates"}
            subtitle={"Activities and News relating to the association."}
            value={"Upload News"}
            onClick={closeModal}/>

            <section className='grid sm:grid-cols-3 gap-6 py-4'>
              {
                  news.map(({id, title, content, created_at, image, member : {firstName, lastName} }, index) => (
                    <NewsCard
                    key={index}
                    title={title}
                    content={content}
                    image={image}
                    name={firstName+ ' ' +lastName}
                    admin={true}
                    created_at={created_at}
                    deleteNews={() => deleteNews(id)}/>
                  ))
              }
          </section>
        </main>
    </Admin>
  )
}

export default Index