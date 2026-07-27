import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState({
    fullName: '',
    email: '',
    projectTopic: 'تطوير منتج رقمي',
    ideaDetails: '',
    selectedDate: new Date().toISOString().split('T')[0],
    selectedTimeSlot: '10:00 صباحاً',
    contactMethod: 'فيديو (Google Meet / Zoom)',
    phone: ''
  });

  const [isBooked, setIsBooked] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState(null);

  const updateBooking = (fields) => {
    setBookingData((prev) => ({ ...prev, ...fields }));
  };

  const submitBooking = () => {
    setSubmittedBooking({ ...bookingData, bookingId: 'STRATOS-' + Math.floor(100000 + Math.random() * 900000) });
    setIsBooked(true);
  };

  const resetBooking = () => {
    setIsBooked(false);
    setSubmittedBooking(null);
    setBookingData({
      fullName: '',
      email: '',
      projectTopic: 'تطوير منتج رقمي',
      ideaDetails: '',
      selectedDate: new Date().toISOString().split('T')[0],
      selectedTimeSlot: '10:00 صباحاً',
      contactMethod: 'فيديو (Google Meet / Zoom)',
      phone: ''
    });
  };

  return (
    <BookingContext.Provider
      value={{
        bookingData,
        updateBooking,
        submitBooking,
        resetBooking,
        isBooked,
        submittedBooking
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
