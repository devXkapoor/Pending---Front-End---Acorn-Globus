import { DownIcon } from "../CommonComponents/Icons"

const ProfileButton = () => {
    return (
        <>
            <div>
                <button>
                    <div className="flex flex-rw">
                        <span>ProfilePic</span>
                        <DownIcon />
                    </div>
                </button>
            </div>
        </>
    )
}

export default ProfileButton