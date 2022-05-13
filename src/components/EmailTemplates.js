import React from 'react';

function EmailTemplates() {
	return (
		<>
			{/* CONTACT MESSAGE REPLY */}
			{/* <div style='background-color:#22C55E; padding: 30px; height: 100%; '>
				<div style='background-color:#070707; padding: 30px; '>
					<div style='display: flex; align-items: center; justify-content: start; cursor: pointer; margin-bottom: 30px;'>
						<a style='' href='https://training.zijela.com'>
							<img
								src='https://i.ibb.co/yqc0Rg9/gmh-2.png'
								alt='gmh-2'
								border='0'
								style='width: 50px; height: 50px; object-fit: cover;'
							/>
						</a>
					</div>

					<div style='font-size: 15px; color: gray;'>
						<p style='margin: 40px 0;'>Hello {{firstname}},👋</p>
						<p style='margin: 40px 0;'>
							Thank you for reaching out to us at Zijela Academy. We're excited
							to have you onboard and will be happy to help.
						</p>
						<p style='margin: 40px 0;'>
							A member of the team will reach out to you shortly.
						</p>
						<p style='margin: 40px 0 10px 0;'>Best regards,</p>
						<p>Zijela Team.</p>
					</div>
				</div>
			</div> */}
			{/* SYLLABUS MESSAGE REPLY */}
			{/* <div style='background-color:#22C55E; padding: 30px; height: 100%; '>
				<div style='display: flex; align-items: center; justify-content: start; cursor: pointer; margin-bottom: 30px;'>
					<a style='' href='https://training.zijela.com'>
						<img
							src='https://i.ibb.co/yqc0Rg9/gmh-2.png'
							alt='gmh-2'
							border='0'
							style='width: 50px; height: 50px; object-fit: cover;'
						/>
					</a>
				</div>

				<div style='background-color:#070707; padding:30px 10px; font-size: 15px; color: gray; width: 100%;'>
					<p style='margin: 40px 0;'>Hello {{ firstname }}, 👋 </p>

					<p style='margin: 40px 0;'>I hope you are doing well?</p>

					<p style='margin: 40px 0;'>
						I'm glad to see that you are taking an interest in our {{ title }}
						program.
					</p>

					<p style='margin: 40px 0;'>
						We prepared a detailed brochure for you to consult the contents of
						the course at your ease.
					</p>

					<div style='background-color:#22C55E; padding: 7px 10px; color: white; width: 170px; display: flex; justify-centent: center; align-items: center; color: white; border-radius: 6px; margin: 0 auto;'>
						<a
							style='cursor: pointer; text-decoration: none; color: white;'
							href='{{link}}'>
							Download the brochure
						</a>
					</div>
					<p style='font-style: italics; color: gray; margin: 15px 0; text-align: center;'>
						Come join the experience 💪
					</p>
				</div>
			</div> */}
			{/* border: 1px solid gray; */}
			{/* APPLICATION */}
			{/* <div style='background-color:#22C55E; padding: 30px; height: 100%; '>
				<div style='background-color:#070707; padding: 30px; '>
					<div style='display: flex; align-items: center; justify-content: start; cursor: pointer; margin-bottom: 30px;'>
						<a style='' href='https://ibb.co/2d1q6c9'>
							<img
								src='https://i.ibb.co/yqc0Rg9/gmh-2.png'
								alt='gmh-2'
								border='0'
								style='width: 50px; height: 50px; object-fit: cover;'
							/>
						</a>
					</div>
					<div style='color: gray;'>
						<p style='margin: 30px 0;'>Hello {{ firstName }}, 👋 </p>
						<p style='margin: 30px 0;'>
							We have received your application to Zijela Academy. Here are the programme details:
						</p>
						

						<p style='margin: 30px 0;'>Program name - {{ track }} Track</p>

						<p style='margin: 30px 0;'>Program cost - {{ amount }}</p>
						<p style='margin: 30px 0;'>
							To start takig the courses, please make payment using the payment
							button below.
						</p>
					</div>

					<div style='background-color:#22C55E; padding: 7px 10px; color: white; width: 70px; display: flex; justify-centent: center; align-items: center; color: white; border-radius: 6px; margin: 0 auto;'>
						<a
							style='cursor: pointer; text-decoration: none; color: white; text-align: center;'
							href='{{link}}'>
							Pay Now
						</a>
					</div>

					<p style='margin: 40px 0 20px 0; color: gray;'>
						If you have any questions please let us know by sending an email to
						<a
							style='cursor: pointer; text-decoration: none; color: blue;'
							href='mailto:training@zijela.com'>
							training@zijela.com
						</a>
						.
					</p>

					<p style='margin: 40px 0 10px 0; color: gray'>Best regards,</p>
					<p>Zijela Team.</p>
				</div>
			</div> */}
		</>
	);
}

export default EmailTemplates;
