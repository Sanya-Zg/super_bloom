import image from '../assets/images/Conversation_img.jpg';
import Button from './Button';

export default function Conversation() {
  return (
    <section className='flex flex-col lg:gap-10 md:gap-5 md:flex-row md:justify-between px-6 md:px-10 py-[70px] lg:px-[145px] text-[var(--green-dark)] bg-[var(--cream)]'>
        <div className='max-w-[440px] min-w-[330px] my-auto mx-auto '>
            <img src={image} className='w-full' alt="Image conversation" />
        </div>
        <div className='max-w-[615px] md:mt-10 mx-auto'>
            <h2 className='xl:text-[50px] md:text-4xl text-2xl text-center md:text-left mt-10 md:mt-0 lg:leading-[55px] leading-10'>Your mind is unique. Your mental health care should be too.</h2>
            <p className='mt-[29px] mb-[38px] leading-[22.5px]'>Superbloom provides one-on-one therapy sessions geared toward your specific needs, letting you select your package based on number of sessions and budget. We are community-oriented and offer mind-body resources with articles, forums and workshops to support your journey of finding your frequency. Whether you suffer from anxiety, depression, a chronic condition or are seeking to elevate your emotional wellness, you’ll find a way to shine with Superbloom.</p>
            <Button to='/events' text='14px' bg='var(--green-dark)' border='var(--green-dark)'>Join the conversation</Button>
        </div>
    </section>
  )
}
