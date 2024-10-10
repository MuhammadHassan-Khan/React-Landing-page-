function Navbar() {
    return(
        <>
<nav className='flex flex align-item-center justify-between text-center font-normal bg-black text-white'>
<div>
  <img scr="../public/logo512.png"/>
</div>
<div className='p-3 flex justify-betqween '>

<p className='p-3'>Home</p>
<p className='p-3 '>About</p>
<p className='p-3'>Our Team</p>
<p className='p-3'>Contact</p>
</div>
  <div>
      <p className='p-6'>  Menu</p>
  </div>
</nav>

 </>
    )
}

export default Navbar