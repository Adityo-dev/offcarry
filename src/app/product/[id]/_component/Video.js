function Video() {
  return (
    <section className="w-full rounded-lg overflow-hidden">
      <video
        width="320"
        height="240"
        controls
        preload="none"
        className="w-full h-full 2xl:h-[600px] object-cover"
      >
        <source src="/video/video1.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

export default Video;
