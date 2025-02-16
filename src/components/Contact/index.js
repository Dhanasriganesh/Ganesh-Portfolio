import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Snackbar, Alert } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 40px 20px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding-bottom: 40px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: #fff;
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: #ddd;
`;

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(255, 255, 255, 0.15) 0px 4px 24px;
  gap: 12px;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid #aaa;
  outline: none;
  font-size: 18px;
  color: #fff;
  border-radius: 12px;
  padding: 12px 16px;
  transition: 0.3s;
  &:focus {
    border: 1px solid #ff00ff;
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid #aaa;
  outline: none;
  font-size: 18px;
  color: #fff;
  border-radius: 12px;
  padding: 12px 16px;
  transition: 0.3s;
  &:focus {
    border: 1px solid #ff00ff;
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-align: center;
  background: linear-gradient(225deg, #742dd2 0%, #a832d1 100%);
  padding: 13px 16px;
  margin-top: 8px;
  border-radius: 12px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};

  &:hover {
    opacity: 0.9;
  }
`;

const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    setLoading(true);

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setButtonText('Submitted!');
        setOpen(true);
        form.current.reset();
        setTimeout(() => setButtonText('Send'), 3000);
      } else {
        setButtonText('Send');
        setErrorOpen(true);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setButtonText('Send');
      setErrorOpen(true);
    }

    setLoading(false);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any queries!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactInput placeholder="Your Email" name="from_email" required type="email" />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="Message" rows="4" name="message" required />
          <ContactButton type="submit" disabled={loading}>{buttonText}</ContactButton>
        </ContactForm>
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
          <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
            Email sent successfully!
          </Alert>
        </Snackbar>
        <Snackbar open={errorOpen} autoHideDuration={6000} onClose={() => setErrorOpen(false)}>
          <Alert onClose={() => setErrorOpen(false)} severity="error" sx={{ width: '100%' }}>
            Failed to send email. Please try again.
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
