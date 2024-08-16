import React from 'react';
import { SolidButton } from '../Button/Button';
import { Fade } from 'react-awesome-reveal'
const QuestionSection = () => {
    return (
        <div className="bg-white py-32 text-center space-y-10">
            <Fade>
            <p className='font-primary text-4xl text-center'>Any Questions?</p>
        
            <p className='font-montserrat w-1/2 mx-auto'>If you have any questions or suggestions kindly click the button bellow and contact the administrator</p>
            <SolidButton
            href='/contact'
            title={'Contact Us'}
            additionalClass="px-8 py-3 shadow-lg text-black text-2xl font-primary"/>                
            </Fade>

        </div>
    )
}

export default QuestionSection;