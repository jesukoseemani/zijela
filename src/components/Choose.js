import React from 'react';
import image1 from '../assets/undraw_social_interaction_re_dyjh.svg';
import image2 from '../assets/undraw_people_re_8spw.svg'
import image3 from '../assets/undraw_community_re_cyrm.svg';
import image4 from '../assets/undraw_online_discussion_re_nn7e.svg';



function Choose() {
	const data = [
		{
			image: `${image4}`,
			title: 'Personalized follow-up',
			desc: 'Each student will be accompanied by an outstanding instructor. We strongly believe that effective training requires human assistance.',
		},
		{
			image: `${image3}`,
			title: 'Our educational platform',
			desc: 'Our platform allows our students to access their trainings at any time, organize their schedule with their instructor, monitor their performance and identify areas for improvement.',
		},
		{
			image: `${image1}`,
			title: 'Rich and interactive content',
			desc: 'Our educational platform is the result of the collaboration of our educational team, our developers, our UX designers, our content creators and our partners.',
		},
		{
			image: `${image2}`,
			title: 'Our community',
			desc: 'Join a community of digital enthusiasts who bring you support, motivation and creativity. various events are organized by and for the community: Talks, Panels ...',
		},
	];
	return (
		<div className='max-w-[1150px] m-auto '>
			<div className='mt-[150px]'>
				<h1 className="font-['Poppins'] font-[700] text-[48px] text-gray-900 tracking-tight">
					Why Choose this program?
				</h1>
				<div className='grid grid-cols-4 py-[64px] gap-12 '>
					{data.map((item) => (
						<div className=' rounded-md bg-white flex flex-col items-start justify-between '>
							<div>
								<img src={item.image} alt='' className='rounded-md ' />
							</div>
							<div className='flex flex-col h-[300px] items-start'>
								<h6 className="font-['Poppins'] font-[600] text-[20px] text-gray-900  ">
									{item.title}
								</h6>
								<p className="font-['Poppins'] font-[400] text-[14px] text-gray-600 mt-[50px] ">
									{item.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Choose;
