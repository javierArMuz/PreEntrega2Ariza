import React, { useState } from 'react'
import './CheckoutForm.css'
import CheckoutInput from '../CheckoutInput/CheckoutInput'
import { regExpressions } from './regExpressions'

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState({ field: '', valid: null })
  const [lastName, setLastName] = useState({ field: '', valid: null })
  const [email, setEmail] = useState({ field: '', valid: null })
  const [validateEmail, setValidateEmail] = useState({ field: '', valid: null })
  const [phone, setPhone] = useState({ field: '', valid: null })
  const [terms, setTerms] = useState(false)

  const validateEmailFunct = () => {
    if (email.field.length > 0) {
      if (email.field !== validateEmail.field) {
        setValidateEmail((prev) => {
          return { ...prev, valid: 'false' }
        })
      } else {
        setValidateEmail((prev) => {
          return { ...prev, valid: 'true' }
        })
      }
    }
  }

  const handleConfirm = (e) => {
    e.preventDefault()

    const userData = {
      name, lastName, email, phone
    }
    onConfirm(userData)
  }

  return (
    <div className='container'>
      <h4 className='my-3'>Formulario de Pago</h4>
      <h5>Datos del Cliente:</h5>
      <form onSubmit={handleConfirm} className='form'>
        <section>
          <CheckoutInput labelInput='Nombre' typeInput='text'
            msgError='Debe contener letras, de 3 a 18 dígitos'
            idInput='name' state={name} setState={setName}
            regExpressions={regExpressions.name}
          />
          <CheckoutInput labelInput='Apellido' typeInput='text'
            msgError='Debe contener letras, de 3 a 18 dígitos'
            idInput='lastname' state={lastName} setState={setLastName}
            regExpressions={regExpressions.name}
          />
          <CheckoutInput labelInput='Correo' typeInput='email'
            msgError='Puede contener letras, números, puntos, guiones y guion bajo'
            idInput='email' state={email} setState={setEmail}
            validateEmailFunct={validateEmailFunct}
            regExpressions={regExpressions.email}
          />
          <CheckoutInput labelInput='Digite nuevamente su Correo' typeInput='email'
            msgError='Debe coincidir con el correo anterior'
            idInput='validateemail' state={validateEmail} setState={setValidateEmail}
            validateEmailFunct={validateEmailFunct}
          />
          <CheckoutInput labelInput='Celular' typeInput='number'
            msgError='Debe contener de 10 a 11 dígitos'
            idInput='phone' state={phone} setState={setPhone}
            regExpressions={regExpressions.phone}
          />
        </section>
        <label className='mb-2'>
          <input type="checkbox" name="terms"
            id="terms" className='me-1'
            required
            checked={terms}
            onChange={({ target }) => setTerms(target.checked)} />
          Acepto los Términos y Condiciones
        </label>
        <div>
          {(name.valid === 'true' && lastName.valid === 'true'
            && validateEmail.valid === 'true' && phone.valid === 'true'
            && terms === true)
            ? <button className="btn text-white w-100" type="submit" disabled={false}>Crear Orden</button>
            : <button className="btn text-white w-100" type="submit" disabled>Favor rellene todos los campos correctamente</button>}
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm