import React, { useState, useEffect } from 'react';


const PodcastList = () => {
    const [podcastIds, setPodcastIds] = useState([]);
  
    useEffect(() => {
      const fetchPodcastIds = async () => {
        try {
          const response = await fetch('http://localhost:3000/podcasts/ids');
          if (!response.ok) {
            throw new Error('Failed to fetch podcast IDs');
          }
          const data = await response.json();
          setPodcastIds(data.data);
        } catch (error) {
          console.error('Error fetching podcast IDs:', error);
        }
      };
  
      fetchPodcastIds();
    }, []);
  
    return (
      <div>
        <h2>Podcast IDs</h2>
        <ul>
          {podcastIds.map(id => (
            <li key={id}>{id}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PodcastList;