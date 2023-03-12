import WheaterAppInfoEn from "./WheatherAppInfoEn";
import WheaterAppInfoEs from "./WheatherAppInfoEs";

export default function WheatherAppInfo({darkmode,language}){
  console.log(darkmode)

  return (
    language==='spanish'?
    <WheaterAppInfoEs darkmode={darkmode} />:
    <WheaterAppInfoEn darkmode={darkmode} />
  )
} 