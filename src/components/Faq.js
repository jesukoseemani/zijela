import React from 'react';
import { Link } from 'react-router-dom';
import CardFaq from './CardFaq';

function Faq() {
	const data = [
		{
			question: 'Can I join one of the programs remotely?',
			answer:
				'Yes, all of our programs are available in Online format and can take place 100% online with the supervision of our instructors through several collaborative tools.',
		},
		{
			question: 'How long does the course take?',
			answer:
				'It depends on the chosen program. Our courses can last from 4 to 16 weeks.',
		},
		{
			question: 'Where does the course take place?',
			answer:
				'Our trainings are held in our hackerspaces You can find all our locations here',
		},
		{
			question: 'Who are your instructors?',
			answer:
				'Our instructors are chosen on the basis of their technical and educational skills. They also are trained on our programs and our methodology. They monitor and validate the progress of each student, assist and supervise them throughout the course.',
		},
		{
			question: 'Is the program certified? Will I have a certificate?',
			answer:
				'All of our programs are certified. We are state approved and our certificate is recognized nationwide and by our recruiting partners. ',
		},
		{
			question: 'When can I start?',
			answer: 'We launch a new session every month.',
		},
	];

	return (
		<>
			<div className='max-w-[1440px] m-auto'>
				<p className="font-['Poppins'] font-[500] text-[12px] text-[#22C55E] py-0.5 px-2 bg-[#DCFCE7] rounded-[36px] w-fit">
					FAQ
				</p>

				<h2 className="font-['Poppins'] font-[700] text-[48px] text-gray-900 tracking-tight py-4">
					Frequently Asked Questions
				</h2>
				<p className="font-['Poppins'] font-[500] text-[20px] text-gray-500  ">
					Here are a few answers to our most common questions.
					<br /> We know you have questions about our program, that’s why
					<br /> we’re answering a few of them here straight away!
				</p>
				<div className='grid grid-cols-3 gap-5 mt-14'>
					{data.map((item) => (
						<CardFaq item={item} />
					))}
				</div>
			</div>
			<div className='w-full bg-[#22C55E] h-[249px] mt-[300px] relative'>
				<div className='bg-[#2A3342] rounded-md flex flex-col justify-center items-center space-y-6 py-14 absolute w-full max-w-[1440px] top-[-150px] left-[150px]'>
					<h2 className="font-['Poppins'] font-[700] text-[48px] text-white tracking-tight">
						Have any additional questions?
					</h2>
					<p className="font-['Poppins'] font-[400] text-[20px] text-gray-500  ">
						Flex is a Small SaaS Business. Flex isn’t a traditional company.
					</p>
					<Link
						to=''
						className="bg-[#22C55E] px-[28px] py-4 rounded-md font-['Poppins'] font-[500] text-[18px] text-[#F0FDF4]">
						Get in Touch
					</Link>
				</div>
			</div>
		</>
	);
}

export default Faq;
