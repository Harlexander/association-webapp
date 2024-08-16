import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import Admin from '@/Layouts/AdminLayout';
import DashboardTitle from '../../components/Header/DashboardTitle';
import { SolidButton } from '../../components/Button/Button';
import { toast } from 'react-toastify';

const Settings = ({ data }) => {
    const { data: formData, setData, post, processing, errors } = useForm({
        title: data.title || '',
        subtext: data.subtext || '',
        footerText: data.footerText || '',
        about_us: data.about_us || '',
        facebook: data.facebook || '',
        instagram: data.instagram || '',
        twitter: data.twitter || '',
        linkedin: data.linkedin || '',
        mobile1: data.mobile1 || '',
        mobile2: data.mobile2 || '',
        email1: data.email1 || '',
        email2: data.email2 || '',
        home_image: null
    });

    const handleChange = (e) => {
        const { name, type, files, value } = e.target;
        if (type === 'file') {
            setData(name, files[0]); // Handle file input
        } else {
            setData(name, value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSubmit = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSubmit.append(key, formData[key]);
        });

        post(route('settings.update'), {
            data: formDataToSubmit,
            onSuccess: () => {
               toast('Settings updated successfully');
            },
            onError: (errors) => {
                toast('Error updating settings:', errors);
            }
        });
    };

    
    return (
        <Admin>
            <main className='p-5 sm:p-10 space-y-10'>
                <DashboardTitle
                    title={"Settings"}
                    subtitle={"Welcome Administrator,"}
                />
                <form onSubmit={handleSubmit} className='space-y-5'>
                    <Input
                        name="title"
                        label="Tagline"
                        value={formData.title}
                        handleChange={handleChange}
                    />
                    <Input
                        name="subtext"
                        label="Sub Text"
                        value={formData.subtext}
                        handleChange={handleChange}
                    />
                    <Input
                        name="footerText"
                        label="Footer Text"
                        value={formData.footerText}
                        handleChange={handleChange}
                    />
                    <Input
                        name="about_us"
                        label="About Us"
                        value={formData.about_us}
                        handleChange={handleChange}
                        select
                    />
                    <Input
                        name="facebook"
                        label="Facebook"
                        value={formData.facebook}
                        handleChange={handleChange}
                    />
                    <Input
                        name="instagram"
                        label="Instagram"
                        value={formData.instagram}
                        handleChange={handleChange}
                    />
                    <Input
                        name="twitter"
                        label="Twitter"
                        value={formData.twitter}
                        handleChange={handleChange}
                    />
                    <Input
                        name="linkedin"
                        label="LinkedIn"
                        value={formData.linkedin}
                        handleChange={handleChange}
                    />
                    <Input
                        name="mobile1"
                        label="Mobile 1"
                        value={formData.mobile1}
                        handleChange={handleChange}
                    />
                    <Input
                        name="mobile2"
                        label="Mobile 2"
                        value={formData.mobile2}
                        handleChange={handleChange}
                    />
                    <Input
                        name="email1"
                        label="Email 1"
                        value={formData.email1}
                        handleChange={handleChange}
                    />
                    <Input
                        name="email2"
                        label="Email 2"
                        value={formData.email2}
                        handleChange={handleChange}
                    />
                    <Input
                        name="home_image"
                        label="Home Image URL"
                        value={formData.home_image}
                        handleChange={handleChange}
                        type={"file"}
                    />
                    <button className={`bg-[#800000]  px-8 py-1 text-white`}>
                       Update 
                    </button>
                </form>
            </main>
        </Admin>
    );
};

const Input = ({ handleChange, name, value, label, select, type }) => {
    return (
        <div className='font-figtree space-y-2'>
            <label htmlFor={name} className='font-semibold'>{label}</label>
            {type === 'file' ? (
                <input
                    type="file"
                    id={name}
                    name={name}
                    onChange={handleChange}
                    className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
                />
            ) : select ? (
                <textarea
                    id={name}
                    name={name}
                    required
                    value={value}
                    onChange={handleChange}
                    rows={10}
                    className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
                    placeholder={label}
                ></textarea>
            ) : (
                <input
                    type="text"
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
                    placeholder={label}
                />
            )}
        </div>
    );
};


export default Settings;
