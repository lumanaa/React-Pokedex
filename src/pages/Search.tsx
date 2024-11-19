import { useEffect } from "react";
import Wrapper from "../sections/Wrapper";
import { useAppDispatch } from "../app/hooks";
import { AppDispatch } from "../app/store";
import { getInitialData } from "../app/reducers/getInitialData";

const Search = () => {
  const dispatch = useAppDispatch(); // No type argument here

  useEffect(() => {
    dispatch(getInitialData());
  }, [dispatch]);
  return <div>Search</div>;
};

const WrappedSearch = Wrapper(Search);

export default WrappedSearch;
