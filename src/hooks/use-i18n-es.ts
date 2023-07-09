import { createContext, useContext } from 'react'
import rosetta from 'rosetta'
import es from '../locales/es.json'

export default function useI18nEs() {
  const Rosetta = rosetta({ es })
  Rosetta.locale('es')
  const t = Rosetta.t
  return useContext(createContext(Rosetta))
}
