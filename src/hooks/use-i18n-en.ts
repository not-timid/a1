import { createContext, useContext } from 'react'
import rosetta from 'rosetta'
import en from '../locales/en.json'

export default function useI18nEn() {
  const Rosetta = rosetta({ en })
  Rosetta.locale('en')
  return useContext(createContext(Rosetta))
}
