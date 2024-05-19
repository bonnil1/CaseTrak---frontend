import { useEffect, useState } from "react"

const Add = () => {

  const [form, setForm] =  useState("")

  useEffect(() => {
    const fetchForm = async () => {
        try {
          const response = await fetch(`http://localhost:4000/casefiles/new`);
          const html = await response.text()
          setForm(html);
        } catch (error) {
          console.log("Could not fetch form", error)
        }
    }
    fetchForm()
  }, [])

  return (
    <div dangerouslySetInnerHTML={{__html: form}}></div>
  )
}

export default Add