import { motion } from 'framer-motion';

interface OrganizationMember {
  name: string;
  role: string;
  photo?: string;
}

export function OrganizationStructure() {
  const leadership = [
    {
      name: 'Sardar Taranjit Singh',
      role: 'Chief Patron',
      designation: 'MD, JIS Group',
      photo: '/images/leadership/taranjit-singh.jpg'
    },
    {
      name: 'Simarpreet Singh',
      role: 'Chief Patron',
      designation: 'Director, JIS Group',
      photo: '/images/leadership/simarpreet-singh.jpg'
    },
    {
      name: 'Prof. (Dr.) Partha Sarkar',
      role: 'Patron',
      designation: 'Principal, JISCE',
      photo: '/images/leadership/partha-sarkar.jpg'
    },
    {
      name: 'Dr. Sitanath Biswas',
      role: 'Convenor',
      designation: 'HOD (CSE(AIML) & CST), JISCE',
      photo: '/images/leadership/sitanath-biswas.jpg'
    },
    {
      name: 'Dr. Sayan Chakraborty',
      role: 'Co-Convenor',
      designation: 'Asst. Prof. CSE(AIML) & CST, JISCE',
      photo: '/images/leadership/sayan-chakraborty.jpg'
    }
  ];

  const advisors = [
    { name: 'Dr. Debasis Sanki', role: 'Deputy Registerer, JISCE' },
    { name: 'Dr. Bikramjit Sarkar', role: 'HOD, CSE, JISCE' },
    { name: 'Dr. Soumyabrata Sarkar', role: 'HOD, IT, JISCE' },
    { name: 'Dr. Moumita Pal', role: 'HOD, ECE, JISCE' },
    { name: 'Dr. Debashish Majumder', role: 'HOD, BSHU & Mathematics, JISCE' },
    { name: 'Dr. Shyam Sundar Santra', role: 'Asso. Dean R&D, JISCE' }
  ];

  const facultyCommittee = [
    { name: 'Mr. Subhadip Goswami', role: 'Faculty Member' },
    { name: 'Mr. Sanket', role: 'Faculty Member' },
    { name: 'Dr. Arun Kumar Sadhu', role: 'Faculty Member' },
    { name: 'Mr. Uddalak Mitra', role: 'Faculty Member' },
    { name: 'Dr. Monish Mukul Das', role: 'Faculty Member' },
    { name: 'Mr. Anirudha Ghosh', role: 'Faculty Member' },
    { name: 'Ms. Trisha Bera', role: 'Faculty Member' },
    { name: 'Mr. Anirban Ghoshal', role: 'Faculty Member' },
    { name: 'Mrs. Saswati Rakshit', role: 'Faculty Member' },
    { name: 'Mrs. Subhashree Sahoo', role: 'Faculty Member' },
    { name: 'Mr. Pronoy Pal', role: 'Faculty Member' },
    { name: 'Mr. Ritadik Chakraborty', role: 'Faculty Member' }
  ];

  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Organization Structure</h2>

        {/* Leadership */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-6 text-center"
              >
                {leader.photo && (
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <h4 className="text-xl font-bold text-white mb-2">{leader.name}</h4>
                <p className="text-indigo-400 mb-1">{leader.role}</p>
                <p className="text-gray-400">{leader.designation}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Advisors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisors.map((advisor) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-6 text-center"
              >
                <h4 className="text-lg font-bold text-white mb-2">{advisor.name}</h4>
                <p className="text-gray-400">{advisor.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Faculty Organizing Committee */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Faculty Organizing Committee</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {facultyCommittee.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-4 text-center"
              >
                <h4 className="text-lg font-bold text-white mb-2">{member.name}</h4>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}