import React from 'react'
import ReactDom from 'react-dom'


export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className='fixed inset-0 bg-slate-500 opacity-70 z-10' onClick={onClose}/>
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-10 p-4 w-fit rounded-md'>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}