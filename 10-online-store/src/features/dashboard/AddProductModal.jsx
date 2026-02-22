import { useDispatch, useSelector } from 'react-redux';
import { selectShowAddProductModal, toggleAddProductModal } from './dashboardSlice';
import useInput from '../../hooks/useInput'
import { addProduct } from '../products/productsSlice';
import Modal from '../../components/Modle';

function AddProductModal({ }) {
  const showModal = useSelector(selectShowAddProductModal)
  const dispatch = useDispatch();

  const { value: title, bind: titleBind } = useInput('Title')
  const { value: details, bind: detailsBind } = useInput('Details')
  const { value: price, bind: priceBind } = useInput('Price')
  const { value: image, bind: imageBind } = useInput('Image Url')

  function onSubmitForm(e) {
    e.preventDefault();

    if (
      [title, image, price, details].some(item => item === '')
    ) return alert('Enter all new product values')

    dispatch(addProduct({ title, image, price, details }))

    dispatch(toggleAddProductModal())
  }

  return (
    <Modal
      isShow={showModal}
      toggleShowFn={toggleAddProductModal}
      elementSelectors={[
        '#dashboard-modal',
        '#show-dashboard-modal-btn',
        '#close-dashboard-modal-btn'
      ]}
    >
      <form
        onSubmit={onSubmitForm}
        className='grid  justify-items-center content-center gap-5 '
      >
        <h1 className="text-2xl font-semibold">Add Product Modal</h1>

        <input type="text" {...titleBind} />
        <input type="text" {...imageBind} />
        <input type="text" {...detailsBind} />
        <input type="number" {...priceBind} />
        
        <input type="submit" value="Add Product" />
      </form>
    </Modal>
  )
}

export default AddProductModal