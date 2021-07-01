import Counter from "../components/Counter";
import React from 'react';

const MEMBERS = 24;

const Information = () => (
  <div className="bg-gray-100 bg-opacity-70 justify-center my-3 p-3 min-h-0 text-yellow-600">
    <div className="flex flex-col md:flex-row mx-4">
      <div className="mx-3">
        <h4 className="my-3 text-4xl font-semibold text-yellow-700">Members</h4>
        <h6 className="text-8xl  font-extrabold mt-10"><Counter>MEMBERS</Counter></h6>
      </div>
      <div className="mx-3 justify-center">
        <h4 className="my-3 text-4xl font-semibold text-yellow-700">We are from</h4>
        <div className="grid grid-cols-3 justify-center font-medium">
          <h6 className="text-lg">🇦🇷 <br />Argentina</h6>
          <h6 className="text-lg">🇳🇱 <br />Netherlands</h6>
          <h6 className="text-lg">🇬🇧 <br />United Kingdom</h6>
          <h6 className="text-lg">🇧🇬 <br />Bulgary</h6>
          <h6 className="text-lg">🇫🇷 <br />France</h6>
          <h6 className="text-lg">🇧🇷 <br />Brazil</h6>
          <h6 className="text-lg">🇧🇪 <br />Belgium</h6>
        </div>
      </div>
      <div className="mx-3">
        <h4 className="my-3 text-4xl font-semibold text-yellow-700">Skating Days</h4>
        <div className="font-medium text-2xl mt-10">
          <h6>Tuesdays and Thursdays</h6>
          <h6>19:30hs</h6>
          <h6>Vondelpark, Amsterdam</h6>
        </div>
      </div>
    </div>
  </div >
);

export default Information;
