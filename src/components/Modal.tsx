import {ReactNode} from "react";

interface ModalProps {
    title?: string
    children: ReactNode
    onClose: () => void
}

export const Modal = ({ title = "Modal", children, onClose }: ModalProps) => {
    return (
        <>
            <div
                className="fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-10"
                onClick={onClose}
            />
            <div className="fixed top-10 left-1/2 -translate-x-1/2 w-[500px] p-5 bg-white rounded z-10">
                <h1 className="mb-4 text-center text-xl font-bold">{title}</h1>
                {children}
            </div>
        </>
    );
};