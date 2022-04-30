import axios from "axios";
import { useEffect, useState } from "react";

function ComponentOne() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://smoothcommerce.tech/api.json")
      .then((response) => {
        setData((prevData) => {
          return [prevData, ...response.data];
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="grid grid-flow-row overflow-hidden m-0">
        <div className="grid grid-cols-4 sm:grid-flow-col sm:grid-cols-12">
          <div className="border-2 border-red-800">SN.</div>
          <div className="col-span-3 border-2 border-red-800 sm:col-span-2">
            Business name
          </div>
          <div className="col-span-4 border-2 border-red-800 sm:col-span-3">
            Website
          </div>
          <div className="col-span-4 border-2 border-red-800 sm:col-span-6">
            Address
          </div>
        </div>

        {data.map((value) => {
          {
            console.log(value);
          }
          return (
            <>
              <div
                className="grid grid-cols-4 sm:grid-flow-col sm:grid-cols-12"
                key={value.id}
              >
                <div className="border-2 border-red-800">{value.id}</div>
                <div className="col-span-3 border-2 border-red-800 sm:col-span-2">
                  {value.company_name}
                </div>
                <div className="col-span-4 border-2 border-red-800 sm:col-span-3">
                  {value.website}
                </div>
                <div className="col-span-4 border-2 border-red-800 sm:col-span-6">
                  {value.address}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ComponentOne;
