import React from 'react'
import useStyles from './styles'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getObj } from '../actions/object'
import { useSelector } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    
    useEffect(() => {
      dispatch(getObj())
    }, [dispatch])

    const {people} = useSelector(state => state.object)
    console.log(people)
    if(people.length === 0) return null

  return (
    <div>
      {people.length}
      <br/>
      {people.map((p, i) => {
        return(<p key={i}>{i}.&nbsp;{p.title}</p>)
      })}
    </div>
  )
}

export default Home