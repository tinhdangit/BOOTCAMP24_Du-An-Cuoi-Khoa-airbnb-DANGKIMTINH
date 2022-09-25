import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { layThongTinDanhGiaPhongAction } from "redux/actions/getInfoAction";

const VoteRoom = () => {
  let { idroom } = useParams();

  const dispatch = useDispatch();
  const infoVoteRoom = useSelector((state) => state.roomReducer.infoVoteRoom);
  console.log("infoVoteRoom", infoVoteRoom);
  console.log("idroom", idroom);
  useEffect(() => {
    console.log("useEffect check");
    dispatch(layThongTinDanhGiaPhongAction(idroom));
  }, []);
  return <div>VoteRoom</div>;
};

export default VoteRoom;
