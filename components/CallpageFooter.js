import { useEffect, useState } from "react"
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallEndIcon from '@mui/icons-material/CallEnd';
import InfoIcon from '@mui/icons-material/Info';
import GroupIcon from '@mui/icons-material/Group';
import MessageIcon from '@mui/icons-material/Message';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { IconButton } from '@mui/material';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import { useRouter } from 'next/router'

function CallpageFooter() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const router = useRouter()

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [])

    return (
        <div className="flex z-40 absolute bottom-0 justify-between items-center text-white bg-gray-800 h-20 w-screen">
            <div className="ml-5">
                <h2>{time}</h2>
            </div>
            <div className="space-x-6">
                <IconButton className="p-3 rounded-full ">
                    <MicIcon className="text-white " />
                </IconButton>
                <IconButton className="p-3 rounded-full ">
                    <VideocamIcon className="text-white " />
                </IconButton>
                <IconButton className="p-3 rounded-full ">
                    <PresentToAllIcon className="text-white " />
                </IconButton>
                <IconButton className="p-3 rounded-full ">
                    <ClosedCaptionIcon className="text-white " />
                </IconButton>
                <IconButton className="p-3 rounded-full ">
                    <MoreVertIcon className="text-white " />
                </IconButton>
                <IconButton onClick={() => router.push('/')} className="p-3 rounded-full bg-red-600">
                    <CallEndIcon className="text-white " />
                </IconButton>
            </div>
            <div className="mr-5">
                <IconButton className="p-3 rounded-full ">
                    <InfoIcon className="text-white " />
                </IconButton>
                <IconButton className="p-3 rounded-full ">
                    <GroupIcon className="text-white " />
                </IconButton>
                <IconButton className="p-3 rounded-full ">
                    <MessageIcon className="text-white " />
                </IconButton>
                <IconButton className="p-3 rounded-full ">
                    <DashboardIcon className="text-white " />
                </IconButton>
                <IconButton className="p-3 rounded-full ">
                    <VerifiedUserIcon className="text-white " />
                </IconButton>
            </div>
        </div>
    )
}

export default CallpageFooter
