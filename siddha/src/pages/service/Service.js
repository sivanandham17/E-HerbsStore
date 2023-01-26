import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/service.jpg'
import {trainers} from '../../data'
import Trainer from '../../components/Trainer'

import Footer from '../../components/Footer'
// import Programs from '../../components/programs'

import './service.css'
const Service = () => { 
  return (
    <div>
      {/* <Programs/> */}
      <Header title="Our Services" image={HeaderImage}>
      When we say we have a product for every project, we mean it. We are proud of our huge selection because it means we really have something for everyone. Let’s work together to find the right tiles at the right price for your project.
      </Header>
      <section className='trainers'>
        <div className='container trainers_container'>
          {
            trainers.map(({id, image, name, job, contact}) => {
              return <Trainer key={id} image={image} name={name} job={job} contact={contact}/>

            })
          }
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Service
