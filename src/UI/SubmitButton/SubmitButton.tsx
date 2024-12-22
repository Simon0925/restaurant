import { useFormStatus } from "react-dom"



export default function SubmitButton () {
    const {pending} = useFormStatus()
    return(
        <button
        type="submit"
        className="w-full bg-[#F0E7D2] text-black py-3 rounded-xl hover:bg-[#CFBE91] transition"
      >
        {!pending?"Submit":"loading..."}
      </button>
    )
}