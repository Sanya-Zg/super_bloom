import img1 from '../assets/images/review1.jpg';
import img2 from '../assets/images/review2.jpg';
import img3 from '../assets/images/review3.jpg';

export default function Testimonials() {
  return (
     <section className='bg-[var(--cream)] py-[60px] px-4 sm:px-8 md:px-[40px] lg:px-[100px]'>
      <h2 className='text-2xl md:text-[50px] text-center mb-[40px]'>Testimonials</h2>

      <div className='flex flex-col md:flex-row gap-[30px] items-center'>
        <div className='max-w-[530px] md:w-1/3'>
          <img src={img1} className='w-full h-auto object-cover shadow-md' alt="Review 1" />
        </div>
        <div className='max-w-[430px] md:w-1/3'>
          <img src={img2} className='w-full h-auto object-cover shadow-md' alt="Review 2" />
        </div>
        <div className='max-w-[430px] md:w-1/3'>
          <img src={img3} className='w-full h-auto object-cover shadow-md' alt="Review 3" />
        </div>
      </div>
    </section>
  )
}
