import MasonryGallery from "./MasonryGallery";
import RatingWorks from "./RatingWorks";
import Footer from "./Footer";
import { motion } from "framer-motion";
import ReelsSection from "./ReelsSection";
import BecomePartner from "./BecomePartner";

function NewWorkWithUs() {
  return (
    <section>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center  mt-24 "
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Work <span className="text-green-800">with us</span>
      </motion.h2>

      <div className=" bg-[#f8f7f0] ">
        <section className=" mt-24">
          <BecomePartner />
        </section>

        <section className=" mt-20 ">
          <ReelsSection />
        </section>
        <section className=" ">
          <MasonryGallery />
          <RatingWorks />
        </section>

        <section className=" mt-20">
          <Footer />
        </section>
      </div>
    </section>
  );
}

export default NewWorkWithUs;
