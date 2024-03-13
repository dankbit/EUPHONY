import logo from '../assets/logo.svg';
import IconText from "../components/shared/IconText";
import {Icon} from "@iconify/react";
import TextWithHover from '../components/shared/TextWithHover';
const focusCardsData = [{title:"Peaceful Piano",description:'Relax and indulge with beautiful piano pieces',imgurl:'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
,{title:"Deep Focus",description:'Warm music to focus on your task',imgurl:'https://media.istockphoto.com/id/1186369895/photo/woman-shoots-cloudy-sunset-view-in-the-mountains-through-a-smartphone.jpg?s=2048x2048&w=is&k=20&c=Uudl0Kb9YkmXB2TMjp7Oi_arzFp6EGLfoGUlhFDb7sk=' },
{title:"Eternal Soul",description:'Indulge your soul with warm music',imgurl:'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c291bHxlbnwwfHwwfHx8MA%3D%3D' },
{title:"Peaceful Piano",description:'Relax and indulge with beautiful piano pieces',imgurl:'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
{title:"Peaceful Piano",description:'Relax and indulge with beautiful piano pieces',imgurl:'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }]


const Home = () =>
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
                                                                            displaytext={"Favourite Artist"}
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
                                               <TextWithHover displaytext={"Sign Up"} />
                                                <button className='bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold text-lg cursor-pointer hover:bg-red-600'>
                                                Log In </button>
                                        </div>
                
                            </div>
                    </div>
                            <div className="content p-8 pt-0 overflow-auto">
                                  
                            <PlayListView  
                            titleText='Focus'
                            cardsData={focusCardsData}
                            />
                            <PlayListView  
                            titleText='Euphony PlayLists'
                            cardsData={focusCardsData}
                            />
                            <PlayListView  
                            titleText='Sounds Of India'
                            cardsData={focusCardsData}
                            />
                            </div>
                               
                               

                 </div>

    </div>

   )

   
};

const PlayListView = ({titleText,cardsData}) => {
    return ( 
    <div className='text-white mt-10 mb -5'>
        <div className='text-2xl font-semibold mb-5'> {titleText}</div>
        <div className='w-full flex justify-between space-x-4'>
            {
                cardsData.map((item)=> {
                    return (
                        <Card title={item.title} description={item.description} imgurl={item.imgurl} />
                    );
                }
                )
            }
           


        </div>


    </div>
    );
}; 

const Card = ({title,description,imgurl}) => {
    return (
        <div className='bg-black bg-opacity-40 w-1/5 p-4 rounded-lg'>
            <div className='pb-4 pt-2'>
                <img className='w-full rounded-md' src={imgurl} alt='label' />
            </div>
            <div className='text-white text-lg font-bold font-poppins py-3'>{title}</div>
            <div className='text-gray-500 text-md'>{description}</div>

        </div>
    );

};


export default Home;