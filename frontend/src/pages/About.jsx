import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Glow-Threads, we believe fashion is more than just clothing—it’s a lifestyle. Our mission is to bring you the latest trends, premium quality, and unique styles that let you express who you truly are. From everyday essentials to statement pieces, we’re here to keep your wardrobe fresh and fabulous.</p>
          <p>Founded with a passion for fashion, Glow-Threads is your one-stop destination for modern, stylish, and affordable clothing. We combine quality craftsmanship with timeless designs to ensure you always look and feel your best. Our vision is to make fashion accessible while keeping individuality at the heart of every outfit.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Glow-Threads is to redefine fashion as a blend of individuality and confidence — curating timeless styles and trend-forward pieces that inspire self-expression, while ensuring sustainability, quality, and an effortless shopping journey for every customer.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className=' text-gray-600'>Every piece we offer goes through a careful selection process, ensuring premium fabrics, precise craftsmanship, and long-lasting wear. Our commitment to quality means you don’t just buy fashion—you invest in style that stays with you.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className=' text-gray-600'>We make fashion shopping effortless with an easy-to-navigate website, secure payment options, and swift doorstep delivery—bringing style to you with just a few clicks.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className=' text-gray-600'>Our customers are at the heart of everything we do. From personalized assistance to quick resolutions, our dedicated support team ensures a smooth, caring, and satisfying shopping experience every step of the way.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
