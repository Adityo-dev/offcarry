function Video({ videoSrc }) {
  return (
    <section className="w-full rounded-lg overflow-hidden">
      <iframe
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
        src={videoSrc}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </section>
  );
}

export default Video;
