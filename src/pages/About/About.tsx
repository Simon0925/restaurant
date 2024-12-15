import { useEffect, useState } from "react";
import { Transition, TransitionStatus } from "react-transition-group";

export default function About() {
    
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    const defaultStyle = {
        transition: 'opacity 500ms ease-in-out',
        opacity: 0,
    };

    const transitionStyles: Record<TransitionStatus, React.CSSProperties> = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: {},
        exited: {},
        unmounted: {},
    };

    return (
        <div className="w-[600px] h-[400px] bg-slate-50 mt-6">
            <Transition
                in={show} 
                timeout={500}
                unmountOnExit
            >
                {(state) => (
                    <p
                        className={`text-2xl`}
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                        }}
                    >
                        Hello World
                    </p>
                )}
            </Transition>
        </div>
    );
}
