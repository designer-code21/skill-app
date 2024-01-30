import React, {useState} from 'react'

export default function CustomTabs() {
    function classNames(...classes){
        return classes.filter(Boolean).join(' ');
    }
    const [activeTab, setActiveTab] = useState(1);
    const toggleTabHandler = (e) =>{
        setActiveTab(e);
    }
    const buttonGroup =[
        {id:1, buttonName:"Tab 1"},
        {id:2, buttonName:"Tab 2"},
        {id:3, buttonName:"Tab 3"}
    ]
    const TabPanel =[
        {id:1, head: "Hello World 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"},
        {id:2, head: "Hello World 2", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"},
        {id:3, head: "Hello World 3", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"}
    ]
  return (
    <section className='tabs-wrap py-8'>
        <div className="toggle-btn-box flex space-x-1 mb-6">
            {buttonGroup.map((tab,idx)=>(
                <button key={idx} className={classNames("tabs py-2 px-8 rounded-lg", activeTab === (tab.id) ? "active bg-purple-900 text-purple-100": "bg-purple-100 text-purple-900")} onClick={()=> toggleTabHandler(tab.id)}>{tab.buttonName}</button>
            ))} 
        </div>
        <div className="tab-content-box p-8 border-2 border-slate-200 rounded-xl">
            {TabPanel.map((tabPanel, idx)=>(
            <div key={idx} className={classNames("tab-content", activeTab === (tabPanel.id) ? "block": "hidden")}>
                <h1 className='font-medium text-2xl mb-4'>{tabPanel.head}</h1>
                <p className='text-base font-medium'>{tabPanel.text}</p>
            </div>
            ))}
        </div>
    </section>
  )
}
