import React, { useState } from 'react';
import NewsCard from '../../components/Cards/NewsCard';
import DashboardTitle from '../../components/Header/DashboardTitle';
import MyModal from '../../components/Modal/Modal';
import { PhotoIcon } from '@heroicons/react/24/solid';
import BadgeSuccess from '../../components/Badge/BadgeSuccess';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import { ScaleLoader } from 'react-spinners';

const Index = ({ news }) => {
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
      onSuccess: () => reset(), // Reset form on success
      onError: () => {
        // Handle error if needed
      }
    });
  };

  return (
    <Authenticated>
      {/* <MyModal
        isOpen={isOpen}
        title={"Post News"}
        body={
          <NewsForm
            handleChange={handleChange}
            formValues={data}
            handleImageChange={handleImageChange}
            errors={errors}
          />
        }
        button={
          <NewsButton
            handleSubmit={handleSubmit}
            isLoading={processing}
          />
        }
        closeModal={closeModal}
      /> */}

      <main className='md:p-10 p-5 space-y-8'>
        <DashboardTitle
          title={"News and Updates"}
          subtitle={"Activities and News relating to the association."}
          onClick={closeModal}
        />

        <section className='grid sm:grid-cols-3 gap-4'>
          {news.map(({ title, content, created_at, image, member: { firstName, lastName }, index }) => (
            <NewsCard
              key={index}
              title={title}
              content={content}
              image={image}
              name={firstName + ' ' + lastName}
              created_at={created_at}
            />
          ))}
          {news.length < 1 && (
            <div className='bg-white h-[80vh] w-full col-span-3 flex items-center justify-center rounded-xl'>
              <div className='space-y-2'>
                <p className='font-figtree text-center text-2xl font-bold'>No News Update</p>
                <p className='font-figtree mx-auto text-center text-sm sm:w-2/3'>
                  Post news update for members on ongoing situations of the association, school, country and other related topics to the association
                </p>
                <button
                  onClick={closeModal}
                  className='flex mx-auto items-center whitespace-nowrap text-sm sm:text-md gap-1.5 sm:gap-3 font-manrope bg-yellow-400 px-4 sm:px-12 py-2 sm:py-2 rounded shadow-xl text-white'>
                  Post News
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </Authenticated>
  );
};


export const NewsForm = ({ handleChange, formValues, handleImageChange, errors }) => {
  return (
    <div className='space-y-5 py-5'>
      {errors?.title && <InputError message={errors.title} className="mt-2" />}
      {errors?.content && <InputError message={errors.content} className="mt-2" />}
      {errors?.image && <InputError message={errors.image} className="mt-2" />}
      
      <div className='font-figtree'>
        <input
          type="text"
          id="title"
          name="title"
          required
          value={formValues.title}
          onChange={handleChange}
          className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
          placeholder='Title'
        />
      </div>
      <div>
        <textarea
          id="content"
          name="content"
          required
          value={formValues.content}
          onChange={handleChange}
          className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
          placeholder='Content'
          rows={5}
        ></textarea>
      </div>

      <div className='space-y-3 text-center border items-center border-pry rounded-xl flex flex-col justify-center p-5'>
        <PhotoIcon className='h-10 text-pry' />
        <div>
          <p>Upload Image</p>
        </div>
        {formValues.image && (
          <div className='flex flex-wrap gap-1'>
            <img src={URL.createObjectURL(formValues.image)} alt="img" className='w-full object-cover' />
          </div>
        )}
        <div className='relative'>
          <input
            required
            type="file"
            name="image"
            onChange={handleImageChange}
            className='h-full w-full opacity-0 absolute'
          />
          <button className='bg-pry py-2 font-figtree px-6 rounded-xl text-white'>Select Image</button>
        </div>
      </div>
    </div>
  );
};

export const NewsButton = ({handleSubmit, isLoading}) => (
  <button
      onClick={handleSubmit}
      type="button"
      className="inline-flex text-white font-figtree justify-center rounded-md border border-transparent bg-pry px-4 py-2 text-sm font-medium hover:bg-yellow-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pry focus-visible:ring-offset-2"
    >
  {
    isLoading ? (<ScaleLoader className='px-8' color='white' height={16}/>) : ("Upload News")
  }
</button>
)

export default Index;


