import Logo from '../assets/Logo.png';
export default function Header(){
    return(
        <div className='flex items-center justify-center h-[200px] w-full bg-gray700'>
            <img src={Logo} alt="logo da Todo List" />
        </div>
    )
}