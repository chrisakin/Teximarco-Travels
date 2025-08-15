import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { Calendar } from 'lucide-react';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  label?: string;
  minDate?: Date;
  className?: string;
  disabled?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
  selected,
  onChange,
  placeholder = 'Select date',
  label,
  minDate,
  className = '',
  disabled = false,
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400 z-10 pointer-events-none" />
        <ReactDatePicker
          selected={selected}
          onChange={onChange}
          placeholderText={placeholder}
          minDate={minDate}
          disabled={disabled}
          dateFormat="MMM dd, yyyy"
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          calendarClassName="custom-datepicker"
          popperClassName="datepicker-popper"
          showPopperArrow={false}
        />
      </div>
      
      <style jsx global>{`
        .custom-datepicker {
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          font-family: inherit;
        }
        
        .custom-datepicker .react-datepicker__header {
          background-color: #0ea5e9;
          border-bottom: none;
          border-radius: 0.75rem 0.75rem 0 0;
          padding: 1rem;
        }
        
        .custom-datepicker .react-datepicker__current-month {
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        .custom-datepicker .react-datepicker__navigation {
          top: 1.2rem;
        }
        
        .custom-datepicker .react-datepicker__navigation-icon::before {
          border-color: white;
        }
        
        .custom-datepicker .react-datepicker__day-name {
          color: #374151;
          font-weight: 600;
          margin: 0.2rem;
        }
        
        .custom-datepicker .react-datepicker__day {
          margin: 0.2rem;
          border-radius: 0.5rem;
          transition: all 0.2s;
        }
        
        .custom-datepicker .react-datepicker__day:hover {
          background-color: #e0f2fe;
          color: #0ea5e9;
        }
        
        .custom-datepicker .react-datepicker__day--selected {
          background-color: #0ea5e9;
          color: white;
        }
        
        .custom-datepicker .react-datepicker__day--keyboard-selected {
          background-color: #0ea5e9;
          color: white;
        }
        
        .custom-datepicker .react-datepicker__day--today {
          background-color: #fef3c7;
          color: #92400e;
          font-weight: 600;
        }
        
        .custom-datepicker .react-datepicker__day--disabled {
          color: #d1d5db;
          cursor: not-allowed;
        }
        
        .datepicker-popper {
          z-index: 9999;
        }
      `}</style>
    </div>
  );
};

export default DatePicker;