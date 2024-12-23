// src/components/Contact/ContactForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Send, Loader } from 'lucide-react';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.lightBlue};
    box-shadow: 0 0 0 2px rgba(63, 136, 197, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.lightBlue};
    box-shadow: 0 0 0 2px rgba(63, 136, 197, 0.1);
  }
`;

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: ${props => props.theme.colors.lightBlue};
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would add your form submission logic
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated delay
    
    setIsSubmitting(false);
    setFormState({ name: '', email: '', message: '' });
    alert('Message sent successfully!'); // Replace with better notification
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Send Message</FormTitle>
      
      <InputGroup>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          value={formState.name}
          onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
          required
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formState.email}
          onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
          required
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="message">Message</Label>
        <TextArea
          id="message"
          value={formState.message}
          onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
          required
        />
      </InputGroup>

      <SubmitButton
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <>
            <Loader className="animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send />
            <span>Send Message</span>
          </>
        )}
      </SubmitButton>
    </Form>
  );
}