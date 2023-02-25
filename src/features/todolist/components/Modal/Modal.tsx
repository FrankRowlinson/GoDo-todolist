import ReactDOM from "react-dom"
import { Button } from "../"
import { CloseIcon } from "../../../icons"
import "./Modal.css"

interface IModalProps {
  children: React.ReactNode
  onClose: () => void
  onConfirm: () => void
}

export function Modal({ children, onConfirm, onClose }: IModalProps) {
  return ReactDOM.createPortal(
    <div className='modal-container' onClick={onClose}>
      <div className='modal paper' onClick={(event) => event.stopPropagation()}>
        <div className='modal-header'>
          <div>Подтвердите действие</div>
          <div>
            <Button
              variant='icon'
              label={<CloseIcon size='sm' />}
              onClick={onClose}
            />
          </div>
        </div>
        {children}
        <div className='modal-buttons'>
          <Button variant='primary' label='Отмена' onClick={onClose} />
          <Button variant='danger' label='Подтвердить' onClick={onConfirm} />
        </div>
      </div>
    </div>,
    document.getElementById("portal")!
  )
}
