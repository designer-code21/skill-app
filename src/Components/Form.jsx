import React, {useState, useEffect} from 'react'
import { Combobox } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'


export default function Form() {
    const people =[
        {id:1, name: 'Demon'},
        {id:2, name:'Matt'},
        {id:3, name:"Loki"},
        {id:4, name: "Thor"}
    ];
    // const [people, setPeople] = useState([]);

    // useEffect(() => {
    //     // API query to get persons
    //     setPeople(res);
    // }, [])

    

    const [selectedPerson, setSelectedPerson] = useState(people[0])
    const [query, setQuery]= useState('')
    const filteredPeople = (query ==='') ? people : people.filter((person)=>{
        return person.name.toLowerCase().includes(query.toLowerCase())
    })
  return (
    <section className="form-wrap py-36">
        <div className="container">
            <div className="title text-center">
                <h2 className='text-slate-700 mb-8 text-4xl'>Choose your Topic</h2>
            </div>
            <div className="form-outer">
                <form action="">
                    <div className="relative max-w-lg mx-auto">
                        <Combobox value={selectedPerson} onChange={setSelectedPerson}>
                            <div className="relative leading-5 ">
                            <Combobox.Input className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 h-10 bg-gray-100  rounded-md" onChange={(event) => setQuery(event.target.value)} displayValue={(person) => person.name} />
                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <SelectorIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </Combobox.Button>
                            </div>
                            <Combobox.Options className="absolute w-full mt-3 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-auto">
                                {filteredPeople.length === 0 && query !== '' ? (
                                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                Nothing found.
                                                </div>
                                            ) : (
                                filteredPeople.map((person) => (
                                    <Combobox.Option key={person.id} value={person} className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                                        }`
                                    }>
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                className={`block truncate ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                }`}
                                                >
                                                {person.name}
                                                </span>
                                                {selected ? (
                                                <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                    active ? 'text-white' : 'text-teal-600'
                                                    }`}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                  ))
                                  )}
                            </Combobox.Options>
                        </Combobox>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
