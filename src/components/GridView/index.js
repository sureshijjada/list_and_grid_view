import './index.css'

const GridView = props => {
  const {info} = props
  const {productTitle, image, badge, variants} = info

  const {v1} = variants[0]
  const {v2} = variants[1]
  const {v3} = variants[2]
  console.log(image)

  console.log(v1, v2, v3)

  return (
    <li className="Grid-li">
      <div className="img-badge">
        <p className="badge">{badge}</p>
        <img src={image} alt="Product-Img" className="image" />
      </div>
      <h1 className="productTitle">{productTitle}</h1>
    </li>
  )
}

export default GridView
