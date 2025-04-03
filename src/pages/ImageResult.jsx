import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BACKEND_URL } from '@/configs/constants';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import AppointmentModal from '../components/AppointmentModal';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF'];

export default function ImageResult() {
  const [classification, setClassification] = useState([]);
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageUrl, setImageUrl] = useState(null);


  const copyToClipboard = () => {
    navigator.clipboard.writeText(resultId);
  };

  useEffect(() => {
    setImageUrl(location.state.image);
    setClassification(location.state.classifications);
  }, []);

  return (
    <>
      <div>
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <div className='mt-8 py-8 px-8 flex items-center'>
          <div className='w-full h-full'>
            {imageUrl &&
              <div className='flex flex-col items-center justify-center'>
                <span className='text-lg mb-4 text-start font-semibold text-gray-700'>Result ID: {location.state.id}</span>
                <img src={imageUrl} alt='Uploaded' className='w-full max-w-md h-auto rounded-lg shadow-lg' />
              </div>
            }
          </div>
          <div className='flex flex-col items-center justify-center w-full max-w-2xl mx-auto'>
            <h2 className='text-xl font-bold mt-4'>Classification Results</h2>
            <div className='flex flex-col md:flex-row justify-center w-full mt-6'>
              <div className='w-full md:w-1/2 p-4'>
                <h3 className='text-lg font-semibold mb-2'>Score Distribution</h3>
                <ResponsiveContainer width='100%' height={300}>
                  <BarChart data={classification}>
                    <XAxis dataKey='label' stroke='#8884d8' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='score' fill='#82ca9d' />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className='w-full md:w-1/2 p-4'>
                <h3 className='text-lg font-semibold mb-2'>Prediction Breakdown</h3>
                <ResponsiveContainer width='100%' height={300}>
                  <PieChart>
                    <Pie data={classification} dataKey='score' nameKey='label' cx='50%' cy='50%' outerRadius={100} fill='#8884d8' label>
                      {classification.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-1 px-8 w-full'>
          <h3 className='text-lg font-semibold mb-2'>Classification Table</h3>
          <table className='w-full border-collapse border border-gray-300'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='border border-gray-300 px-4 py-2'>Label</th>
                <th className='border border-gray-300 px-4 py-2'>Score</th>
              </tr>
            </thead>
            <tbody>
              {classification.map((entry, index) => (
                <tr key={index} className='border border-gray-300'>
                  <td className='border border-gray-300 px-4 py-2'>{entry.label}</td>
                  <td className='border border-gray-300 px-4 py-2'>{(entry.score * 100).toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AppointmentModal open={isModalOpen} onClose={() => setIsModalOpen(false)} resultId={location.state.id} />
    </>
  );
}
