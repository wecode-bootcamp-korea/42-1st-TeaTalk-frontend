import './Adresslist';

export default function Adresslist({ adressfilter, childFunction }) {
  //console.log(adressfilter);
  const adress = adressfilter[0].adress;
  const postNum = adressfilter[0].postNum;
  //console.log(info);
  // childFunction(adress);
  // childFunction(postNum);

  const sendInfo = () => {
    childFunction(adress);
    childFunction(postNum);
  };
  return (
    <div>
      {adressfilter.map(adress => (
        <li key={adress.id}>
          주소 : {adress.adress} 우편번호 : {adress.postNum}
        </li>
      ))}
      <button onClick={sendInfo}>주소저장</button>
    </div>
  );
}
