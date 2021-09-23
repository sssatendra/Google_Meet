import CallpageFooter from "../../components/CallpageFooter"
import CallpageHeader from "../../components/CallpageHeader"
import MeetingInfo from "../../components/MeetingInfo"
import Messenger from "../../components/Messenger"
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
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function Meet() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [showMessage, setShowMessage] = useState(false)
    const router = useRouter()
    const { pid } = router.query;
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [time])

    return (
        <div className="relative h-screen w-screen">
            <video className="h-screen w-screen object-cover absolute -z-10 " src="https://www.youtube.com/watch?v=DMRRC0rwO_I" controls>
            </video>

            <Messenger view={showMessage} />
            <MeetingInfo id={pid} />

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
                    <IconButton onClick={() => router.push('/')} >
                        <CallEndIcon className="text-white" />
                    </IconButton>
                </div>
                <div className="">
                    <IconButton className="p-3 rounded-full ">
                        <InfoIcon className="text-white " />
                    </IconButton>
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
                        <Typography sx={{ p: 2 }}>All users</Typography>
                    </Popover>
                    <IconButton aria-describedby={id} variant="contained" onClick={handleClick} className="p-3 rounded-full ">
                        <GroupIcon className="text-white " />
                    </IconButton>
                    <IconButton className="p-3 rounded-full  ">
                        <MessageIcon onClick={() => setShowMessage(!showMessage)} className="text-white " />
                    </IconButton>
                    <IconButton className="p-3 rounded-full ">
                        <DashboardIcon className="text-white " />
                    </IconButton>
                    <IconButton className="p-3 rounded-full ">
                        <VerifiedUserIcon className="text-white " />
                    </IconButton>
                </div>
            </div >
        </div>
    )
}

export default Meet
