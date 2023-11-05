import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Image from "next/image";
import Main from "@/components/Main";
import casey from "@/public/images/IMG_0221.jpg";

const showDates = [
  {
    date: "May 15 Wed",
    venue: "Lyric Theater",
    time: "8:00pm",
    location: "Birmingham, AL, United States",
    rsvp: "RSVP",
  },
  {
    date: "May 15 Wed",
    venue: "Lyric Theater",
    time: "8:00pm",
    location: "Birmingham, AL, United States",
    rsvp: "RSVP",
  },
  {
    date: "May 15 Wed",
    venue: "Lyric Theater",
    time: "8:00pm",
    location: "Birmingham, AL, United States",
    rsvp: "RSVP",
  },
];

const Shows = () => {
  return (
    <Main>
      <Banner className="md:py-20">
        <BannerHeadline>Shows</BannerHeadline>
      </Banner>

      <section className="container">
        <ul className="mb-10">
          {showDates.map((show) => (
            <li
              key={show.date}
              className="flex items-center justify-between w-full py-6 border-b border-gray-200"
            >
              <div className="flex flex-col w-1/2 md:w-2/3 lg:w-3/4 md:flex-row">
                <h3>{show.date}</h3>
                <div className="flex flex-col lg:flex-row md:pl-10">
                  <div>
                    {show.venue} @ {show.time}
                  </div>
                  <div className="lg:pl-16">{show.location}</div>
                </div>
              </div>
              <div className="">RSVP</div>
            </li>
          ))}
        </ul>
      </section>
    </Main>
  );
};

export default Shows;
