import React from 'react';

const FormatDate = (props) => {

  const formatDate = (dateString) => {
    if(!dateString){ return 'PRESENT' }
    const date = new Date(dateString);
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthNames[monthIndex];
    return `${monthName} ${year}`;
  };

  return (
    <span className='date'>{formatDate(props.date)}</span>
  )

}

export default FormatDate;