import { faSquareFacebook, faSquareLinkedin, faSquareWhatsapp, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const FloatingContact = () => {
    return (
        <>
            <div className="fixed bottom-5 left-10 flex flex-col items-center z-10 ">
                <div>
                    <ul className="flex flex-col-reverse items-center space-y-2 group">
                        <li className="">
                            <Link href={'mailto:timothynjau28@gmail.com'} target="_blank">
                            <FontAwesomeIcon icon={faMessage} className="text-6xl text-[#6a23dd] hover:scale-110 transition-transform" />
                            </Link>
                        </li>
                        <li className="opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                            <Link href={'https://facebook.com'} target="_blank">
                                <FontAwesomeIcon icon={faSquareFacebook} className="text-6xl text-blue-800 hover:scale-110 transition-transform" />
                            </Link>
                        </li>
                        <li className="opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                            <Link href={'https://whatsapp.com'} target="_blank">
                                <FontAwesomeIcon icon={faSquareWhatsapp}  className="text-6xl hover:scale-110 transition-transform"/>
                            </Link>
                        </li>
                        <li className="opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                            <Link href={'https://instagram.com'} target="_blank">
                                <FontAwesomeIcon icon={faSquareInstagram} className=" text-6xl hover:scale-110 transition-all" />
                            </Link>
                        </li>
                        <li className="opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                            <Link href={'https://linkedin.com'} target="_blank">
                                <FontAwesomeIcon icon={faSquareLinkedin} className="text-6xl text-blue-600 hover:scale-110 transition-transform" />
                            </Link>
                        </li>
                    </ul>                   
                </div>                
            </div>       
        </>
    )
};


export default FloatingContact;

