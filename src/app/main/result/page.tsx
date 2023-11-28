'use client';

import React from 'react'

import useStore from '@/app/atoms/useStore'

const ResultPage = () => {
  const questionAnswers = useStore(state => state.questionAnswer);

  return (
    <div>page</div>
  )
}

export default ResultPage