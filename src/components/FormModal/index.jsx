import * as Styles from "./styles"
import Modal from "react-modal"

import emailjs from 'emailjs-com'
import apiKeys from '../../services/apikeys'

import { MdHighlightOff } from "react-icons/md"
import React from "react"

export function FormModal({
  isOpen,
  onRequestClose
}) {
  const [sending, setSending] = React.useState(false)
  const [emailResponse, setemailResponse] = React.useState('')
  const [formData, setFormData] = React.useState({
    name: '',
    email: ''
  })

  const handleInputChange = e => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    emailjs.send('gmail', apiKeys.TEMPLATE_ID, formData, {}, apiKeys.USER_ID)
      .then((response) => {
        setemailResponse('Email enviado com sucesso')
        setSending(false)
      })
      .catch(error => {
        console.warn(error)
        setemailResponse('OPS! Alguma falha ocorreu ao enviar seu email')
        setSending(false)
      })
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Styles.Container>
        <MdHighlightOff 
          size={32}
          className="close_button"
          onClick={onRequestClose}
        />
        <Styles.Title>
          Enviar selecionados por email!
        </Styles.Title>
        {emailResponse}
        {sending
          ? <>
            <p>Enviando seu email!</p>
          </>
          : <form
            onSubmit={ e => handleFormSubmit(e)}
          >
            <input
              type="text"
              required
              placeholder="Nome"
              name='name'
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              required
              name='email'
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-secondary"
            >
              Enviar por email
            </button>
          </form>
        }
      </Styles.Container>
    </Modal>
  )
}