// 
import moment from "moment"
import { useEffect, useState } from "react"
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import { IconButton } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/client"
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

function Header() {

    const [time, setTime] = useState("")
    const [session] = useSession();
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
            setTime(moment().format('llll'))
        }, 1000)
    })


    return (
        <div className="z-30 w-full h-16 flex justify-between items-center sticky top-0 bg-white">
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
                        <Tooltip title="Support">
                            <HelpOutlineOutlinedIcon className="m-1 text-gray-500" />
                        </Tooltip>
                    </IconButton>
                    <IconButton>
                        <Tooltip title="Feedback">
                            <FeedbackOutlinedIcon className="m-1 text-gray-500" />
                        </Tooltip>
                    </IconButton>
                    <IconButton>
                        <Tooltip title="Settings">
                            <SettingsOutlinedIcon className="m-1 text-gray-500" />
                        </Tooltip>
                    </IconButton>
                </div>
                <div className="flex justify-center items-center space-x-2 mx-5">
                    <IconButton>
                        <Tooltip title="Google Apps">
                            <AppsIcon className="m-1 text-gray-500" />
                        </Tooltip>
                    </IconButton>

                    <Avatar onClick={handleClick} alt="Avatar" src={session ? session.user.image : ""} className="cursor-pointer" />
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
                        {!session ? (
                            <Typography sx={{ p: 2 }}><button onClick={signIn}> SignIn </button> </Typography>

                        ) : (
                            <div>
                                <Typography sx={{ p: 2 }}> Signed in as {session?.user.name} </Typography>
                                <Typography sx={{ p: 2 }}><button onClick={signOut}>Sign Out </button></Typography>
                            </div>
                        )}
                    </Popover>
                </div>
            </div>
        </div>
    )
}

export default Header
