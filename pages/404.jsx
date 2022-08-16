import { useRouter } from "next/router";
import { useEffect } from "react";


function NoMatch() {

  const router=useRouter();
  useEffect(()=>{
    setTimeout(()=>{
      router.replace("/")
    }, 2000)

  },[])
  return (
    <div className="wrong-site">
        <h2>There is no need to be here</h2>
    </div>
  )
}

export default NoMatch;