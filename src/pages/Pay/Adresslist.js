import './Adresslist';

export default function Adresslist({ adressfilter, childFunction }) {
  //console.log(adressfilter);
  const info = adressfilter[0].adress;
  //console.log(info);
  childFunction(info);
  return (
    <div>
      {adressfilter.map(adress => (
        <li key={adress.id}>
          주소 : {adress.adress} 우편번호 : {adress.postNum}
        </li>
      ))}
    </div>
  );
}
