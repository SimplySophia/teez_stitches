import React from 'react';
import LightButton from '../assets/toggle/light_mode.png';
import DarkButton from '../assets/toggle/dark_mode.png';

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') 
        : 'light'
    );

    const element = document.documentElement;
    console.log(element);

    React.useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            element.classList.add('dark');
        } else {
            element.classList.remove('dark')
        }
    });
  return (
    <div className='relative'>
        <img
            onClick={() => setTheme(theme === 'dark' ? 'light' : 
            'dark')} 
            src={LightButton} 
            alt='light button' 
            className={`w-12 cursor-pointer absolute right-0 z-10 ${
               theme === 'dark' ? 'opacity-0' : 'opacity-100'
               } transition-all duration-300`} 
            />
        <img 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 
            'dark')}     
            src={DarkButton} 
            alt='light button' 
            className={`w-12 cursor-pointer
            `} 
        />
    </div>
  )
}

export default DarkMode;