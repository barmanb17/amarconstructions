import React from "react";
import { Vortex } from "@/components/ui/vortex"; 
import { Link } from "lucide-react";

export function VortexDemo() {
  return (
    <div className="w-full mx-auto  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-2 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
          Ready to Start Your Project?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Contact us today to discuss your construction needs and get a free quote.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-8 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-md text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Get in Touch
          </button>
          
        </div>
      </Vortex>
    </div>
  );
}
