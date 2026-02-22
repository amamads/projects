import React from 'react'
import Modal from '../../components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { selectShowUsersListModal, toggleShowUsersListModal } from './dashboardSlice'
function userListModule() {
    const showModal = useSelector(selectShowUsersListModal)
    const dipatch = useDispatch();
    return (
        <div>
            <Modal
                isShow={showModal}
                toggleShowFn={e => dipatch(toggleShowUsersListModal)}
                elementSelectors={[]}
            >

            </Modal>
        </div>
    )
}

export default userListModule