export default function HeroSection() {
  return (
    <div className="bg-gray-50 px-6 py-16 rounded-lg mt-10">
      <div className="text-center max-w-2xl max-md:max-w-md mx-auto">
        <div>
          <p className="text-sm font-bold text-green-600 mb-6">
            <span className="rotate-90 inline-block ml-2">|</span> درباره ما
          </p>
          <h2 className="md:text-5xl text-3xl font-extrabold md:!leading-[55px]">
            با خبرنامه بیشتر آشنا شوید
          </h2>
          <div className="mt-7">
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
