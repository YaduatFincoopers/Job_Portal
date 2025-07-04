import React, { useState } from 'react';
import { FiCalendar, FiClock, FiEdit2, FiX, FiCheck } from 'react-icons/fi';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const InterviewSchedule = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [notes, setNotes] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  const mentors = [
    {
      id: 'A',
      name: 'John Smith',
      expertise: 'Frontend Development',
      availableDates: ['2023-06-05', '2023-06-15', '2023-06-25'],
      availableTimes: ['10:00 AM', '02:00 PM', '04:30 PM']
    },
    {
      id: 'B',
      name: 'Sarah Johnson',
      expertise: 'Backend Engineering',
      availableDates: ['2023-06-07', '2023-06-17', '2023-06-27'],
      availableTimes: ['09:00 AM', '01:00 PM', '03:30 PM']
    },
    {
      id: 'E',
      name: 'Emily Davis',
      expertise: 'DevOps & Cloud',
      availableDates: ['2023-06-10', '2023-06-20', '2023-06-30'],
      availableTimes: ['10:30 AM', '02:30 PM', '04:00 PM']
    },
    {
      id: 'F',
      name: 'Michael Chen',
      expertise: 'Full Stack Development',
      availableDates: ['2023-06-08', '2023-06-18', '2023-06-28'],
      availableTimes: ['11:00 AM', '03:00 PM', '05:30 PM']
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
    setSelectedTime(''); // Reset time when date changes
    setShowCalendar(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time');
      return;
    }

    console.log({
      mentor: selectedMentor.name,
      date: selectedDate,
      time: selectedTime,
      notes
    });

    alert(`Interview scheduled with ${selectedMentor.name} on ${formatDisplayDate(selectedDate)} at ${selectedTime}`);
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

  // Custom tile content to highlight available dates
  const tileContent = ({ date, view }) => {
    if (view !== 'month') return null;
    return isDateAvailable(date) ? (
      <div className="absolute top-0 right-0 mt-1 mr-1 w-2 h-2 bg-blue-500 rounded-full"></div>
    ) : null;
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Interview Scheduling</h1>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-600">Available Mentors</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 transition-all duration-200 hover:shadow-md">
              <div className="flex items-start">
                <div className="mr-4 text-gray-500 font-medium text-xl">{mentor.id}.</div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="text-lg font-medium text-gray-800">{mentor.name}</h3>
                      <p className="text-sm text-gray-600">{mentor.expertise}</p>
                    </div>
                    <button
                      onClick={() => handleScheduleInterview(mentor)}
                      className={`px-4 py-2 rounded-md text-sm sm:text-base ${selectedMentor?.id === mentor.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                    >
                      {selectedMentor?.id === mentor.id ? 'Scheduling...' : 'Schedule'}
                    </button>
                  </div>

                  {selectedMentor?.id === mentor.id && (
                    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                      <div>
                        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                          <FiCalendar className="mr-2" /> Select Date
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            readOnly
                            value={formatDisplayDate(selectedDate)}
                            onClick={() => setShowCalendar(!showCalendar)}
                            className="w-full p-2 border border-gray-300 rounded-md cursor-pointer"
                            placeholder="Click to select date"
                          />
                          {selectedDate ? (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedDate('');
                                setSelectedTime('');
                              }}
                              className="absolute right-8 top-2 text-gray-500 hover:text-gray-700"
                            >
                              <FiX />
                            </button>
                          ) : (
                            <FiCalendar className="absolute right-3 top-3 text-gray-400" />
                          )}
                        </div>

                        {showCalendar && (
                          <div className="mt-2 z-10 bg-white p-2 border border-gray-200 rounded-md shadow-lg">
                            <Calendar
                              onChange={handleDateChange}
                              value={selectedDate ? new Date(selectedDate) : null}
                              tileDisabled={tileDisabled}
                              tileContent={tileContent}
                              minDate={new Date()}
                              className="border-0"
                              onClickDay={() => setShowCalendar(false)}
                            />
                            <div className="mt-2 text-xs text-gray-500 flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                              Available dates
                            </div>
                          </div>
                        )}
                      </div>

                      {selectedDate && (
                        <div>
                          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                            <FiClock className="mr-2" /> Select Time
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {mentor.availableTimes.map((time, index) => (
                              <button
                                key={index}
                                type="button"
                                onClick={() => setSelectedTime(time)}
                                className={`p-2 border rounded-md text-sm flex items-center justify-center ${selectedTime === time
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

                      <div>
                        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
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

                      <button
                        type="submit"
                        disabled={!selectedDate || !selectedTime}
                        className={`w-full py-2 px-4 rounded-md mt-4 transition-colors ${selectedDate && selectedTime
                            ? 'bg-green-600 text-white hover:bg-green-700'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                      >
                        {selectedDate && selectedTime
                          ? `Confirm with ${mentor.name.split(' ')[0]} on ${formatDisplayDate(selectedDate)} at ${selectedTime}`
                          : 'Select date and time to confirm'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterviewSchedule;