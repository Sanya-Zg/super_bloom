import hero from '../assets/images/Hero_img.png';
import Button from './Button';

export default function Hero() {
  return (
    <section className='flex flex-col md:flex-row justify-center md:justify-between gap-10 px-6 lg:px-[145px] md:px-10 pt-20 pb-[70px] bg-[var(--green-light)]'>
        <div className=' md:max-w-[546px] my-auto'>
           <img src={hero} className='max-w-full mx-auto' alt="Banner" /> 
        </div>
        
        <div className='max-w-[520px] text-white'>
            <h1 className='md:mt-[50px] lg:text-[61px] leading-[53px] text-5xl'>Greatness is<br /> within us.</h1>
            <p className='text-[14px] mt-[31px] mb-[19px] '>Superbloom provides a holistic mind-body approach to mental health. Together, we’ll thrive.</p>
            <ul className='flex flex-col gap-[15px] ml-[25px] mb-[33px] text-[14px] max-[1155px]:leading-5 min-[1155px]:leading-[33px]'>
                <li>One-on-one therapy with Superbloom vetted therapists.</li>
                <li>Access therapist-guided group workshops and monthly cohorts.</li>
                <li>Ask questions and engage in our secure, supportive forums.</li>
                <li>Discover the biopsychosocial approach to mind-body wellbeing.</li>
            </ul>
            <Button to='/events' color='var(--green-dark)' bg='white' border='var(--white)'>Learn more</Button>
        </div>
        
    </section>
  )
}
