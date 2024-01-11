import './index.css'

const ListView = props => {
  const {info} = props
  const {productTitle, image, badge, variants} = info

  const {v1} = variants[0]
  const {v2} = variants[1]
  const {v3} = variants[2]

  return (
    <li className="list-li">
      <div className="img-badge">
        <p className="badge">{badge}</p>
        <img src={image} alt="Product-Img" className="image" />
      </div>
      <div className="productTitle-container">
        <h1 className="productTitle">{productTitle}</h1>
        <p className="variants">{v1}</p>
        <p className="variants">{v2}</p>
        <p className="variants">{v3}</p>
      </div>
    </li>
  )
}

export default ListView
