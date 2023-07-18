import HouseIcon from "../../img/houseIcon.ico"

const IconTitle = () => {
  return (
    <div className="titleStrip py-4 d-flex justify-content-center align-items-center">
      <div className="icono mx-2">
        <img className="w-100" src={HouseIcon} alt="ícono de la tienda" />
      </div>
      <h1 className="mx-1">Casa De Instrumentos Musicales</h1>
    </div>
  )
}
export default IconTitle;