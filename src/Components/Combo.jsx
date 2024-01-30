import React from 'react'
import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/solid'

export default function Combo() {
    const people =[
        {id:1, name: 'Matt'},
        {id:2, name: 'Collin'},
        {id:3, name: 'Ola'},
        {id:4, name: 'Casy'}
    ]

    const [selectedPerson, setSelectedPerson] = useState(people[0])
    const [query, setQuery] = useState('')
    const filteredPeople =
    query === ''
    ? people
    : people.filter((person) => {
        return person.name.toLowerCase().includes(query.toLowerCase())
    })
  return (
    <section className="combobox py-28">
        <div className="container">
            <div className="relative">
                <Combobox value={selectedPerson} onChange={setSelectedPerson}>
                    <div className="relative shadow-md">
                        <Combobox.Input className="block w-full border-0 ring-0 rounded-md focus:ring-0" onChange={(event) => setQuery(event.target.value)} displayValue={(person)=> person.name} />
                        <Combobox.Button className="flex items-center pr-2 absolute inset-y-0 right-0">
                            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Combobox.Button>
                    </div>
                    <Combobox.Options className="absolute block w-full mt-2 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        {filteredPeople.map((person) => (
                            <Combobox.Option key={person.id} value={person} className="text-slate-900 py-1 relative cusor-default select-none px-4 hover:bg-seaGreen hover:text-white">
                                {person.name}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                </Combobox>
            </div>            
        </div>
    </section>
  )
}
