import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BsBook, BsBag} from 'react-icons/bs';
import {BiMessageRoundedEdit} from 'react-icons/bi';
const NavBar = () => {
  return (
    <nav className='z-50 fixed bottom-20 w-full overflow-hidden'>
      <div className="container mx-auto">
        <div className='w-full bg-white/20 h-[70px] backdrop-blur-2xl rounded-full max-w-[480px] mx-auto px-5 flex justify-between items-center text-2xl text-white'>
        <a  href='#home' className="tooltip cursor-pointer w-[60px] h-[60px] flex items-center justify-center" title="Home">
      <AiOutlineHome></AiOutlineHome>
    </a>
    <a title='About' href='#about' className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
     <AiOutlineUser></AiOutlineUser>
    </a>
    <a title='Skills' href='#skills' className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
      <BsBook></BsBook>
    </a>
    <a title='Projects' href='#projects' className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
      <BsBag></BsBag>
    </a>
    <a title='Contact Me' href='#contact' className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
      <BiMessageRoundedEdit></BiMessageRoundedEdit>
    </a>
    

        </div>
        
</div>
    </nav>
   
  );
};

export default NavBar;
