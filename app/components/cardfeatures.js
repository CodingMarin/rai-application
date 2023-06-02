import Image from 'next/image'

export default function Card({ image, alt, title, description }) {
    return (
        <div className='card col-lg-3 col-md-6 border mb-10' style={{ width: 288 }}>
            <Image
                className='card-img-top'
                alt={alt}
                src={image}
                width={296}
                height={180}
            />
            <div className='card-body'>
                <h5 className='card-title'>
                    {title}
                </h5>
                <p className='font-small card-text text-secondary'>
                    {description}
                </p>
                <a className='text-primary c-p'>Go somewhere -{'>'} </a>
            </div>
        </div>
    )
}