import { useActionState } from "react";
import { dataToSendAction } from './services/dataToSendAction';
import SubmitButton from "../../UI/SubmitButton/SubmitButton";

import {initialFormData} from './initialState'

export default function BookATableForm() {

  const [state, formAction] = useActionState(dataToSendAction, initialFormData);


  return (
    <form className="w-full h-full flex flex-col gap-4" action={formAction}>
      <input
        placeholder="Your Name"
        type="text"
        name="name"
        defaultValue={state.name}
        className={`w-full bg-[#131414] rounded-xl border  px-4 outline-none text-default py-3 placeholder:text-[#B0AEA7]
          ${state.errorName?.length > 0 ? 'border-red-600':'border-[#333330]'}
        `}
        required
        aria-label="Your Name"
      />
       {state.errorName?.length > 0 && (
        <span className="w-full text-center text-xl text-default">{state.errorName || ''}</span>
      )}
      <input
        placeholder="Phone number"
        defaultValue={state.phoneNumber}
        type="tel"
        name="phoneNumber"
        className={`w-full bg-[#131414] rounded-xl border  px-4 outline-none text-default py-3 placeholder:text-[#B0AEA7]
          ${state.errorPhoneNumber?.length > 0 ? 'border-red-600':'border-[#333330]'}
        `}
        pattern="^\+44\s?\d{4}\s?\d{3}\s?\d{3}$|^07\d{9}$"
        required
        maxLength={15}
        aria-label="Phone Number"
      />
      {state.errorPhoneNumber?.length > 0 && (
        <span className="w-full text-center text-xl text-default">{state.errorPhoneNumber || ''}</span>
      )}
      <input
        placeholder="Email"
        defaultValue={state.email}
        type="email"
        name="email"
        className={`w-full bg-[#131414] rounded-xl border  px-4 outline-none text-default py-3 placeholder:text-[#B0AEA7]
          ${state.errorEmail?.length > 0 ? 'border-red-600':'border-[#333330]'}
        `}
        required
        aria-label="Email Address"
      />
       {state.errorEmail?.length > 0 && (
        <span className="w-full text-center text-xl text-default">{state.errorEmail || ''}</span>
      )}
      <div className="w-full flex gap-4 flex-col sm:flex-row">
        <input
          placeholder="1-10"
          type="number"
          name="guests"
          className={`w-full bg-[#131414] rounded-xl border  px-4 outline-none text-default py-3 placeholder:text-[#B0AEA7]
            ${state.errorGuests?.length > 0 ? 'border-red-600':'border-[#333330]'}
          `}
          defaultValue={state.guests}
          required
          aria-label="Number of guests"
          max={10}
          min={1}
        />
        
        <input
          className={`w-full bg-[#131414] rounded-xl border  px-4 outline-none text-default py-3 placeholder:text-[#B0AEA7]
          ${state.errorDate?.length > 0 ? 'border-red-600':'border-[#333330]'}
        `}
          type="date"
          name="date"
          defaultValue={state.date}
          required
          aria-label="Date"
          style={{
            colorScheme: "dark",
          }}
        />
        <input
          className={`w-full bg-[#131414] rounded-xl border  px-4 outline-none text-default py-3 placeholder:text-[#B0AEA7]
          ${state.errorTime?.length > 0 ? 'border-red-600':'border-[#333330]'}
        `}
          type="time"
          name="time"
          defaultValue={state.time}
          required
          aria-label="Time"
          style={{
            colorScheme: "dark",
          }}
        />
      </div>
    
      {state.errorGuests?.length > 0 && (
        <span className="w-full text-center text-xl text-default">{state.errorGuests || ''}</span>
      )}
      {state.errorDate?.length > 0 && (
        <span className="w-full text-center text-xl text-default">{state.errorDate || ''}</span>
      )}
      {state.errorTime?.length > 0 && (
        <span className="w-full text-center text-xl text-default">{state.errorTime || ''}</span>
      )}
   
     <SubmitButton />
     {
      state.message?.length > 0 && 
      <span className=" w-full text-center text-xl text-default">{state.message || ''}</span>
      }
    </form>
  );
}
