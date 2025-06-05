"use client";
import Map from "../map";
import {
  faPlaneDeparture,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function OurLocations() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-indigo-800 py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Where You Can Find Us
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Our rental points are strategically placed near Albania’s largest
              transportation hubs — so your next journey starts faster.
            </p>

            <div className="space-y-6">
              <Link href="/locations" className="block group">
                <div className="bg-black/80 p-6 rounded-xl hover:bg-black transition shadow-xl flex items-center gap-4">
                  <div className="text-3xl text-amber-400 group-hover:scale-110 transition">
                    <FontAwesomeIcon icon={faPlaneDeparture} />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Available at</p>
                    <h3 className="text-xl font-semibold">
                      Tirana International Airport
                    </h3>
                  </div>
                </div>
              </Link>

              <Link href="/locations" className="block group">
                <div className="bg-black/80 p-6 rounded-xl hover:bg-black transition shadow-xl flex items-center gap-4">
                  <div className="text-3xl text-amber-400 group-hover:scale-110 transition">
                    <FontAwesomeIcon icon={faUmbrellaBeach} />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Available at</p>
                    <h3 className="text-xl font-semibold">Durrës Port</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right map with frame */}
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
