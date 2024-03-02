import React from 'react';
import useFetch from '../hooks/useFetch';
import styled from 'styled-components';
import { Bars } from "react-loader-spinner";
import WeatherCard from './WeatherCard';
import useGeoLocation from '../hooks/useGeoLocation';
import './Weather.css';


const LoaderWrapper = styled.div`
  margin: auto;
`;

const CardWrapper = (data) => {
  return (<>
    {data && <WeatherCard data={data.data} />}
  </>)
}

const Weather = () => {
  const { crd } = useGeoLocation();
  const { data, loading } = useFetch({ crd });

  return (<div className='Weather'>
    {loading ? (
      <LoaderWrapper>
        <Bars
          height="80"
          width="80"
          color="#ffffff"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </LoaderWrapper>
    ) :
      <CardWrapper data={data} />
    }
  </div>)
};

export default Weather;