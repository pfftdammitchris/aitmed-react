import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const useVitalsDisplay = ({ appointment }) => {
  const [vitalSigns, setVitalSigns] = useState(null)
  const vitalsDocId = appointment.document_present_history_illness
  const patientUserId = appointment.patient.user_id
  const vitalSignDocs = useSelector(
    (state) => state.aitmed.provider.patientDocuments,
    [vitalsDocId],
  )

  useEffect(() => {
    const data = vitalSignDocs[patientUserId]
    if (data && data.documents) {
      const patientDocs = data.documents || {}
      const vitalSignsData = patientDocs[vitalsDocId]
      if (vitalSignsData) setVitalSigns(vitalSignsData)
    }
  }, [appointment, vitalSignDocs])

  return {
    vitalSigns,
  }
}

export default useVitalsDisplay
