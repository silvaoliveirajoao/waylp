import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import Image from "next/image"

export default function Footer() { 
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside>
                <Image 
                    src="/logo_sem_escrita.png"
                    width={60}
                    height={60}
                    alt="Way Turismo"
                />
                <p>
                Way Turismo LTDA
                <br />
                Fornecendo experiências inesquecíveis desde 2011
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Serviços</h6>
                <a href="#groups" className="link link-hover">Viagens em grupo</a>
                <a href="#storyTelling" className="link link-hover">Viagens personalizadas</a>
                <a href="#roadmaps" className="link link-hover">Roteiros especiais</a>
            </nav>
            <nav>
                <h6 className="footer-title">Agência</h6>
                <a href="#aboutUs" className="link link-hover">Sobre nós</a>
                <a href="" className="link link-hover">Contato</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <a href="" className="link link-hover flex items-center gap-1"><FaFacebook size={16} /> @wayturismo</a>
                <a href="" className="link link-hover flex items-center  gap-1"><FiInstagram size={16} /> @wayturismo</a>
                <a href="" className="link link-hover flex items-center gap-1"><FaWhatsapp size={16} /> @wayturismo</a>
            </nav>
        </footer>
    )
}