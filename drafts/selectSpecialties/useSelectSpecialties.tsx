import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import api from 'api/client'
import { setSpecialties } from 'actions/aitmed'
import { SpecialtyObject } from 'types/providers'

const getTranslation = (specialty: SpecialtyObject): string => {
  let translation = ''
  if (specialty && specialty.translations) {
    translation = specialty.translations['en-US'] || ''
  }
  return translation
}

const useSelectSpecialties = ({ input } = {}) => {
  const dispatchAction = useDispatch()
  const [chosen, setChosen] = useState<string[]>([])
  const [fetching, setFetching] = useState<boolean>(false)
  const { ids, mapper: specialties } = useSelector(
    (state: any) => state.aitmed.specialties,
  )

  const push = (code: string) => {
    setChosen((prev: string[]) => [...prev, code])
  }

  const remove = (code: string) => {
    setChosen((prev) => prev.filter((c) => c !== code))
  }

  useEffect(() => {
    if (!ids.length) {
      if (!fetching) setFetching(true)
      api
        .fetchSpecialties()
        .then(
          (result: { ids: string[]; specialties: { [code: string]: any } }) => {
            if (fetching) setFetching(false)
            dispatchAction(
              setSpecialties({
                ids: result.ids,
                specialties: result.specialties,
              }),
            )
          }
        )
        .catch((error: any) => {
          if (fetching) setFetching(false)
          console.error(error)
        })
    }
    // prettier-ignore
  }, [fetching])

  useEffect(() => {
    input.onChange(chosen)
    // prettier-ignore
  }, [chosen])

  return {
    specialties,
    ids,
    chosen,
    fetching,
    push,
    remove,
    getTranslation,
  }
}

export default useSelectSpecialties
