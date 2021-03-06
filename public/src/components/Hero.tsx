import { Link } from "react-router-dom"
import TextButton from "./TextButton"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left leftSide">
        <h1>Portal Informasi Banjir di Sekitar Anda</h1>
        <p>
          ChiFlo merupakan <span className="orange_text">portal informasi seputar banjir yang terjadi
          disekitar lokasi anda.</span> ChiFlo juga memberikan pelayanan seputar jasa
          pembersihan pasca banjir dan Asuransi barang berharga.
        </p>
        <Link to={'/register'}><TextButton className="text-button" label="Register" /></Link>
      </div>
      <div className="hero__right rightSide">
        <img src="/hero.png" alt="icon" />
      </div>
    </div>
  )
}

export default Hero
