import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  //주소에 전달된 파라미터 읽기
  const params = useParams();
  console.log(params);

  return (
    <>
      <h1>제품 상세보기 화면</h1>
      <p>
        제품 id: {params.prodId}, 페이지번호 : {params.pageNo}
      </p>
    </>
  );
};

export default ProductDetail;
