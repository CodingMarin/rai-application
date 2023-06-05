'use client'

import Image from 'next/image'
import Headersticky from './components/headersticky'
import Preloader from './components/preloader';

export default function Home() {

  return (
    <main>
      <Headersticky />
      <Image
        className='hero-blur-right'
        src='/hero_blur_right.svg'
        width={800}
        height={930}
        alt='bg-blue'
      />
      <section className='section-1 pt-30'>
        <div className='container'>
          <div className='col-lg-8 align-self-center'>
            <div className='title-post text-center'>
              <h2>Aumenta tu productividad con rai&nbsp;
                <Image
                  className='rotate-effect h'
                  src='/circle_take.svg'
                  alt='circle-blue'
                  width={60}
                  height={60}
                  priority
                />
              </h2>
              <p className='ml-20 mr-20 pt-30 pb-30'>Acelera tu negocio y mejora la atención al cliente con nuestros chatbots inteligentes. Convierte conversaciones en resultados y lleva tu empresa al siguiente nivel. ¡Descubrelo ahora!</p>
              <div className="justify-content-md-center pb-60">
                <div className="col-md-auto d-inline p-2">
                  <button
                    type='button'
                    onClick={() => router.push('/dashboard')}
                    className='btn-custom bg-primary rounded text-white font-small'
                  >
                    Empezar ahora
                  </button>
                </div>
                <div className="col-md-auto text-primary pb-40 d-inline p-2">
                  <button className='btn-custom bg-white border rounded font-small text-primary'>Contactanos</button>
                </div>
              </div>
            </div>
          </div>
          <div className='hero_platform align-self-center'>
            <Image
              className='mockup rounded pl-10 pr-10'
              src='/mockup.webp'
              alt='mockup'
              fill={true}
            />
          </div>
        </div>
      </section>
      <section id='features' className='align-self-center'>
        <div className='container mt-40 mb-50'>
          <div className='text-center pb-35'>
            <h1 className='font-weight-bold'>Features</h1>
          </div>
          <div className='row gap justify-content-center'>
            <div className='card col-lg-3 col-md-6 border' style={{ width: 288 }}>
              <Image
                className='card-img-top'
                alt='card-img'
                src='/picture-2.png'
                width={296}
                height={180}
              />
              <div className='card-body'>
                <h5 className='card-title'>
                  Booking engine
                </h5>
                <p className='font-small card-text text-secondary'>
                  Some quick example text to build on the card title and make up the bulk of the cards content.
                </p>
                <a className='text-primary c-p'>Go somewhere -{'>'} </a>
              </div>
            </div>
            <div className='card col-lg-3 col-md-6 border' style={{ width: 288 }}>
              <Image
                className='card-img-top'
                alt='card-img'
                src='/picture-1.png'
                width={296}
                height={180}
              />
              <div className='card-body'>
                <h5 className='card-title'>
                  Booking engine
                </h5>
                <p className='font-small card-text text-secondary'>
                  Some quick example text to build on the card title and make up the bulk of the cards content.
                </p>
                <a className='text-primary c-p'>Go somewhere -{'>'} </a>
              </div>
            </div>
            <div className='card col-lg-3 col-md-6 border' style={{ width: 288 }}>
              <Image
                className='card-img-top w-full'
                alt='card-img'
                src='/picture-3.png'
                width={296}
                height={180}
              />
              <div className='card-body'>
                <h5 className='card-title'>
                  Booking engine
                </h5>
                <p className='font-small card-text text-secondary'>
                  Some quick example text to build on the card title and make up the bulk of the cards content.
                </p>
                <a className='text-primary c-p'>Go somewhere -{'>'} </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="pt-50 pb-20 bg-grey align-self-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div class="sidebar-widget wow fadeInUp animated mb-30">
                <div class="widget-header-2 position-relative mb-30">
                  <p><strong>Sobre Nosotros</strong></p>
                </div>
                <div class="text-secondary">
                  <p>Start writing, no matter what. The water does not flow until the faucet is turned on.</p>
                  <p><strong class="color-black">Address</strong>123 Main Street New York, NY 10001</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="sidebar-widget widget_categories wow fadeInUp animated mb-30" data-wow-delay="0.1s">
                <div class="widget-header-2 position-relative mb-30">
                  <p><strong>Legal</strong></p>
                </div>
                <ul class="font-small">
                  <li class="cat-item cat-item-2 text-secondary"><a href="#" className='text-secondary'>Ayuda y Soporte</a></li>
                  <li class="cat-item cat-item-4 text-secondary"><a href="/privacy-policy" className='text-secondary'>Terminos y Condiciones</a></li>
                  <li class="cat-item cat-item-7 text-secondary"><a href="#" className='text-secondary'>Contacto</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="sidebar-widget widget_tagcloud wow fadeInUp animated mb-30" data-wow-delay="0.2s">
                <div class="widget-header-2 position-relative mb-30">
                  <p><strong>Creditos</strong></p>
                </div>
                <p class="float-md-left font-small text-muted">© 2023, Rai - ChatBot </p>
                <p class="float-md-right font-small text-muted">
                  Diseñado por <a href="" target="_blank">Alexander Marin</a> | Todos los derechos reservados
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Preloader></Preloader>
    </main>
  )
}
