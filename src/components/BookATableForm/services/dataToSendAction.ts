import hostName from '../../../config/hostname';

import {initialFormData} from '../initialState';

export const dataToSendAction = async (prevState: any, formData: FormData) => {

  const dataToSend = {
    name: formData.get('name') as string,
    phoneNumber: formData.get('phoneNumber') as string,
    email: formData.get('email') as string,
    guests: parseInt(formData.get('guests') as string, 10),
    date: formData.get('date') as string,
    time: formData.get('time') as string,
  };

  try {
    const response = await fetch(`${hostName}/api/reservation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });

    const data = await response.json();
  
    if (data.messages) {
      const {
        errorName,
        errorPhoneNumber,
        errorEmail,
        errorGuests,
        errorDate,
        errorTime,
      } = data.messages;
          
        return {
          ...dataToSend,
          errorName:errorName,
          errorPhoneNumber:errorPhoneNumber,
          errorEmail:errorEmail,
          errorGuests:errorGuests,
          errorDate:errorDate,
          errorTime:errorTime
        };
    
    } else {
      return {
        ...initialFormData,
        message: data.message,
      };
    }

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    console.error('Error:', errorMessage);
    return {
      ...prevState,
      message: errorMessage,
    };
  }
};
