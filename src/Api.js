import axios from "axios";
import { useQuery,  } from "react-query";
import API from './Data/Coviddata.json'

export function GetCovidDetails() {
    const getCovidDetails = async () => {
      console.log(API,"api");
      // const res = await fetch(`${API}`);
      // console.log(res,"res")
      return API;
    };
    const { data, error, isLoading } = useQuery("coviddetails", getCovidDetails);
    return { data, error, isLoading };
  }