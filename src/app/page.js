import Image from 'next/image'
import Nav from './Components/Nav'
import Loading from './Components/Loading'
import SearchBar from './Components/SearchBar'
import AddNewContactForm from './Components/AddNewContactForm'
import CreateNewContactButton from './Components/CreateNewContactButton'
import ContactList from './Components/ContactList'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import ContactCard from './Components/ContactCard'
import EditProfile from './Components/EditProfile'
config.autoAddCss = false;

export default function Home() {
  return (
    <>
    <Nav/>
    <div className='ml-60 mr-60 mt-4 flex justify-between'>
        <div>
        <p className='text-black text-5xl font-bold'>Stay</p>
        <p className='text-4xl font-bold text-[#7d2ae8]'>in touch</p>
        </div>
        <SearchBar/>
        <CreateNewContactButton/>
    </div>
    <ContactList/>
    <ContactCard/>
    <EditProfile/>
    <AddNewContactForm/>
    </>
  )
}
