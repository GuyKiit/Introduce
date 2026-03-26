const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Intent Behind the Code</h2>
          <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            <p>
              My journey started with a fascination for how bits and bytes could create meaningful human experiences. I don't just write functions, I architect digital solutions with a focus on precision, scalability, and user intent.
            </p>
            <p>
              As a recent graduate, I've spent thousands of hours refining my craft in the React ecosystem, finding beauty in the logic of state management and the efficiency of cloud-native deployments.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          {/* เพิ่ม group และบรรทัด hover:scale-[1.02] เพื่อให้ตัวกรอบขยับนิดๆ หรือไม่ใส่ก็ได้ครับ */}
          <div className="relative w-72 h-80 rounded-2xl overflow-hidden glass p-2 shadow-2xl group transition-transform duration-500">

            {/* เพิ่ม transition-transform duration-500 และ group-hover:scale-110 */}
            <img
              src="https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbSFsFFh2P8F4Qvjl5avopBgNsFWzLW4ZyfnE9QnrPPnwEwSlUXPhN.jpg"
              alt="Kittiwin Intanil Portrait"
              className="w-full h-full object-cover rounded-xl object-top transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
