import { useAuthContext } from '@/context/AuthContext';
import { User2, LogIn } from 'lucide-react';

export const Login = () => {
    const { login, logout, isAuth } = useAuthContext();

    const handleClick = () => {
        if (isAuth) {
            logout();
        } else {
            login();
        }
    };

    return (
        <div className="z-10 flex justify-end">
            <div
                className="bg-gray-60060 rounded-full p-2"
                onClick={handleClick}
            >
                {isAuth ? (
                    <LogIn className={'text-white hover:cursor-pointer'} />
                ) : (
                    <User2 className={'text-white hover:cursor-pointer'} />
                )}
            </div>
        </div>
    );
};
