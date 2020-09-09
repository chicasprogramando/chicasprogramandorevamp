import React, { useEffect, useState } from "react";
import ProfileModal from "../ProfileModal";
import styles from "../../styles/Card.module.css";

const Card = ({ profile }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && (
        <ProfileModal
          open={modalOpen}
          setOpen={setModalOpen}
          profile={profile}
        />
      )}
      <div className="w-30 shadow-lg cursor-pointer m-2">
        <div
          className={`flex h-64 p-4 border-l-4 border-purple`}
          onClick={() => setModalOpen(true)}
        >
          <div
            className="mr-4 h-48 w-1/3 lg:h-auto lg:w-1/3 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage: `url(${profile.image_path})`,
              backgroundPosition: "center",
            }}
          ></div>
          <div className="flex flex-col w-full px-4 justify-around">
            <div className="flex flex-col h-full">
            <p className="text-purple text-xl font-bold mb-2">{profile.name}</p>
            <p className="flex flex-wrap">
              {profile.specialty.map((specialty, i) => (
                i === 0 ? <span key={specialty.id} className="text-lg font-bold">
                {specialty.description}
              </span> : 
                <span key={specialty.id} className="text-lg font-bold">
                   - {specialty.description}
                </span>
              ))}
            </p>
            <span className="text-sm text-gray3 font-semibold text-sm">
              Skills
            </span>
            <p className={`flex flex-wrap overflow-hidden ${styles.text}`}>
              {profile.skill.map((skill, i) =>
                i === 0 ? (
                  <span className="text-sm font-semibold" key={skill.id}>
                    {skill.description}
                  </span>
                ) : i <= 4 ? (
                  <span key={skill.id} className="text-sm font-semibold">
                    - {skill.description}
                  </span>
                ) : i === 6 && <span> ... </span>
              )}
            </p>
            </div>
            <div className="flex justify-self-end w-full pb-4">
              {profile.instagram && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={styles.iconLink}
                >
                  <path
                    fill="#805dc0"
                    d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z"
                  />
                </svg>
              )}
              {profile.github && (
                <a href={profile.github} target="_blank">
                  {console.log(profile.github, 'el github')}
                <svg
                onClick={() => console.log('entra bien al onclick')}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={styles.iconLink}
                >
                  <path
                    fill="#805dc0"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                </a>
              )}
              {profile.twitter && (
                <svg
                  fill="#805dc0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={styles.iconLink}
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              )}
              {profile.linkedin && (
                <svg
                  fill="#805dc0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={styles.iconLink}
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
