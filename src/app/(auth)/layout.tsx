import { FC, ReactNode } from 'react';
import Image from 'next/image';
import backgroundImage from '../../../public/logo.png'

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    return (
        <main className='flex flex-col min-h-screen md:flex-row'>
            <div className='flex flex-col basis-1/2 justify-items-center mt-56 ml-36'>
            <Image
                src={backgroundImage}
                alt="Description of the image"
                width={400}
            />
            <div className='text-2xl font-medium -mt-9'>Streamline your finances with ease</div>
            </div>

            <div className='basis-1/2'>
                {children}
            </div>
            
        </main>
    )
};

export default AuthLayout;
