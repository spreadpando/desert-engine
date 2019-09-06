import React, {useEffect} from 'react';
import mountVR from'./environment';
const Environment = () => {
    mountVR();
    return ( <a-entity environment="width:3;height:3;depth:3;color:red;"></a-entity> );
}
 
export default Environment;