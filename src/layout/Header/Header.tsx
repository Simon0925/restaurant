import NavigatePanel from '../../components/NavigatePanel/NavigatePanel';
import HeaderAllPages from '../../components/HeaderAllPages/HeaderAllPages';
import { useHeaderData } from '../../hooks/useHeaderData/useHeaderData';
import { useEffect } from 'react';

export default function Header() {
    
   const {currentData} = useHeaderData()

   useEffect(()=>{
        console.log("currentData",currentData)
   },[currentData])
    
    return (
        <header className="w-full relative  h-full ">
             <div className="absolute z-30 top-12 left-1/2 transform -translate-x-1/2 xl:left-60  ">
                <NavigatePanel />
            </div>
            
            <HeaderAllPages name={currentData.name} src={currentData.media}/>
           
        </header>
    );
}
