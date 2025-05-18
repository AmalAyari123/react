import React, { createContext, useState } from 'react';
import listingApi from '../api/listingApi';

const ListingContext = React.createContext();

export const ListingProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadListings = async () => {
    try {
      setLoading(true);
      const result = await listingApi.getListings();
      setLoading(false);

      if (!result.ok) return setError(true);

      setError(false);
      setListings(result.data);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <ListingContext.Provider value={{ listings, loading, error, loadListings }}>
      {children}
    </ListingContext.Provider>
  );
};

export default ListingContext;
