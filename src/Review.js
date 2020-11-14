import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = people[index]

  const checkIndex = (index) => {
    if (index > people.length - 1) return 0
    if (index < 0) {
      return people.length - 1
    }
    return index
  }

  const prevPerson = () => {
    setIndex((oldIndex) => {
      const newIndex = oldIndex - 1
      return checkIndex(newIndex)
    })
  }

  const nextPerson = () => {
    setIndex((oldIndex) => {
      const newIndex = oldIndex + 1
      return checkIndex(newIndex)
    })
  }

  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length - 1)
    if (randomNum === index) {
      randomNum++
    }
    console.log(randomNum)
    setIndex(checkIndex(randomNum))
  }

  return (
    <>
      <article className='review'>
        <div className='img-container'>
          <img className='person-img' src={image} alt={name} />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div>
          <span className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </span>
          <span className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </span>
        </div>

        <button className='random-btn' onClick={randomPerson}>
          Suprise
        </button>
      </article>
    </>
  )
}

export default Review
