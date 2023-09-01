import React from 'react'

const CheckoutInput = ({ labelInput, typeInput, msgError, idInput, state, setState, regExpressions, validateEmailFunct }) => {

  const validation = ({ target }) => {
    if (state.field.length > 0) {
      if (regExpressions) {
        if (regExpressions.test(state.field)) {
          setState({ ...state, valid: 'true' })
          target.style.border = 'none'
        } else {
          setState({ ...state, valid: 'false' })
          target.style.border = '2.5px solid var(--colorError)'
        }
      }
    }
    if (validateEmailFunct) {
      validateEmailFunct()
    }
  }

  return (
    <div className="form-floating mb-3">
      <input type={typeInput} className="form-control"
        id={idInput} placeholder={labelInput}
        value={state.field}
        onChange={({ target }) => setState({ ...state, field: target.value })}
        onFocus={validation}
        onKeyUp={validation}
        onBlur={validation}
        autoComplete='true'
        required maxLength='18' />
      <label htmlFor={idInput}>{labelInput}</label>
      {(state.valid === 'true') && <i className="bi bi-check-circle-fill iconSuccess"></i>}
      {(state.valid === 'false') && <><i className="bi bi-x-circle-fill iconError"></i>
        <div className='msgErrorInput'>{msgError}</div></>}
    </div>
  )
}

export default CheckoutInput

