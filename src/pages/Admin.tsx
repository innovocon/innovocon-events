import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEventData } from '../context/EventContext';

export function Admin() {
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState('home');
  const { eventData, updateEventData } = useEventData();
  const pageData = eventData[selectedPage];

  const savePage = () => {
    updateEventData(selectedPage, pageData);
    alert('Changes saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex space-x-4 mb-8">
            {['home', 'hacknex', 'hackflag', 'zenith'].map((page) => (
              <button
                key={page}
                onClick={() => setSelectedPage(page)}
                className={`px-4 py-2 rounded ${
                  selectedPage === page
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={pageData.title}
                    onChange={(e) => updateEventData(selectedPage, { ...pageData, title: e.target.value })}
                    className="w-full bg-gray-700 text-white rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Date
                  </label>
                  <input
                    type="text"
                    value={pageData.date}
                    onChange={(e) => updateEventData(selectedPage, { ...pageData, date: e.target.value })}
                    className="w-full bg-gray-700 text-white rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Venue
                  </label>
                  <input
                    type="text"
                    value={pageData.venue}
                    onChange={(e) => updateEventData(selectedPage, { ...pageData, venue: e.target.value })}
                    className="w-full bg-gray-700 text-white rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Prize Pool
                  </label>
                  <input
                    type="text"
                    value={pageData.prizePool}
                    onChange={(e) => updateEventData(selectedPage, { ...pageData, prizePool: e.target.value })}
                    className="w-full bg-gray-700 text-white rounded px-3 py-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  value={pageData.description}
                  onChange={(e) => updateEventData(selectedPage, { ...pageData, description: e.target.value })}
                  rows={4}
                  className="w-full bg-gray-700 text-white rounded px-3 py-2"
                />
              </div>
            </div>

            {/* Sponsors Section */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Sponsors</h3>
              {pageData.sponsors.map((sponsor, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <input
                    type="text"
                    value={sponsor.name}
                    onChange={(e) => {
                      const newSponsors = [...pageData.sponsors];
                      newSponsors[index] = { ...sponsor, name: e.target.value };
                      updateEventData(selectedPage, { ...pageData, sponsors: newSponsors });
                    }}
                    placeholder="Sponsor Name"
                    className="bg-gray-700 text-white rounded px-3 py-2"
                  />
                  <select
                    value={sponsor.type}
                    onChange={(e) => {
                      const newSponsors = [...pageData.sponsors];
                      newSponsors[index] = { ...sponsor, type: e.target.value as any };
                      updateEventData(selectedPage, { ...pageData, sponsors: newSponsors });
                    }}
                    className="bg-gray-700 text-white rounded px-3 py-2"
                  >
                    <option value="title">Title</option>
                    <option value="gold">Gold</option>
                    <option value="silver">Silver</option>
                    <option value="bronze">Bronze</option>
                  </select>
                  <button
                    onClick={() => {
                      const newSponsors = pageData.sponsors.filter((_, i) => i !== index);
                      updateEventData(selectedPage, { ...pageData, sponsors: newSponsors });
                    }}
                    className="bg-red-600 text-white rounded px-4 py-2 hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={() => {
                  updateEventData(selectedPage, {
                    ...pageData,
                    sponsors: [...pageData.sponsors, {
                      name: '',
                      type: 'bronze',
                      logo: '',
                      website: '',
                      description: ''
                    }]
                  });
                }}
                className="bg-green-600 text-white rounded px-4 py-2 mt-4 hover:bg-green-700"
              >
                Add Sponsor
              </button>
            </div>

            <div className="flex justify-end pt-6">
              <button
                onClick={savePage}
                className="bg-indigo-600 text-white rounded px-6 py-2 hover:bg-indigo-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}