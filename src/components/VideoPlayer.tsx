import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize,
  RotateCcw,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  videoId: string;
  thumbnail: string;
  title: string;
  className?: string;
}

const VideoPlayer = ({ videoId, thumbnail, title, className }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleFullscreen = useCallback(() => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
      setIsRotated(false);
    }
  }, [isFullscreen]);

  const handleRotate = () => {
    setIsRotated(!isRotated);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const closePlayer = () => {
    setIsPlaying(false);
    setIsFullscreen(false);
    setIsRotated(false);
  };

  return (
    <>
      {/* Thumbnail View */}
      <div
        ref={containerRef}
        className={cn(
          "relative overflow-hidden rounded-xl cursor-pointer group",
          className
        )}
        onClick={() => !isPlaying && handlePlay()}
        onMouseMove={handleMouseMove}
      >
        {!isPlaying ? (
          <>
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
            
            {/* Play Button */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/20 backdrop-blur-sm border-2 border-gold/50 flex items-center justify-center group-hover:bg-gold/30 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-gold ml-1" fill="currentColor" />
              </motion.div>
            </motion.div>

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <h3 className="font-heading text-xl md:text-2xl text-foreground">{title}</h3>
            </div>
          </>
        ) : null}
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            onMouseMove={handleMouseMove}
          >
            {/* Video Container */}
            <div
              className={cn(
                "relative w-full h-full flex items-center justify-center transition-transform duration-500",
                isRotated && "rotate-90"
              )}
              style={isRotated ? { 
                width: '100vh', 
                height: '100vw',
                maxWidth: '100vh',
                maxHeight: '100vw'
              } : undefined}
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&modestbranding=1&rel=0&showinfo=0`}
                title={title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Custom Controls Overlay */}
            <AnimatePresence>
              {showControls && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {/* Top Bar */}
                  <div className="absolute top-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-auto">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-lg md:text-xl text-white truncate pr-4">
                        {title}
                      </h3>
                      <button
                        onClick={closePlayer}
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <X className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Bottom Controls */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-auto">
                    <div className="flex items-center justify-center gap-4">
                      {/* Mute Toggle */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMuted(!isMuted)}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5 text-white" />
                        ) : (
                          <Volume2 className="w-5 h-5 text-white" />
                        )}
                      </motion.button>

                      {/* Play/Pause (visual only since YouTube controls playback) */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 rounded-full bg-gold/80 backdrop-blur-sm flex items-center justify-center hover:bg-gold transition-colors"
                      >
                        <Pause className="w-7 h-7 text-charcoal" />
                      </motion.button>

                      {/* Rotate Button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleRotate}
                        className={cn(
                          "w-12 h-12 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors",
                          isRotated ? "bg-gold text-charcoal" : "bg-white/10 text-white hover:bg-white/20"
                        )}
                      >
                        <RotateCcw className="w-5 h-5" />
                      </motion.button>

                      {/* Fullscreen Toggle */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleFullscreen}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        {isFullscreen ? (
                          <Minimize className="w-5 h-5 text-white" />
                        ) : (
                          <Maximize className="w-5 h-5 text-white" />
                        )}
                      </motion.button>
                    </div>

                    {/* Rotate Hint */}
                    {!isRotated && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white/60 text-sm mt-4"
                      >
                        Tap rotate for landscape view
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoPlayer;
