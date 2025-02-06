export default function VideoLoop() {
    return (
      <div className="hidden lg:block lg:w-full bg-gray-500 lg:rounded-[32px]">
        <video 
          className="hidden lg:block lg:w-full lg:h-[100vh] rounded-[32px]"  
          autoPlay
          loop 
          muted 
          playsInline
        >
          <source src="feedbacks_video.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      </div>
    );
  }
  