import { Github } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function AboutMe() {
  return (
    <div className='md:shadow-md md:mt-10 flex md:flex-row md:spase-x-3 md:bg-white mx-auto  self-start   pt-8 pb-6 rounded-md'>

      <div >
        <h1 className='text-gray-800 pl-5  text-lg'>A Short Summery Of Who I Am</h1>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col items-center'>
            <p className='text-gray-700 mt-4 text-justify max-w-prose indent-5 pt-5 px-5 text-sm'>
              My name is Somayyeh mousavi,
              A dynamic web developer with a proven track record at Zee Pay. specializing in
              frontend technologies like React.js and Next.js and backed like php ,laravel ,nodejs ..
              Enhanced user experiences through responsive design and optimized performance.
              Adept at crafting custom web applications .
              Demonstrating strong problem-solving skills and a commitment to delivering tailored solutions.
            </p>
            <p className='text-gray-700  p-5 text-justify max-w-prose indent-5 text-sm'>
              As I have added in experience section, I have worked as a frontend react developer at Zee pay for 1 year, where I was responsible for developing and maintaining the frontend of the company's web applications.
              but as a refugee who had been moving around and was limited in many ways , I mostly was practicing and self-educating myself in web development, I have worked on many projects and have learned a lot about web development, I am now looking for a job where I can use my skills and knowledge to help the company grow.
              I am a quick learner and a team player, and I am always looking for new challenges and opportunities to grow.
              I am passionate about web development and I am always looking for new ways to improve my skills and knowledge.
              I am excited to bring my expertise in web development to a new role and contribute to the success of a forward-thinking company.
              I believe there is no limit in the world for someone who is passionate about what they do, and I am determined to make a positive impact in the field of web development.
              My most salient feature is that i am passionate about learning and expanding my knowledge and I believe in web development field there is no point where you can say I know everything, there is always something new to learn and discover.
              I cant finish a day without learning something new, thats how I know I have spent my day well.

            </p>
            <p className='text-gray-700  p-5 text-justify max-w-prose indent-5 text-sm'>
              You can check some of my projects in my github profile , however some projects are not completed or outdated ,due to my conditions as a refugee
              sometimes I didnt have the chance to complete a project . also in some projects I have used some technologies that was on free trial period ,and now that the trial has expierd some feature might not work , but checking the codes would show my skills in coding.
            </p>

              <div className='text-gray-500  flex div-5 text-justify space-x-3 max-w-prose text-sm'>
                <div>you can check some of my codes in my github </div>
                <a href='https://github.com/somy-bit' target='_blank' className='hover:no-underline hover:opacity-80 flex space-x-2 items-center'><span>My Github</span><Github size={20} color='blue' /></a>
              </div>
          </div>

          <div className='hidden md:flex'>
            <Image
              src='/images/fdev.jpg'
              width={120}
              height={120}
              className='h-96 w-96'
              alt='image'
            />
          </div>

        </div>
      </div>

    </div>
  )
}

export default AboutMe