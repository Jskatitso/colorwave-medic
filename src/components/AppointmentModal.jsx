import { useState } from 'react';
import { Modal, Input, Button } from '@mui/material';

const appointments = []; // Array to store appointment data

const AppointmentModal = ({ open, onClose, resultId }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const appointment = { ...formData, resultId };
    appointments.push(appointment);
    console.log('Appointments:', appointments);
    onClose(); // Close modal after submission
    alert('Appointment booked successfully!');
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className='p-6 bg-white rounded-lg shadow-lg w-96 mx-auto mt-20'>
        <h2 className='text-lg font-bold mb-4'>Book an Appointment</h2>
        <Input
          name='firstName'
          placeholder='First Name'
          className='mb-3 w-full'
          value={formData.firstName}
          onChange={handleChange}
        />
        <Input
          name='lastName'
          placeholder='Last Name'
          className='mb-3 w-full'
          value={formData.lastName}
          onChange={handleChange}
        />
        <Input value={resultId} readOnly className='mb-3 w-full' />
        <Input
          type='date'
          name='date'
          className='mb-3 w-full'
          value={formData.date}
          onChange={handleChange}
        />
        <button
          className='bg-medical-red text-white px-5 py-2 rounded-sm'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default AppointmentModal;
