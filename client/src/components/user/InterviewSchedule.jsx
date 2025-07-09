import React, { useState, useEffect, useRef } from 'react';
import { FiCalendar, FiClock, FiEdit2, FiX, FiCheck } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { IoIosArrowBack } from 'react-icons/io';

const InterviewSchedule = () => {
    const navigate = useNavigate();
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [notes, setNotes] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  const mentors = [
    {
      id: 'A',
      name: 'John Smith',
      expertise: 'Frontend Development',
      availableDates: ['2025-07-10', '2025-07-12', '2025-07-15'],
      availableTimes: ['10:00 AM', '02:00 PM', '04:30 PM']
    },
    {
      id: 'B',
      name: 'Sarah Johnson',
      expertise: 'Backend Engineering',
      availableDates: ['2025-07-11', '2025-07-14', '2025-07-16'],
      availableTimes: ['09:00 AM', '01:00 PM', '03:30 PM']
    },
    {
      id: 'C',
      name: 'Emily Davis',
      expertise: 'DevOps & Cloud',
      availableDates: ['2025-07-10', '2025-07-13', '2025-07-18'],
      availableTimes: ['10:30 AM', '02:30 PM', '04:00 PM']
    }
  ];

  const handleScheduleInterview = (mentor) => {
    setSelectedMentor(mentor);
    setSelectedDate('');
    setSelectedTime('');
    setNotes('');
    setShowCalendar(false);
  };

  const handleDateChange = (date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
    setSelectedTime('');
    setTimeout(() => setShowCalendar(false), 100);
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatDisplayDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const isDateAvailable = (date) => {
    if (!selectedMentor) return false;
    const dateStr = formatDate(date);
    return selectedMentor.availableDates.includes(dateStr);
  };

  const tileDisabled = ({ date, view }) => {
    if (view !== 'month') return false;
    return !isDateAvailable(date);
  };

  const tileContent = ({ date, view }) => {
    if (view !== 'month') return null;
    return isDateAvailable(date) ? (
      <div className="absolute top-0 right-0 mt-1 mr-1 w-2 h-2 bg-blue-500 rounded-full"></div>
    ) : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time');
      return;
    }

    alert(`Interview scheduled with ${selectedMentor.name} on ${formatDisplayDate(selectedDate)} at ${selectedTime}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    const handleFinish = () => {
    navigate('/user/UserDashboard', {
      state: { testCompleted: true, score },
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
                                <button onClick={() => navigate('/user/UserDashboard')} className="flex items-center text-black-600 hover:underline">
                                  <IoIosArrowBack className="mr-1" />
                                  Back to Dashboard
                                </button>
                              </div>
      <h1 className="text-3xl font-bold text-center mb-8">Interview Scheduling</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-semibold">{mentor.name}</h2>
                <p className="text-sm text-gray-500">{mentor.expertise}</p>
              </div>
              <button
                onClick={() => handleScheduleInterview(mentor)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedMentor?.id === mentor.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {selectedMentor?.id === mentor.id ? 'Scheduling...' : 'Schedule'}
              </button>
            </div>

            {selectedMentor?.id === mentor.id && (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Date Picker */}
                <div className="relative" ref={calendarRef}>
                  <label className="text-sm font-medium flex items-center">
                    <FiCalendar className="mr-2" /> Select Date
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={formatDisplayDate(selectedDate)}
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="w-full p-2 border border-gray-300 rounded-md cursor-pointer"
                    placeholder="Click to select date"
                  />
                  {selectedDate && (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedDate('');
                        setSelectedTime('');
                      }}
                      className="absolute right-10 top-9 text-gray-500"
                    >
                      <FiX />
                    </button>
                  )}
                  {showCalendar && (
                    <div className="absolute z-50 bg-white mt-2 p-2 border border-gray-200 rounded-md shadow-md">
                      <Calendar
                        onChange={handleDateChange}
                        value={selectedDate ? new Date(selectedDate) : null}
                        tileDisabled={tileDisabled}
                        tileContent={tileContent}
                        minDate={new Date()}
                      />
                      <div className="mt-2 text-xs text-gray-500 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                        Available dates
                      </div>
                    </div>
                  )}
                </div>

                {/* Time Selector */}
                {selectedDate && (
                  <div>
                    <label className="text-sm font-medium flex items-center">
                      <FiClock className="mr-2" /> Select Time
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {mentor.availableTimes.map((time, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`p-2 border rounded-md text-sm flex items-center justify-center ${
                            selectedTime === time
                              ? 'bg-blue-100 border-blue-500 text-blue-700'
                              : 'border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {selectedTime === time && <FiCheck className="mr-1" />}
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Notes */}
                <div>
                  <label className="text-sm font-medium flex items-center">
                    <FiEdit2 className="mr-2" /> Notes (Optional)
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Any specific topics you'd like to discuss..."
                    className="w-full p-2 border border-gray-300 rounded-md"
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTime}
                  className={`w-full py-2 px-4 rounded-md font-semibold ${
                    selectedDate && selectedTime
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {selectedDate && selectedTime
                    ? `Confirm with ${mentor.name.split(' ')[0]} on ${formatDisplayDate(
                        selectedDate
                      )} at ${selectedTime}`
                    : 'Select date and time to confirm'}
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewSchedule;
