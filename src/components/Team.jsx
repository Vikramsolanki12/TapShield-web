import React from "react";
import { FaGithub, FaFileAlt } from "react-icons/fa";

const getDirectDriveLink = (url) => {
  const match = url.match(/\/d\/([^/]+)\//);
  return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : "";
};

const TeamMemberCard = ({
  name,
  role,
  description,
  email,
  year,
  branch,
  github,
  resume,
  image,
}) => (
  <div className="bg-[#0f172a] text-white p-6 rounded-2xl border border-indigo-700 shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 transform hover:-translate-y-2 animate-slideInUp flex flex-col justify-between h-full max-w-sm mx-auto">
    {/* Avatar */}
    <div className="flex flex-col items-center">
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-lg border-4 border-indigo-600 mb-4">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 text-5xl font-extrabold">
            {name.charAt(0)}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-indigo-300 mb-1">{name}</h3>
        <p className="text-indigo-400 text-sm font-medium">{role}</p>
        <p className="text-gray-400 text-xs italic mt-1">
          {branch} • {year}
        </p>
      </div>

      {/* Bio */}
      <p className="text-gray-300 text-sm text-center mt-4 px-2">
        {description}
      </p>

      {/* Email */}
      {email && (
        <a
          href={`mailto:${email}`}
          className="text-indigo-400 hover:text-indigo-300 text-sm mt-3 break-all underline text-center"
        >
          {email}
        </a>
      )}
    </div>

    {/* Buttons aligned at the bottom */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-6">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-full text-sm font-medium shadow-md transition-all"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>
      )}
      {resume && (
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-full text-sm font-medium shadow-md transition-all"
        >
          <FaFileAlt className="mr-2" /> Resume
        </a>
      )}
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Vikram Solanki",
      role: "AI Model, ML, GSM and Arduino",
      description:
        "Expert in developing the core AI model and integrating hardware components.",
      email: "solankijogaram5@gmail.com",
      year: "3rd Year",
      branch: "Artificial Intelligence and Data Science",
      github: "https://github.com/Vikramsolanki12",
      resume:
        "https://drive.google.com/file/d/1JWOZSayqXAzsVB41Wdsl7CrCCYsdlmY_/view?usp=drive_link",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCxYhO5WKWvYcMBgj6Xnl3VNCIpP62_lVnJhUBUFYBFElYjDpJE5HoE5-2tbmI1214td-qRVol5Xsr7DoZ6TRbMUuaH3CURQbB1Kg70TSa7MLQOqmXflXcLM0IXdnEKQOcIyUDdKEgWNglgtQ7ndJFcCHLMMp7GGii0WdCBfqBzvtG-4CGPHPOqHf-CSY/s458/vikram_solanki.png",
    },
    {
      name: "Vikas",
      role: "Circuit Design, Pitch and Presentation",
      description:
        "Responsible for the robust circuit design and project communication.",
      email: "vikassolankiiitd@gmail.com",
      year: "3rd Year",
      branch: "Electronics and Computer Engg.",
      github: "https://github.com/Vikas11-solanki",
      resume:
        "https://drive.google.com/file/d/1n1Mlbj5qKu2Fngzys4e639NdYMR2DnwH/view?usp=drive_link",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRZS2Hayy9T53cI6czfYjRqgjV7Rmr6SMEriYQ272lEFhrhq-OolpyrhC1qNFGNggkV2ZuGfqG-0JAQvGcaU-QJrqNuyGEhB7xWwXqLH9Sac1OUkhz_n6swGrgLgZUWr2JliYGIkJ65ef7NkAgn543p4Ajezo0t_eDFmPw6eyUyT248utTwFX_ynKQpwE/s320/WhatsApp%20Image%202025-07-10%20at%2020.14.16.jpeg",
    },
    {
      name: "Rahul Tak",
      role: "AI & ML, Pitch and Presentation",
      description:
        "Contributed significantly to AI/ML development and compelling presentations.",
      email: "rahultak.tech@gmail.com",
      year: "3rd Year",
      branch: "Information Technology",
      github: "https://github.com/Rahul-Tak-Projects",
      resume:
        "https://drive.google.com/file/d/12vheP_Qtp7FO4QGE4D61Skk6c0p8kU0C/view?usp=drive_link",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNFPkzzO2YmNBiWrjS1NakAXp4jMOPi-rmlrt31-0EFcKK0l6ll9fPZKYwMekZGbQ4pAFT-8tn4WATajlY4fAS1gRQqvDA04Z7mXyD1rcQR6BbCb4XuphekWUZgnREFGwIWaLiWZ-EHx8g1tiB4yVjwB-4QrCuu_fMlOJvdijWK2YmM-9QGNttaMko5fw/w180-h320/WhatsApp_Image_2025-07-10_at_21.18.48-removebg-preview%20(1).png",
    },
    {
      name: "Sheshkaran",
      role: "ML and Web Development",
      description:
        "Focused on machine learning implementation and building the web presence.",
      email: "sksolanki1366@gmail.com",
      year: "3rd Year",
      branch: "Information Technology",
      github: "https://github.com/sms2109",
      resume:
        "https://drive.google.com/file/d/1Lr_YrxJG4IISlVH4Xk4ZJpB_OkGD_Sdk/view?usp=drive_link",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgopGIdi_N-SZ32dOGVxDJYHE8rxUVBLIDPk3LXO83QjeF-LZ4PSHNsZGUv8uVCTKzZncZOiH11l2bSOKkxwlOEnHVV5z37vcGHxHdLa3pQst9AbWVihqvUa43lU0L_Zymx51JAcDYoLaL4QpyMkY-NVHIH36WNwPEJawQm0BFrvKdjdBPVFuzMzsTuqP4/s320/WhatsApp_Image_2025-07-10_at_21.28.35-removebg-preview.png",
    },
  ];

  return (
    <section
      id="team"
      className="relative py-20 md:py-24 bg-gradient-to-br from-[#0d1117] via-[#0f172a] to-[#1e293b] text-white overflow-hidden"
    >
      {/* Shield glow background */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[500px] h-[500px] bg-radial from-indigo-700/30 via-purple-500/10 to-transparent rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto my-8 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 animate-fadeIn">
          Meet the Team:&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 drop-shadow-[0_0_10px_rgba(139,92,246,0.6)] animate-glow">
            Runtime Terror
          </span>
        </h2>

        <p className="text-center text-indigo-200 text-xl italic mb-12 animate-slideInUp animation-delay-300">
          "Silent safety. Smart protection. One tap at a time."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
