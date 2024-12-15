import Triangle from "../../svg/Triangle";

interface PolygonProps {
    w: string;
    h: string;
    children?: React.ReactNode; 
}

export default function Polygon({ w, h,children }: PolygonProps) {
    return (
        <div className="flex flex-col absolute bottom-0 right-0">
            <div className="w-full flex justify-end">
                <Triangle />
            </div>
            <div className="flex items-end">
                <Triangle />
                <div
                    className="rounded-tl-[18px] h-full pl-3 pt-2 bottom-0 bg-[#0A0B0A] "
                >
                  {children}
                </div>
            </div>
        </div>
    );
}
