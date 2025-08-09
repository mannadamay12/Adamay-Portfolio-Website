// src/components/Contact/ContactForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Send, Loader } from 'lucide-react';
import toast from 'react-hot-toast';

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
  font-family: ${props => props.theme.fonts.families.mono};
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 2rem;
  text-align: center;
`;

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Helper to clear error for a field as user types
  const handleFieldChange = (field, value) => {
    setFormState(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formState.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error('Please fill in all required fields correctly.');
      return;
    }

    setIsSubmitting(true);
  
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    });
  
    setIsSubmitting(false);
  
    if (res.ok) {
      setFormState({ name: '', email: '', message: '', website: '' });
      setErrors({});
      toast.success('Message sent successfully!');
    } else {
      const { error } = await res.json();
      toast.error(error || 'Failed to send message.');
    }
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
          onChange={(e) => handleFieldChange('name', e.target.value)}
          aria-invalid={!!errors.name}
        />
        {errors.name && <span style={{ color: 'red', fontSize: '0.9em' }}>{errors.name}</span>}
      </InputGroup>

      <InputGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="text"
          value={formState.email}
          onChange={(e) => handleFieldChange('email', e.target.value)}
          aria-invalid={!!errors.email}
        />
        {errors.email && <span style={{ color: 'red', fontSize: '0.9em' }}>{errors.email}</span>}
      </InputGroup>

      <InputGroup>
        <Label htmlFor="message">Message</Label>
        <TextArea
          id="message"
          value={formState.message}
          onChange={(e) => handleFieldChange('message', e.target.value)}
          aria-invalid={!!errors.message}
        />
        {errors.message && <span style={{ color: 'red', fontSize: '0.9em' }}>{errors.message}</span>}
      </InputGroup>

      <Input
        type="text"
        name="website"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        value={formState.website || ''}
        onChange={e => setFormState(prev => ({ ...prev, website: e.target.value }))}
        aria-hidden="true"
      />

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