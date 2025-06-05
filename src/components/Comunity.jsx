import founder from '../assets/images/Founder_img.jpg';
import comunityImg from '../assets/images/Comunity_img.jpg';
import greenInf from '../assets/images/green_infinity.svg';
import blogImg from '../assets/images/Blog_img.jpg';
import healthImg from '../assets/images/Health_img.jpg';
import paragraphIcon from '../assets/images/icon_paragraph.svg';

export default function Comunity() {
  return (
    <div className="lg:px-[145px] md:px-10 px-5 py-[82px] text-[var(--green-dark)] ">
        <section className="flex flex-col items-center mb-[50px]">
            <p className='max-w-[900px] lg:text-[50px] md:text-4xl text-2xl lg:leading-[65px] md:leading-[45px] text-center'>“We believe in the power of mind-body solutions for emotional wellbeing. Our personalized, clinically-backed approach is built to empower our members.”</p>
            <img src={founder} className='w-[120px] mt-10 md:mt-[83px] mb-5' alt="Founder image" />
            <p className='text-[13px]'>Erin Berman</p>
            <p className='text-[12px]'>Founder</p>
        </section>

        <section className='flex flex-col items-center md:flex-row gap-10 '>
            <div className='max-w-[566px] min-w-[330px]'>
                <img src={comunityImg} className='w-full' alt="Comunity image" />
            </div>
            <div className='max-w-[500px] md:m-10 my-auto'>
                <h2 className='text-2xl md:text-[36px] mb-6 leading-10 md:leading-[39px]'>Discover a Supportive Community</h2>
                <p>We’ve built a private online community where you can talk about your conditions, and discover relevant health information through our forums and resources. Together, we’ll thrive.</p>
            </div>
        </section>
        <div className='mt-[50px]'>
            <img src={greenInf} className='mx-auto' alt="Icon green infinity" />
        </div>

        <section className='flex flex-col gap-10 items-center md:flex-row justify-between mt-[72px]'>
            <div className='max-w-[600px] md:max-w-[495px]'>
                <h2 className='text-2xl md:text-4xl mb-6'>Mental Health on Your Terms</h2>
                <p>We’ve all got our problems. Superbloom is the best place to select an emotional wellness plan that works for your time and budget from our offerings of group workshops, Super Circle cohorts, and 1-1 therapy all guided by compassionate and experienced therapists.</p>
            </div>
            <div className='max-w-[595px] min-w-[330px]'>
                <img src={blogImg} className='w-full' alt="Blog img" />
            </div>
        </section>
        <div className='mt-[50px]'>
            <img src={greenInf} className='mx-auto' alt="Icon green infinity" />
        </div>

        <section className='flex flex-col gap-10 items-center md:flex-row justify-between mt-[72px]'>
            <div className='max-w-[541px] min-w-[330px]'>
                <img src={healthImg} className='w-full' alt="Health image" />
            </div>
            <div className='max-w-[490px]'>
                <h2 className='text-2xl md:text-4xl mb-6'>Educational Resources for Mind-Body Support</h2>
                <p>Our content is created by wellness experts and community members who have gone through physical and mental health challenges of their own. Explore our Journal and join our workshops for guidance on movement, nutrition and mindfulness. Because emotional wellbeing is so much more than mental!</p>
            </div>
        </section>
        <div className='mt-[60px]'>
            <img src={paragraphIcon} className='mx-auto' alt="Icon green infinity" />
        </div>
    </div>
  )
}
