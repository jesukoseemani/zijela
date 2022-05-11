import React from 'react';
import styled from 'styled-components';
import image from '../assets/daniel-charles-hextall-6LqEzeYigGY-unsplash (1).jpg';

function AboutDes() {
	return (
		<StyledDes>
			<div className='left'>
				<img
					src={image}
					alt=''
					style={{ width: '349px', height: '502px', borderRadius: '16.5px' }}
				/>

				<div className='left_hide_content'>
					<p className='right_content_third'>
						<span className='right_span'>Damilare Ademeso, </span>Founder & CEO
					</p>
					<p className='right_content_second'>
						“We are focused on getting you the best outcomes you once only
						dreamed of. We do the impossible. We get you here and on the right
						path to achieving your goals. “
					</p>
				</div>
			</div>

			<div className='right'>
				<h3 className='rightH3'>
					We specialise in building people to the future from the regions of
					Nigeria.
				</h3>
				<p className='right_content'>
					Damilare Ademeso has worked in the tech field for over 8 years. Since
					becoming a Senior Developer he has successfully lodged real- world
					blab blab.In addition, he has successfully represented clients.
				</p>
				<hr className='line' />
				<div className='right_hide_content'>
					<p className='right_content_second'>
						“We are focused on getting you the best outcomes you once only
						dreamed of. We do the impossible. We get you here and on the right
						path to achieving your goals. “
					</p>
					<p className='right_content_third'>
						<span className='right_span'>Damilare Ademeso, </span>Founder & CEO
					</p>
				</div>
			</div>
		</StyledDes>
	);
}

const StyledDes = styled.div`
	display: flex;
	align-items: flex-start;
	margin: 200px auto;
	max-width: 1150px;
	width: 100%;

	@media only screen and (max-width: 1200px) {
		padding: 0 6rem;
	}

	@media only screen and (max-width: 1050px) {
		flex-direction: column-reverse;
		align-items: center;
	}
	@media only screen and (max-width: 480px) {
		padding: 0 3rem;
		margin: 200px auto 60px auto;
	}
	.left {
		flex: 1;
		@media only screen and (max-width: 1050px) {
			margin-top: 3rem;
		}

		.left_hide_content {
			display: none;

			.right_content_second {
				font-family: Poppins;
				font-style: normal;
				font-weight: 500;
				font-size: 17px;
				line-height: 20px;

				/* Black */

				color: #04152f;
				margin: 15px 0;
			}
			.right_content_third {
				font-family: Poppins;
				font-style: normal;
				font-weight: 500;
				font-size: 20px;
				line-height: 150%;
				/* or 30px */

				/* Black */

				color: #04152f;
			}
			.right_span {
				font-weight: bold;
			}

			@media only screen and (max-width: 480px) {
				display: block;
			}
		}
	}

	.right {
		flex: 1;
		.rightH3 {
			font-family: Poppins;
			font-style: normal;
			font-weight: 700;
			font-size: 30px;
			line-height: 150%;
			color: #050505;

			@media only screen and (max-width: 480px) {
				font-size: 28px;
			}
		}

		.right_hide_content {
			@media only screen and (max-width: 480px) {
				display: none;
			}
		}

		.right_content {
			font-family: Poppins;
			font-style: normal;
			font-weight: normal;
			font-size: 20px;
			line-height: 150%;
			/* or 30px */

			/* Black */

			color: #04152f;
			margin: 15px 0 30px 0;
			@media only screen and (max-width: 480px) {
				font-size: 17px;
			}
		}

		.right_content_second {
			font-family: Poppins;
			font-style: normal;
			font-weight: 700;
			font-size: 17px;
			line-height: 20px;

			/* Black */

			color: #04152f;
			margin: 15px 0;
		}
		.right_content_third {
			font-family: Poppins;
			font-style: normal;
			font-weight: 700;
			font-size: 20px;
			line-height: 150%;
			/* or 30px */

			/* Black */

			color: #04152f;
		}
		.right_span {
			font-weight: bold;
		}

		.line {
			@media only screen and (max-width: 480px) {
				display: none;
			}
		}
	}
`;

export default AboutDes;
