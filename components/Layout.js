import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import KeyboardIcon from '@mui/icons-material/Keyboard';

function Layout() {
    return (
        <div className="z-10 flex flex-col lg:flex-row justify-center items-center ">
            <div className="lg:my-28 p-8 lg:w-2/4 space-y-4">
                <h2 className="font-semibold text-4xl">Premiun Video meetings.</h2>
                <h2 className="font-semibold text-4xl">Now Free for everyone</h2>
                <p className="font-semibold text-lg text-gray-500">We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.</p>
                <div className="flex flex-col md:flex-row transform duration-300">
                    <a href="#" className="bg-blue-600 mb-5 md:mb-0 text-center text-white text-sm active:scale-90 font-semibold p-3 rounded-sm transform duration-300 md:mr-5" >
                        <VideoCameraBackIcon className="mx-2" />
                        New meeting
                    </a>
                    <a href="#" className="border-gray-400 border rounded-sm flex-grow"  >
                        <KeyboardIcon className="mx-3 text-gray-600" />
                        <input className="py-3 outline-none max-w-lg" type="text" placeholder="Enter the Meeting Link" />
                    </a>
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
