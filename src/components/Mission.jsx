import Button from './Button';
import main_image from '../assets/images/Mission_img.jpg';
import inf_img from '../assets/images/white_infinity.svg';

export default function Mission() {
  return (
    <section className='relative flex flex-col items-center lg:gap-10 md:gap-5 md:flex-row md:justify-between px-6 md:px-10 md:py-[70px] pb-[70px] lg:px-[145px] text-white bg-[var(--blue)]'>
        <div className='max-w-[550px]'>
            <p className='text-[11px] leading-[13px] tracking-[4.3px] uppercase mt-[70px] mb-[33px] opacity-[57%]'>Mission</p>
            <p className='lg:text-[34px] md:text-[26px] text-[22px] tracking-[0.3px] md:leading-[36px] lg:leading-[51px] md:mb-[41px] mb-[20px]'>Our mental health resources are developed to encourage and bolster emotional wellness. Superbloom is here to support you feeling balanced in mind and body.</p>
            <Button to='/events'>Get started</Button>
        </div>
        <div className='max-w-[517px] min-w-[330px] md:my-auto mt-10 '>
            <img src={main_image} className='w-full' alt="Main image" />
        </div>
        <div className='absolute top-[60px] md:top-[250px] lg:top-[330px] right-[20px] lg:right-[41px]'>
            <img src={inf_img} alt="Icon infinity" />
        </div>
    </section>
  )
}
