import { useReducer, useState, useEffect } from 'react';

const GITHUB_GET_ORG_MEMBERS_URL = org => `https://api.github.com/orgs/${org}/members`;

const membersFetchReducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        users: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      throw new Error('Not suppored action');
  }
};

export default function useFetchMembers(initialUrl) {
  const [search, setSearch] = useState(initialUrl);

  const [state, dispatch] = useReducer(membersFetchReducer, {
    users: [],
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const response = await fetch(GITHUB_GET_ORG_MEMBERS_URL(search));
        if (response.status < 200 || response.status >= 300) {
          throw new Error('Organization not found');
        }
        const payload = await response.json();

        dispatch({ type: 'FETCH_SUCCESS', payload });
      } catch(error) {
        dispatch({ type: 'FETCH_ERROR', error })
      }
    }

    fetchUsers();
  }, [search]);

  return [state, setSearch];
}