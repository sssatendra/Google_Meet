import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Messenger() {

    return (
        <div className="relative w-screen h-screen">
            <div className="absolute right-0 top-10 w-4/12 h-4/5 bg-white rounded-lg px-8 py-5 space-y-4">
                <h2 className="text-gray-600 ">In-Call-Messages</h2>
                <div className="flex justify-between items-center bg-gray-500 bg-opacity-20 px-6 rounded-sm">
                    <h2 className='text-gray-900'>Let Everyone Send Message </h2>
                    <Switch {...label} defaultChecked />
                </div>
            </div>
        </div>
    )
}

export default Messenger
