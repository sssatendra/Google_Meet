import CallpageFooter from "../../components/CallpageFooter"
import CallpageHeader from "../../components/CallpageHeader"
import MeetingInfo from "../../components/MeetingInfo"
import Messenger from "../../components/Messenger"

function Meet() {
    return (
        <div className="relative h-screen w-screen">
            <video className="h-screen w-screen object-cover absolute -z-10 " src="https://www.youtube.com/watch?v=DMRRC0rwO_I" controls>
            </video>
            {/* <CallpageHeader /> */}
            <CallpageFooter />
            <MeetingInfo />
            <Messenger />
        </div>
    )
}

export default Meet
