import { Text } from '@/components/custom';
import { useAuthContext } from '@/context/AuthContext';
import { User2, LogIn } from 'lucide-react';

export const Login = () => {
    const { login, logout, isAuth, user } = useAuthContext();

    const handleClick = () => {
        if (isAuth) {
            logout();
        } else {
            login();
        }
    };

    return (
        <div className="z-10 flex items-center justify-end">
            <Text variant="p1" className="mr-3 text-white">
                {isAuth ? user?.username : 'Login'}
            </Text>
            <div
                className="rounded-full bg-gray-60060 p-2"
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
