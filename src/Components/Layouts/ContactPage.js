import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Image from "react-bootstrap/Image";
import { FaEnvelope } from "react-icons/fa";

const schema = yup
	.object({
		FullName: yup
			.string()
			.min(3, 'Your full name should be at least 3 characters.')
			.max(30, 'Your full name cannot be longer than 30 characters.')
			.required('Please enter your full name.'),
		Email: yup
			.string()
			.email('Not a valid email')
			.min(3, 'Your email should be at least 3 characters.')
			.max(30, 'Your email cannot be longer than 30 characters.')
			.required('Please enter your email.'),
		Subject: yup
			.string()
			.min(3, 'Your subject should be at least 3 characters.')
			.max(30, 'Your subject cannot be longer than 30 characters.')
			.required(),
		Comments: yup
			.string()
			.required(),
	})
	.required();

function ContactUs() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

	return (
		<div className="pt-3 m-auto px-3 pb-5" style={{maxWidth: "600px"}}>
			<h1>Contact us!</h1>
			<div className="d-flex gap-2 align-items-center flex-wrap-reverse justify-content-center" >
				<p style={{width: "330px", backgroundColor: "white", padding: "20px", margin: "0", borderRadius: "50px"}}>If there is something you are wondering about, feel free to send us a massage by our contact form below. </p>
				<Image src="contact-us.jpg" alt="Helpdesk picture" style={{ maxWidth: "200px", width: "100%", borderRadius: "100px"}}/>
			</div>
			
			<Form onSubmit={handleSubmit(onSubmit)} className="pt-3">
				<Form.Group controlId="validationCustom01" className="mb-3">
					<FloatingLabel controlId="floatingTextarea2" label="Full name">	
					<Form.Control 
						type="text" 
						placeholder="Enter your full name" 
						{...register('FullName')}/>
						<Form.Text className="text-danger fw-bold">
							{errors.FullName?.message}
						</Form.Text>
					</FloatingLabel>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<FloatingLabel controlId="floatingTextarea2" label="Email">
					<Form.Control 
						type="text" 
						placeholder="Enter email" 
						{...register('Email')}/>
						<Form.Text className="text-danger fw-bold">
							{errors.Email?.message}
						</Form.Text>
					</FloatingLabel>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<FloatingLabel controlId="floatingTextarea2" label="Subject">
					<Form.Control 
						type="text" 
						placeholder="Subject"
						{...register('Subject')}/>
						<Form.Text className="text-danger fw-bold">
							{errors.Subject?.message}
						</Form.Text>
					</FloatingLabel>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<FloatingLabel controlId="floatingTextarea2" label="Comments">
					<Form.Control
						as="textarea"
						placeholder="Leave a comment here"
						{...register('Comments')}
						style={{ height: '100px' }}/>
						<Form.Text className="text-danger fw-bold">
							{errors.Comments?.message}
						</Form.Text>
					</FloatingLabel>
				</Form.Group>
				<Button variant="dark d-block mx-auto w-75 fw-bold p1" type="submit">
			<FaEnvelope id="FaEnvelope" className="fs-3 p-1 text-info me-2" />
					Submit
				</Button>
			</Form>
		</div>
	);
}
export default ContactUs;

//	const [validated, setValidated] = useState(false);
//	
//	const handleSubmit = (event) => {
//	const form = event.currentTarget;
//	if (form.checkValidity() === false) {
//	event.preventDefault();
//	event.stopPropagation();
//	}
//
  //  setValidated(true);
  //};

//<Form noValidate validated={validated} onSubmit={handleSubmit}>
//				<Form.Group controlId="validationCustom01">
//					<FloatingLabel controlId="floatingTextarea2" label="Full name">	
//					<Form.Control 
//						type="text" 
//						placeholder="Enter your full name" 
//						required
//						minLength = "3"/>
//					</FloatingLabel>
//					<Form.Text className="text-muted">
//					We'll never share your email with anyone else.
//					</Form.Text>
//				</Form.Group>
//
//				<Form.Group className="mb-3" controlId="formBasicPassword">
//					<FloatingLabel controlId="floatingTextarea2" label="Email">
//					<Form.Control 
//						type="email" 
//						placeholder="Enter email" 
//						required
//						/>
//					</FloatingLabel>
//					<Form.Text className="text-muted">
//					We'll never share your email with anyone else.
//					</Form.Text>
//				</Form.Group>
//
//				<Form.Group className="mb-3" controlId="formBasicPassword">
//					<FloatingLabel controlId="floatingTextarea2" label="Subject">
//					<Form.Control 
//						type="text" 
//						placeholder="Subject"
//						required
//						minLength = "3"/>
//					</FloatingLabel>
//					<Form.Text className="text-muted">
//					We'll never share your email with anyone else.
//					</Form.Text>
//				</Form.Group>
//
//				<Form.Group className="mb-3" controlId="formBasicPassword">
//					<FloatingLabel controlId="floatingTextarea2" label="Comments">
//					<Form.Control
//						as="textarea"
//						placeholder="Leave a comment here"
//						required
//						minLength = "3"
//						style={{ height: '100px' }}
//					/>
//					</FloatingLabel>
//				</Form.Group>
//
//				<Button variant="primary" type="submit">
//					Submit
//				</Button>
//			</Form>