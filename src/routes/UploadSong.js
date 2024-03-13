import logo from '../assets/logo.svg';
import IconText from "../components/shared/IconText";
import {Icon} from "@iconify/react";
import TextWithHover from '../components/shared/TextWithHover';
import TextInput from '../components/shared/TextInput';


const UploadSong = () =>
{
   return (
    <div className="w-full h-full flex ">
     

     <div className="w-1/5 h-full bg-black flex flex-col justify-between pb-10">
        <div>

        
             <div className="flex items-center p-3 font-poppins">
                    <div className="logod">
                        <img src={logo} alt="applogo" width= {100} />
                    </div>
                   
                     <span className='text-white text-4xl'>EUPHONY</span> 
                    
            </div>
                        <div>
                            <IconText iconname={"material-symbols:home"}
                                displaytext={"Home"}
                                active
                            />
                        </div> 

                                <div>
                                    <IconText iconname={"material-symbols:search-rounded"}
                                        displaytext={"Search"}
                                    />
                                </div> 

                                        <div>
                                            <IconText iconname={"ph:book"}
                                                displaytext={"Your Library"}
                                            />
                                        </div> 
                                                    <div className='text-white font-bold text-md px-6 mt-7 mb-3'>Your Collection</div>
                                                    <div>
                                                            <IconText iconname={"majesticons:playlist"}
                                                                displaytext={"Custom Playlist"}
                                                            />
                                                    </div> 

                                                        <div>
                                                                <IconText iconname={"icon-park-outline:like"}
                                                                    displaytext={"Liked Songs"}
                                                                />
                                                        </div> 

                                                                <div>
                                                                        <IconText iconname={"material-symbols-light:artist"}
                                                                            displaytext={"My Music"}
                                                                        />
                                                                </div>
         </div>
                                                                       <div className='px-5'>
                                                                            <div className='border border-gray-100 text-white w-2/5 px-2 flex px-1 py-1 rounded-full items-center justify-center hover:border-red cursor-pointer'>
                                                                            <Icon icon="ooui:globe"/>
                                                                                <div className='ml-2 text-sm font-semibold'>
                                                                                    English
                                                                                </div>
                                                                            
                                                                            
                                                                            </div> 
                                                                       </div> 


    </div>

                <div className="h-full w-4/5 bg-app-black overflow-auto">
             
                    <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end ">
                        <span className='text-white border border-gray-600 w-4/5 p-2 rounded-full'
                        placeholder='Search'
                        >Search</span>
                            <div className='w-1/2 flex h-full'>
                                
                           
                                <div className='w-3/5 flex justify-around items-center'>
                                   
                                   
                                    {/* <TextWithHover displaytext={"Premium"} />
                                    <TextWithHover displaytext={"Support"} />
                                    <TextWithHover displaytext={"Download"} /> */}
                                    <div className="h-1/2 border-r border-white"></div>
                                </div>
                                        <div className='w-2/5 flex justify-around h-full items-center'>
                                               <TextWithHover displaytext={"Upload Song"} />
                                                <button className='bg-white w-10 h-10 p-8 flex items-center justify-center rounded-full font-semibold text-lg cursor-pointer hover:bg-red-600'>
                                                UD </button>
                                        </div>
                
                            </div>
                    </div>
                            <div className="content p-8 pt-0 overflow-auto">
                                   <div className='text-2xl font-semibold mb-5 text-white mt-8'>Upload Your Music</div>
                                   <div className='w-2/3 flex space-x-3'>
                                    <div className='w-1/2'>
                                   <TextInput label="Name"
                                            labelClassName={"text-white"}
                                            placeholder="Name"
                                   />
                                   </div>
                                   <div className='w-1/2'>
                                   <TextInput
                                   label="Thumbnail"
                                   labelClassName={"text-white"}
                                   placeholder="Thumbnail"
                                   />
                                   </div>
                                   </div>
                                   
                           
                            </div>
                               
                               

                 </div>

    </div>

   )

   
};





export default UploadSong; 