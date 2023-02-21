

export const Footer = () => {
    return (
        <div className="flex justify-around items-center">
            <div className=' footerline  z-[0]' ></div>
           
            <a className="logo top-[4381px] absolute  left-[306px] ">kirin</a>
            <a className=" footerText  left-[549px] top-[4392px]"> Main</a>
            <a className=" footerText  left-[731px] top-[4392px]"> Thanks for</a>
            <a className=" footerText  left-[925px] top-[4392px]"> contact</a>
            <a className=" footerText  left-[1198px] top-[4392px]"> Join our newsletter</a>
                
            <div >
                <a className="footerSecondaryText  left-[549px] top-[4450px]" >home</a>
                <a className="footerSecondaryText  left-[549px] top-[4490px]" >about</a>
                <a className="footerSecondaryText  left-[549px] top-[4530px]" >Buy Merch</a>
            </div>
           
            <div >
                <a className="footerSecondaryText  left-[735px] top-[4450px]" >Ilman</a>
                <a className="footerSecondaryText  left-[735px] top-[4490px]" >Stas</a>
                <a className="footerSecondaryText  left-[735px] top-[4530px]" >Ramadan</a>
            </div>

            <div >
                <a className="footerSecondaryText  left-[925px] top-[4450px]" >email</a>
                <a className="footerSecondaryText  left-[925px] top-[4490px]" >Instagram</a>
                <a className="footerSecondaryText  left-[925px] top-[4530px]" >LindkedIn</a>
            </div>


            <input
                type="text"
                name="input"
                placeholder="Email Address" 
                className=" opacity-10  h-[66px] w-[360px] top-[4457px] absolute bg-gray-300 rounded-full left-[1160px]  placeholder:italic placeholder:text-black placeholder:text-bold block   border border-slate-300  py-2 pl-9 pr-3  focus:outline-none focus:border-white focus:ring-white focus:ring-1 sm:text-xl "></input>

            
        </div>
       
    );
};