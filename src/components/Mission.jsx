import Button from './Button';
import main_image from '../assets/images/Mission_img.jpg';
import inf_img from '../assets/images/white_infinity.svg';

export default function Mission() {
  return (
    <section className='relative flex flex-col md:flex-row md:justify-between md:items-center md:py-[70px] lg:px-[145px] text-white bg-[var(--blue)]'>
        <div>
            <p className='text-[11px] leading-[13px] tracking-[4.3px] uppercase'>Mission</p>
            <p>Our mental health resources are developed to encourage and bolster emotional wellness. Superbloom is here to support you feeling balanced in mind and body.</p>
            <Button>Get started</Button>
        </div>
        <div className='max-w-[517px]'>
            <img src={main_image} alt="Main image" />
        </div>
        <div className='absolute'>
            <img src={inf_img} alt="Icon infinity" />
        </div>
    </section>
  )
}
