import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useState } from "react";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import AddIcon from '@mui/icons-material/Add';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function Layout() {

    const [input, setInput] = useState()
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="z-10 flex flex-col lg:flex-row justify-evenly items-center ">
            <div className="mx-5 lg:my-20 lg:w-2/4 space-y-4">
                <h2 className="font-thin text-5xl">Premium Video meetings.</h2>
                <h2 className="font-thin text-5xl">Now Free for everyone.</h2>
                <p className="font-medium text-md text-gray-500">We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.</p>
                <div className="flex flex-col md:flex-row justify-start items-center transform duration-300">


                    <button aria-describedby={id} variant="contained" onClick={handleClick} className="bg-blue-600 mb-5 md:mb-0 text-center text-white text-sm active:scale-90 font-semibold p-3 rounded-sm transform duration-300 md:mr-5" >
                        <VideoCameraBackIcon className="mx-2" />
                        New meeting
                    </button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <div className="flex justify-center items-center flex-col">
                            <button className='hover:bg-gray-300 w-full flex justify-start items-center px-2'>
                                <InsertLinkIcon className="ml-2" />
                                <Typography sx={{ p: 2 }}>Create a meeting</Typography>
                            </button>
                            <button className='hover:bg-gray-300 w-full flex justify-start items-center px-2'>
                                <AddIcon className="ml-2" />
                                <Typography sx={{ p: 2 }}>Start an instant meeting</Typography>
                            </button>
                            <button className='hover:bg-gray-300 w-full flex justify-start items-center px-2'>
                                <CalendarTodayIcon className="ml-2" />
                                <Typography sx={{ p: 2 }}>Schedule in Google Calendar</Typography>
                            </button>
                        </div>
                    </Popover>
                    <a href="#" className="border-gray-400 border rounded-sm flex items-center pr-4"  >
                        <KeyboardIcon className="mx-3 text-gray-600" />
                        <input value={input} onChange={e => setInput(e.target.value)} className="py-3 outline-none max-w-lg" type="text" autoFocus placeholder="Enter a Code or Link" />
                    </a>
                    <button style={input ? { dispay: "flex" } : { display: "none" }} className="items-center font-semibold hover:text-blue-600 px-8">Join</button>
                </div>
            </div>
            <div className="p-8 my-12 max-w-md flex justify-center items-center">
                <Carousel
                    autoPlay={true}
                    emulateTouch={true}
                    infiniteLoop={true}
                    emulateTouch={true}
                    showThumbs={false}
                    showArrows={false}
                    showIndicators={false}
                >
                    <div className="">
                        <img src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg" />
                        <p className="legend">Get a link you can share</p>
                    </div>
                    <div>
                        <img src="https://www.gstatic.com/meet/user_edu_brady_bunch_light_81fa864771e5c1dd6c75abe020c61345.svg" />
                        <p className="legend">See everyone together</p>
                    </div>
                    <div>
                        <img src="https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg" />
                        <p className="legend">Plan ahead</p>
                    </div>
                    <div>
                        <img src="https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg" />
                        <p className="legend">Your Meeting is Safe</p>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Layout
