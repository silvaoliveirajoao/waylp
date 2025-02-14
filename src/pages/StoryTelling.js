import React from 'react';
import { MdFlightTakeoff } from "react-icons/md";
import { MdOutlineTravelExplore } from "react-icons/md";
import { LiaMapMarkedSolid } from "react-icons/lia";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { VscChecklist } from "react-icons/vsc";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import Form from "../components/Form";

const mensagem = encodeURIComponent("Olá, estava no site da Way e queria saber mais sobre os serviços oferecidos.");

const TimelineStep = ({ icon, title, description, position = "right", lineColor }) => {
  return (
    <div className="flex items-center">
      {/* conteúdo = left */}
      {position === "left" && (
        <div className="flex text-right">
          <div className="max-w-md ml-auto">
            <h3 className="text-base text-gray-600 font-semibold mb-2 text-left md:text-lg italic">{title}</h3>
            <p className="text-xs text-gray-600 text-left md:text-base">{description}</p>
          </div>
          <div className='flex items-center ml-2'>
            <div className="w-2 h-2 rounded-full bg-teal-100"></div>
            <div className="h-px w-16 bg-teal-100"></div>
          </div>
        </div>
      )}

      {/* centro com o ícone */}
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center md:w-24 md:h-24">
          {icon}
        </div>
        {/* Vertical connecting line */}
        <div className={`absolute left-1/2 -translate-x-1/2 w-px h-32 min:h-2 ${lineColor}`}></div>
      </div>

      {/* conteúdo = right */}
      {position === "right" && (
        <div className="flex">
          <div className='flex items-center mr-2'>
            <div className="h-px w-16 bg-teal-100"></div>
            <div className="w-2 h-2 rounded-full bg-teal-100"></div>
          </div>
          <div className="max-w-md">
            <h3 className="text-base text-gray-600 font-semibold mb-2 text-right md:text-lg italic">{title}</h3>
            <p className="text-xs text-gray-600 text-right md:text-base">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const StoryTelling = () => {
  return (
    <div id="storyTelling" className="container mx-auto px-4">
      <div id="header" className="w-full flex flex-col items-center p-6">
        <MdFlightTakeoff 
          size={32}
          color="#374151"
        />
        <h2 className="font-semibold text-2xl text-cyan-400">
            Como funciona?
        </h2>
        <h3 className="font-semibold text-2xl text-gray-700 text-center">
            Momentos personalizados com a Way Turismo!
        </h3>
      </div>  
      <div className="flex flex-col md:items-center">
        {/* primeiro passo */}
        <div className=''>
          <TimelineStep
            position="left"
            icon={
              <BsChatDots 
               size={32}
               color='#44403c'
              />
            }
            title="Tudo começa com uma conversa!"
            description="Assim que você entra em contato conosco, seja pelo e-mail, WhatsApp, ou presencialmente, nossa equipe já começa a entender suas necessidades e sonhos de viagem. Quer uma viagem em grupo para explorar as belezas da Europa ou um roteiro personalizado para descobrir os Lençóis Maranhenses? Estamos prontas para ouvir você."
            lineColor="bg-teal-100"
          />
        </div>

        {/* segundo passo */}
        <div className='my-16 md:my-24'>
          <TimelineStep
            position="right"
            icon={
              <MdOutlineTravelExplore 
                size={32} 
                color='#44403c'
              />
            }
            title="Cada destino, uma nova descoberta."
            description="Nesta fase, a Way Turismo apresenta uma seleção de destinos incríveis que atendem ao seu perfil de viajante. Somos especialistas em lugares como Europa, Lençóis Maranhenses, e Curaçao, mas também oferecemos opções ao redor do mundo, desde grandes centros culturais até refúgios exóticos. Tudo sempre feito com o máximo de personalização e exclusividade."
            lineColor="bg-teal-100"
          />
        </div>

        {/* terceiro passo */}
        <div>
          <TimelineStep
            position="left"
            icon={
              <LiaMapMarkedSolid
                size={32}
                color='#44403c'
              />
            }
            title="Roteiros únicos, feitos sob medida"
            description="Após a escolha dos destinos, montamos um roteiro completo, detalhando cada passo da sua viagem. Isso inclui a escolha de hospedagens, transporte, passeios e atividades locais que vão transformar sua viagem em uma experiência única. Nosso diferencial está na qualidade dos roteiros, cuidadosamente planejados com base em nossas experiências e na expertise de nossa equipe."
            lineColor="bg-teal-100"
          />
        </div>

        {/* quarto passo */}
        <div className='my-16 md:my-20'>
          <TimelineStep
            position="right"
            icon={
              <HiOutlineClipboardDocumentCheck 
                size={32}
                color='#44403c'
              />
            }
            title="Documentação e Reservas - Cuidamos de Tudo para Você"
            description="Antes da sua partida, nossa equipe fará um checklist completo, garantindo que todos os itens estejam em ordem: passagens emitidas, hospedagens confirmadas e assistência 24 horas disponível. Este cuidado final é o que garante que sua experiência seja perfeita, do início ao fim."
            lineColor="bg-teal-100"
          />
        </div>

        {/* quinto passo */}
        <div className='mt-5 md:mb-5'>
          <TimelineStep
            position="left"
            icon={
              <VscChecklist 
                size={32}
                color='#44403c'
              />
            }
            title="Tudo pronto para sua grande aventura."
            description="Antes da sua partida, nossa equipe fará um checklist completo, garantindo que todos os itens estejam em ordem: passagens emitidas, hospedagens confirmadas e assistência 24 horas disponível. Este cuidado final é o que garante que sua experiência seja perfeita, do início ao fim."
            lineColor="bg-teal-100"
          />
        </div>
        
        {/* sexto passo */}
        <div className='mt-20'>
          <TimelineStep
            position="right"
            icon={
              <MdOutlineSupportAgent 
                size={32}
                color='#44403c'
              />
            }
            title="Sempre ao seu lado, onde quer que você esteja."
            description="Mesmo durante a viagem, a Way Turismo oferece suporte total. Nossa equipe está disponível para ajudar em qualquer imprevisto ou dúvida, assegurando que você aproveite cada momento da sua jornada com total tranquilidade."
          />
        </div>
      </div>
      <div className='w-full my-6 flex flex-row items-center justify-center gap-4 md:gap-6 lg:gap-12'>
      <a 
        href={`https://wa.me/5547991480037?text=${mensagem}`}
        target="_blank"
        rel="noopener noreferrer">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-teal-700 text-white border-teal-600 shadow-md hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75">
            Entrar em contato agora!
          </button>
        </a>
        <Form />
      </div>
    </div>
  );
};

export default StoryTelling;