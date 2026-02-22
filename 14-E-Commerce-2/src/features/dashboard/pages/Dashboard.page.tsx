import { ROUTES } from '@/router';
import { selectUser, useUserStore } from '@/stores/user-store';
import type User from '@/types/user';
import { Navigate } from 'react-router-dom';
import UsersTable from '../components/organisms/UsersTable';


export const Dashboard = () => {
    const user: User = useUserStore(selectUser)

    if (!user || user.role !== 'admin') return <Navigate to={ROUTES.default.home} />
    return (
        <div className='space-y-8'>
            <h1 className='text-primary uppercase text-3xl text-center'>Dashboard</h1>

            <UsersTable />
        </div >
    )
}
