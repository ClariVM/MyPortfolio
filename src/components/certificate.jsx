import Carousel from 'react-bootstrap/Carousel';

const Certificates = () => {

    const certificateList = [
        {
            img:"/public/assets/certif-frontend.png", link:"https://www.credly.com/badges/098bf985-304d-4939-962b-153c30f8711c/public_url"
        },
        {
            img:"/public/assets/certif-backend.png", link:"https://www.credly.com/badges/d8403956-92ff-472f-8c77-7628042e74fd/public_url"
        },
        {
            img:"/public/assets/certif-react.png", link:"https://acrobat.adobe.com/id/urn:aaid:sc:US:c7f6024a-5892-4edb-ab45-a045ae6b315e"
        },
        {
            img:"/public/assets/certif-algoritmos.png", link:"https://todocodeacademy.com/certificate/1pz/"
        },
        {
            img:"/public/assets/certif-javaP.png", link:"https://todocodeacademy.com/certificate/ooj/"
        },
        {
            img:"/public/assets/certif-bd.png", link:"https://todocodeacademy.com/certificate/tvq/"
        },
        {
            img:"/public/assets/certif-poo.png", link:"https://todocodeacademy.com/certificate/4va/"
        },
    ]



  return (
    <div className='containerCertif'>
        <Carousel >
        {certificateList.map((certificate, index)=>(
            <Carousel.Item key={index}>
                <a href={certificate.link} target="_blank" rel="noopener noreferrer">
              <img src={certificate.img} />
              </a>
            </Carousel.Item>
        ))}
          </Carousel>
    </div>
  )
}

export default Certificates