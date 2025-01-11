
interface InstagramSVGProps {
    w:string;
    h:string;
}

const InstagramSVG = ({w,h}:InstagramSVGProps) => {
    return (
        <svg
            width={w}
            height={h}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9 5.76562C8.3603 5.76562 7.73497 5.95532 7.20308 6.31072C6.67119 6.66611 6.25663 7.17125 6.01183 7.76226C5.76702 8.35326 5.70297 9.00359 5.82777 9.631C5.95257 10.2584 6.26062 10.8347 6.71295 11.287C7.16529 11.7394 7.7416 12.0474 8.369 12.1722C8.99641 12.297 9.64674 12.233 10.2377 11.9882C10.8287 11.7434 11.3339 11.3288 11.6893 10.7969C12.0447 10.265 12.2344 9.6397 12.2344 9C12.2344 8.14219 11.8936 7.31951 11.287 6.71295C10.6805 6.10639 9.85781 5.76562 9 5.76562ZM9 11.3906C8.52718 11.3906 8.06498 11.2504 7.67184 10.9877C7.2787 10.725 6.97229 10.3517 6.79135 9.91485C6.61041 9.47802 6.56307 8.99735 6.65531 8.53361C6.74755 8.06988 6.97524 7.64391 7.30957 7.30957C7.64391 6.97524 8.06988 6.74755 8.53361 6.65531C8.99735 6.56307 9.47802 6.61041 9.91485 6.79135C10.3517 6.97229 10.725 7.2787 10.9877 7.67184C11.2504 8.06498 11.3906 8.52718 11.3906 9C11.3888 9.63346 11.1363 10.2404 10.6884 10.6884C10.2404 11.1363 9.63346 11.3888 9 11.3906ZM12.0938 2.10938H5.90625C4.89926 2.10937 3.93351 2.5094 3.22145 3.22145C2.5094 3.93351 2.10938 4.89926 2.10938 5.90625V12.0938C2.10937 13.1007 2.5094 14.0665 3.22145 14.7785C3.93351 15.4906 4.89926 15.8906 5.90625 15.8906H12.0938C13.1007 15.8906 14.0665 15.4906 14.7785 14.7785C15.4906 14.0665 15.8906 13.1007 15.8906 12.0938V5.90625C15.8906 4.89926 15.4906 3.93351 14.7785 3.22145C14.0665 2.5094 13.1007 2.10938 12.0938 2.10938ZM15.0469 12.0938C15.0469 12.877 14.7357 13.6281 14.1819 14.1819C13.6281 14.7357 12.877 15.0469 12.0938 15.0469H5.90625C5.12303 15.0469 4.37189 14.7357 3.81808 14.1819C3.26426 13.6281 2.95313 12.877 2.95312 12.0938V5.90625C2.95312 5.12303 3.26426 4.37189 3.81808 3.81808C4.37189 3.26426 5.12303 2.95313 5.90625 2.95312H12.0938C12.877 2.95313 13.6281 3.26426 14.1819 3.81808C14.7357 4.37189 15.0469 5.12303 15.0469 5.90625V12.0938ZM13.3594 5.34375C13.3594 5.48281 13.3181 5.61876 13.2409 5.73439C13.1636 5.85001 13.0538 5.94013 12.9253 5.99335C12.7968 6.04657 12.6555 6.06049 12.5191 6.03336C12.3827 6.00623 12.2574 5.93927 12.1591 5.84093C12.0607 5.7426 11.9938 5.61732 11.9666 5.48092C11.9395 5.34453 11.9534 5.20315 12.0066 5.07468C12.0599 4.9462 12.15 4.83638 12.2656 4.75912C12.3812 4.68186 12.5172 4.64062 12.6562 4.64062C12.8427 4.64062 13.0216 4.7147 13.1534 4.84657C13.2853 4.97843 13.3594 5.15727 13.3594 5.34375Z"
                fill="#EFE7D2"
            />
        </svg>
    );
};

export default InstagramSVG;
