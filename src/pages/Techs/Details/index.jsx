import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { techsDetails } from "../../../fakeDB";
import { Iframe } from "./styles";

const Details = () => {
  const routeParams = useParams();

  const [data, setData] = useState(null);

  const getDetails = () => {
    const techId = routeParams?.id;

    if (!techId) return;

    const techData = techsDetails.find((x) => x.id == techId);
    setData(techData);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return data && <Iframe src={data?.link} title="Tech details" />;
};

export default Details;
