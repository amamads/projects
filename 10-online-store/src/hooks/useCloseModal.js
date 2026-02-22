import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function useCloseModal(
    isShowModal,
    toggleShowFn,
    notClosePlaces
) {
    const paramArr = [isShowModal, toggleShowFn, ...notClosePlaces]
    if (paramArr.every(item => item === ''))
        throw new Error('The parameters are incomplete')

    const dispatch = useDispatch()

    useEffect(() => {
        function handleClick(e) {
            if (notClosePlaces.some(item => e.target.closest(item))) return

            if (isShowModal) dispatch(toggleShowFn());
        }
        window.addEventListener('click', handleClick)
        return () => window.removeEventListener('click', handleClick)
    }, [isShowModal, dispatch])
}