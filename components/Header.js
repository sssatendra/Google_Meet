import Image from "next/image"
import moment from "moment"
import { useEffect, useState } from "react"
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import { IconButton } from "@mui/material";

function Header() {

    const [time, setTime] = useState("")

    useEffect(() => {
        setInterval(() => {
            setTime(moment().format('llll'))
        }, 1000)
    })

    return (
        <div className="z-50 w-full h-16 flex justify-between items-center sticky top-0 bg-white">
            <div className="flex justify-start items-center p-5">
                <img className="h-10 mt-2" src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png"
                />
                <h2 className="text-gray-600 font-medium p-1 text-2xl my-auto">Meet</h2>
            </div>
            <div className="flex justify-center items-center">
                <div className="text-lg hidden lg:flex">
                    <p className="text-gray-500 font-medium">{time} </p>
                </div>
                <div className="hidden md:flex justify-evenly items-center px-6 space-x-2 mr-2">
                    <IconButton>
                        <HelpOutlineOutlinedIcon className="m-1 text-gray-500" />
                    </IconButton>
                    <IconButton>
                        <FeedbackOutlinedIcon className="m-1 text-gray-500" />
                    </IconButton>
                    <IconButton>
                        <SettingsOutlinedIcon className="m-1 text-gray-500" />
                    </IconButton>
                </div>
                <div className="flex justify-center items-center space-x-2 mx-5">
                    <IconButton>
                        <AppsIcon className="m-1 text-gray-500" />
                    </IconButton>
                    <Avatar alt="Remy Sharp" src="" />
                </div>
            </div>
        </div>
    )
}

export default Header
