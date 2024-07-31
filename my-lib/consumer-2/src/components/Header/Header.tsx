import { FC } from 'react'
import './styles.css'

interface IHeader {
    className?: string
}

const Header: FC<IHeader> = ({ className }) => {
    return (
        <header className='header'>
            <div className={`overlay ${className}`}>
                <h1 className='title'>Simply The Best</h1>
                <h3 className='description'>Reasons for Choosing US</h3>
                <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
                <br />
                <button className='button'>READ MORE</button>
            </div>
        </header>
    )
}

export default Header