const normalizeDate = (dateString: string) => {
  
    const parts = dateString.split('-');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; 
    const year = parseInt(parts[2], 10);
  
  
    const parsedDate = new Date(year, month, day);

    return parsedDate.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
    
  };


  export default normalizeDate