import React from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from './Link'
import { SelectedPage } from '../types/types';

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void
}

export const Navbar = ({selectedPage, setSelectedPage}: Props) => {

  const flexBetween = "flex items-center justify-between"
  
  return (
    <div className='fixed top-0 z-30 w-full py-6 px-10'>
        <div className="flex justify-between">
            {/* left side */}
            <div>Logo</div>

            {/* right side */}
            <div className='justify-end'>
                <div className={`${flexBetween} gap-8 text-sm`}>
                    <Link 
                        page="Home" 
                        selectedPage={selectedPage} 
                        setSelectedPage={setSelectedPage}
                    />
                    <Link 
                        page="About" 
                        selectedPage={selectedPage} 
                        setSelectedPage={setSelectedPage}
                    />
                    <Link 
                        page="Projects"
                        selectedPage={selectedPage} 
                        setSelectedPage={setSelectedPage} 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
