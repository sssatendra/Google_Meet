import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Fab from '@mui/material/Fab';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useSession } from "next-auth/client"
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';


function MeetingInfo({ id }) {
    const [session] = useSession();
    const [show, setShow] = useState(true)

    return (
        <div className={show ? "absolute transform duration-500 bg-white top-10 left-10 z-10 rounded-lg w-80" : "absolute top-10 transform duration-500  bg-white -left-64 z-10 rounded-lg w-80"}>
            <div className="flex justify-between items-center p-2 px-5 mt-3" >
                <h2 className="font-semibold text-xl text-gray-700">Your meeting's ready</h2>
                <IconButton className={!show && "rotate-45"} onClick={() => setShow(!show)}>
                    <CloseIcon className="transform duration-500" />
                </IconButton>
            </div>
            <div className="mx-5 mb-6">
                <Fab variant="extended" color="primary">
                    <PersonAddIcon sx={{ mr: 1 }} />
                    Add user
                </Fab>
            </div>
            <p className="px-4 text-gray-600">Or share this meeting link with others you want in the meeting</p>
            <div className="flex justify-center items-center mx-2 my-3 bg-gray-200 rounded-md shadow-md">
                <input value={id} className="flex-grow px-4 py-3 bg-gray-200 outline-none" />
                <IconButton className="p-3">
                    <ContentCopyIcon />
                </IconButton>
            </div>
            <div className="flex justify-center items-center py-3">
                <VerifiedUserIcon className="text-blue-600 mx-2" />
                <p className="text-xs text-gray-500">People who use this meeting link must get your permission before they can join.</p>
            </div>
            {!session ? null : (
                <p className="text-xs text-gray-500 text-center pb-3">Joined as {session?.user.name}  </p>)}
        </div>
    )
}

export default MeetingInfo
